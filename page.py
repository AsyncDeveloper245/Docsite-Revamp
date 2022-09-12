import os
from string import ascii_lowercase
from yaml import safe_load
from markdown import markdown
from bs4 import BeautifulSoup
from jinja2 import Environment, PackageLoader
from pathlib import Path
import yaml


# from playground import add_playground


ROOT_DIR = "output/dist/"


def rmdir(dir):
    path = os.path.normpath(dir)
    for root, dirs, files in os.walk(path, topdown=False):
        for f in files:
            os.remove(os.path.join(root, f))
        for d in dirs:
            os.rmdir(os.path.join(root, d))

    os.rmdir(dir)
    return


os.makedirs(os.path.join(ROOT_DIR, "Encyclopedia/"), exist_ok=True)

# ? Parse Given Template
def parse_template(template_object: list, **kwargs):
    for item in template_object:
        # template object is a list of template objects
        for template_name, template_path in item.items():
            if template_name is not None:
                os.makedirs(
                    os.path.join(ROOT_DIR, template_name),
                    exist_ok=True,
                )
                with open(template_path, "r") as f:
                    template = f.read()
                    # template = Template(template)
                    env = Environment(loader=PackageLoader("page", "templates"))
                    template = env.get_template(template_path.split("/")[-1])

                output = template.render(kwargs)
                template_name.replace(".md", "")
                with open(
                    os.path.join(
                        ROOT_DIR,
                        template_name,
                        "index.html",
                    ),
                    "w",
                ) as f:
                    f.write(output)
            else:
                with open(template_path, "r") as f:
                    template = f.read()
                    # template = Template(template)
                    env = Environment(loader=PackageLoader("page", "templates"))

                    template = env.get_template(template_path.split("/")[-1])
                output = template.render(kwargs)

                with open(
                    os.path.join(ROOT_DIR, "index.html"),
                    "w",
                ) as f:
                    f.write(output)


#! Parse PDF Links
def parse_pdf_links(pdf_link):
    link_array = pdf_link.split()
    download_name = " ".join(link_array[1:3])
    download_link = link_array[3]
    return (download_name, download_link)


def make_filepath(subdir, group, pagename):
    if subdir.endswith(".md"):
        filepath = "/".join([group, pagename]).replace("-", "").replace(" ", "_")
        filepath = filepath.replace("__", "_")
    else:
        filepath = (
            "/".join([group, subdir, pagename]).replace("-", "").replace(" ", "_")
        )
        filepath = filepath.replace("__", "_")
    return filepath


class Pages:
    """
    This is the base class for all pages. It is used to generate the HTML pages from the markdown files.
    The class takes in the following parameters:

    1. config_file␜: The path to the config.yml file
    2. project_home_title📁: The title of the project home directory

    The class has the following methods🔣:
    1. read_yaml: This method reads the config.yml file and stores the data in the class variables
    2. set_page_siblings: This method sets the siblings of each page. This is used to generate the links to the other pages in the same group
    3. get_page_siblings: This method returns the siblings of the current page. This is used to generate the links to the other pages in the same group
    4. get_nav_pages: This method returns the pages that are to be displayed in the navigation bar
    5. get_page: This method returns the HTML page for the given group and page
    6. get_page_title: This method returns the title of the page
    7. get_page_content: This method returns the content of the page
    8. get_page_links: This method returns the links of the page
    9. write_links_to_yaml: This method writes the links of the pages to the links.yml file
    10. build_encyclopedia: This method builds the encyclopedia page
    11. write_to_template: This method writes the HTML page for the given group and page

    """

    def __init__(self, config_file, project_home_title):
        assert os.path.isfile(config_file), "Config file does not exist"
        self.config_file = config_file
        self.pages: dict = {}
        self.css_files: list = []
        self.js_files: list = []
        self.links: list = []
        self.siblings: dict = {}
        self.link_data: dict = {}
        self.search_obj: list = []
        self.pedia_obj: dict = {}
        self.encyclopedia_object: dict = {}
        self.base_dir = os.path.join(
            Path(__file__).resolve().parent.parent,
            project_home_title,
        )
        assert os.path.isdir(self.base_dir), "Project home directory does not exist"
        self.read_yaml()
        self.nav_pages = self.get_nav_pages()
        self.template_objects: list = [
            {"Encyclopedia": self.encyclopedia_path},
            {"Data_Dictionary/Viewer": self.viewer_path},
            {None: self.index_path},
        ]
        # self.build_encyclopedia()

    def read_yaml(self):
        with open(self.config_file) as f:
            yml = safe_load(f)

        # Get Home Directory
        yml["site_loc"] = self.base_dir
        self.home_directory = self.base_dir
        # Get Site URL (Should be same as home directory for development)
        self.site_url = self.base_dir

        # Get Location of HTML Template
        self.template_path = os.path.join(self.home_directory, yml["template_path"])
        self.encyclopedia_path = os.path.join(
            self.home_directory, yml["encyclopedia_path"]
        )
        self.index_path = os.path.join(self.home_directory, yml["index_path"])
        self.viewer_path = os.path.join(self.home_directory, yml["dict_viewer_path"])

        # Get GDC Logo location
        self.logo = os.path.join(self.home_directory, yml["logo"])

        # Get Pages
        for d in yml["pages"]:
            group = list(d.keys())[0]
            self.pages[group] = d[group]

        # Get CSS file locations
        for f in yml["css_files"]:
            self.css_files.append(os.path.join("/", f))

        # Get Js Files
        for f in yml["js_files"]:
            self.js_files.append(os.path.join("/", f))

        # Get Links
        try:
            with open("links.yml") as link:
                link_yml = safe_load(link)
            self.link_data = link_yml

        except FileNotFoundError:
            print("No links.yml file found. Links will  be generated now.")
            self.write_links_to_yaml()
        finally:
            with open("links.yml") as link:
                link_yml = safe_load(link)
            self.link_data = link_yml
            self.write_links_to_yaml()

        return

    # Write links to links.yml
    def write_links_to_yaml(self):
        for group in self.pages.keys():

            for page in self.pages[group]:

                # Get name of current page, and it's location
                pagename = list(page.keys())[0]
                pageloc = page[pagename]
                # print(group,pageloc.split('/')[1],pagename)
                subdir = page[pagename].split("/")[1]
                # parse md files that are in the group folder
                filepath = make_filepath(subdir, group, pagename)
                self.links.append(
                    {
                        str(
                            pageloc.split("/")[0]
                            + "_"
                            + pageloc.split("/")[-1].replace(".md", "")
                        ): "output/dist/"
                        + filepath
                    }
                )
        with open("links.yml", "w+") as f:
            yml = safe_load(f)
            for link in self.links:
                yaml.dump(link, f)

        return

    def write_pages(self):
        # Clear output directory if it exists
        try:
            rmdir("output")
        except Exception:
            pass

        # Copy markdown folder
        os.system("cp -R docs output")

        # Iterate through self.pages dictionary and write each markdown file to template
        for group in self.pages.keys():

            for page in self.pages[group]:

                # Get name of current page, and it's location
                pagename = list(page.keys())[0]
                pageloc = page[pagename]
                # print(group,pageloc.split('/')[1],pagename)
                subdir = page[pagename].split("/")[1]
                # parse md files that are in the group folder
                filepath = make_filepath(subdir, group, pagename)

                # Write to template and remove markdown file
                # slug = slugify(pageloc.split('/')[0] +'/' + pageloc.split('/')[-1]).replace("-md","")
                os.makedirs(ROOT_DIR + filepath, exist_ok=True)

                # print(self.pages.keys())
                print(
                    f"Writing Markdown🔄: {pagename} to {ROOT_DIR + filepath + '/index.html'}"
                )
                try:

                    self.write_to_template(
                        "output/" + pageloc,
                        ROOT_DIR + filepath + "/index.html",
                        group,
                        pagename,
                    )
                    print(f"Done......\nMarkdown written to template✅")
                except Exception as e:
                    print(f"Error writing markdown to template❌: {e}")

            if group == "Encyclopedia":
                for page in self.pages["Encyclopedia"]:
                    # Get name of current page, and it's location
                    pagename = list(page.keys())[0]
                    pageloc = page[pagename]

                    # slugify the url
                    # slug = slugify(pageloc.split('/')[0] +'/' + pageloc.split('/')[-1]).replace("-md","")
                    subdir = page[pagename].split("/")[1]
                    filepath = make_filepath(subdir, group, pagename)
                    self.pedia_obj[pagename] = ROOT_DIR + filepath

                    for c in ascii_lowercase:
                        letter = str(c).capitalize()
                        page_first_letter = pagename[0].capitalize()
                        if letter == page_first_letter:
                            # get pagename and links alphabetically
                            self.encyclopedia_object[
                                letter
                            ] = self.encyclopedia_object.get(letter, []) + [
                                (
                                    pagename,
                                    "/" + ROOT_DIR + filepath,
                                )
                            ]
                            self.encyclopedia_object[letter] = sorted(
                                self.encyclopedia_object[letter]
                            )

            parse_template(
                self.template_objects,
                css=self.css_files,
                logo=self.logo,
                pagename=pagename,
                pedia_object=self.pedia_obj,
                js=self.js_files,
                nav_pages=self.nav_pages,
                encyclopedia_object=self.encyclopedia_object,
            )
        with open("js/search.js", "w+") as f:
            f.write(f"const searchData = {self.search_obj};")
        os.remove(os.path.join("output", pageloc))

        return

    # Build page Siblings
    def set_page_siblings(self):

        siblings = {}
        for group in self.pages.keys():
            siblings_group = []
            for page in self.pages[group]:
                [siblings_group.append(i) for i in page if i != page]
            siblings[group] = siblings_group

        for group in siblings.keys():
            a = {}
            for page in siblings[group]:
                current_page = page
                siblings_group = [i for i in siblings[group] if i != current_page]
                a[current_page] = siblings_group
            self.siblings[group] = a

        return

    # Get siblings for current page: Can be used in the sidebar. ! Still needs fixing.
    def get_page_siblings(self, group, page):
        self.set_page_siblings()
        return self.page_siblings[group][page]

    def get_nav_pages(self):
        nav_pages = {}
        for group in self.pages.keys():
            for page in self.pages[group]:

                pname = list(page.keys())[0]
                if not "PDF" in pname:

                    # ploc = page[pname].replace("md", "html")
                    # pageloc = page[pname]
                    subdir = page[pname].split("/")[1]
                    filepath = make_filepath(subdir, group, pname)
                    # slug = slugify(pageloc.split('/')[0] +'/' + pageloc.split('/')[-1]).replace("-md","")
                    # ?  This  Sub pages in navbar
                    if group in list(nav_pages.keys()):
                        nav_pages[group].append(
                            {pname: f"{ '/' + ROOT_DIR + filepath}"}
                        )
                    else:
                        nav_pages[group] = []

                else:

                    (
                        download_name,
                        download_loc,
                    ) = parse_pdf_links(pname)
                    if group in list(nav_pages.keys()):
                        nav_pages[group].append({download_name: download_loc})
                    else:
                        nav_pages[group] = []

        # print(nav_pages)
        return nav_pages

    def write_to_template(self, markdown_path, output_path, group, pagename):

        # Get Jinja HTML Template
        with open(self.template_path, "r") as f:
            template = f.read()

        env = Environment(loader=PackageLoader("page", "templates"))

        template = env.get_template("template.html", "navbar.html")
        # template = Template(template)

        # Read markdown to string
        with open(markdown_path, "r") as f:
            content = f.read()

        # Convert markdown to html and add extras
        content = markdown(
            content,
            extensions=[
                "markdown.extensions.tables",
                "markdown.extensions.fenced_code",
                "markdown.extensions.attr_list",
            ],
        )
        content = content.replace("</h1>", "</h1><hr>")
        content = content.replace("<h1>", '<h1><i class="fas fa-book"></i>   ')
        content = content.replace("<table>", "<table class='table'>")

        soup = BeautifulSoup(content, "html.parser")

        # print(soup.pre.find_next())
        headers = soup.find_all(["h1", "h2"])
        for header in headers:
            output_path_ = output_path.replace("/index.html", "")
            self.search_obj.append(
                {
                    "name": header.text + "-" + group,
                    "location": "/" + output_path_,
                }
            )

        # Get Current page information for scroll-to section of sidebar
        soup = BeautifulSoup(content, "html.parser")
        sidebar_inner = ""
        for h2 in soup.find_all("h2"):
            val = str(h2.string)
            h2["id"] = val  # add id for sidebar to scroll to
            sidebar_inner += f"<li><a href='#{val}'>{val}</a></li>"

        # Iterate through current group and place every page into sidebar
        sidebar = ""
        for page in self.pages[group]:
            pname = list(page.keys())[0]
            if not "PDF" in pname:
                # ploc = page[pname].replace("md", "html")
                # pageloc = page[pname]
                # slug = slugify(pageloc.split('/')[0] +'/' + pageloc.split('/')[-1]).replace("-md","")
                subdir = page[pname].split("/")[1]
                filepath = make_filepath(subdir, group, pname)
                if pname == pagename:
                    sidebar += f'<li class="main"><a href="/output/dist/{filepath}">{pname}</a></li>'

                    sidebar += "<ul>"
                    sidebar += sidebar_inner
                    sidebar += "</ul>"
                else:
                    sidebar += f'<li class="inactive"><a href="/output/dist/{filepath}">{pname}</a></li>'
            else:
                (
                    download_name,
                    download_loc,
                ) = parse_pdf_links(pname)
                if pname == pagename:
                    sidebar += f'<li class="main"><a href="{download_loc}">{download_name}</a></li>'
                    sidebar += "<ul>"
                    sidebar += sidebar_inner
                    sidebar += "</ul>"
                else:
                    sidebar += f'<li class="inactive"><a href="{download_loc}">{download_name}</a></li>'

        # for code_tag in soup.find_all('code',attrs={'class':'language-python'}):
        #     new_tag = soup.new_tag('py-repl')
        #     new_tag.string = code_tag.string
        #     code_tag.parent.insert_after(new_tag)

        # Render output and write to file
        content = str(soup)
        output = template.render(
            content=content,
            sidebar=sidebar,
            css=self.css_files,
            logo=self.logo,
            pagename=pagename,
            site_url=self.site_url,
            link=self.link_data,
            search_obj=self.search_obj,
            nav_pages=self.nav_pages,
        )
        with open(output_path, "w") as f:
            f.write(output)

        return
