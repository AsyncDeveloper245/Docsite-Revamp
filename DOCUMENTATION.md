![](https://gdc.cancer.gov/sites/all/themes/gdc_bootstrap/logo.png)

# GDC Open Source code

=======
GDC is Open Source, Github Repositories containing source code of GDC Applications can be found on [GDC GitHub Organization page](https://github.com/NCI-GDC/).

- GDC Data Portal: https://github.com/NCI-GDC/portal-ui
- GDC Data Transfer Tool: https://github.com/NCI-GDC/gdc-client
- GDC Data Dictionary: https://github.com/NCI-GDC/gdcdictionary
- GDC Data Model: https://github.com/NCI-GDC/gdcdatamodel
- GDC Psqlgraph: https://github.com/NCI-GDC/psqlgraph

# Support

Please direct technical questions to [GDC Support](https://gdc.cancer.gov/support).

# GDC Documentation Site

### Technology

- Python 3.6 and above
- [jinja](http://www.jinja.palletsprojects.com/)

### Install & Run

(Optional) Set up virtualenv:

- [Install virtualenv](https://packaging.python.org/guides/installing-using-pip-and-virtual-environments/)
- `python -m virtualenv venv`
- `source venv/bin/activate`
- Run the installation commands below
- To leave the virtual environment: `deactivate`

Install GDC-docs:

- `pip install -r reqs.txt`
- `python startserver.py` (optionally set port `-port <PORT>`)

### Build

- `python3 setup.py -p 'Project_base_dir' -d 'the yaml configuration file'`

### Repository Conventions

- All Shared content in the "Commons" directory
- One Directory per GDC product (API, Data_Portal, Data_Submission_Portal, Data_Transfer_Tool)
- Each GDC product have a Users_Guide and Release_Notes directory

### Linking

To get a list of all page links available refer to the links.yml file.

To another documentation page

```
[Authentication and Authorization](../../Commons/Authentication)

```

Inside another documentation page

```
[Authentication and Authorization](../../Commons/Authentication#internal-section)
```

### Adding icons and PDFs

The convention for this, when updating docs.yml is the following:

- <font-awesome-icon> <content> <url ending in .pdf>: 'index.md'
  example:
- fa-file-pdf-o Download PDF /API/PDF/API_UG.pdf: 'index.md'

### Documentation Conventions

A detailed list of all conventions is available on [GDC Website](https://gdc.cancer.gov/conventions-page)

# Working on the Project

## Introduction

The GDC docs revamp project is based on an object oriented python script which uses the Jinja templating engine to write markdown file content to HTML templates, and build them to a static site directory.

## docs.yml

The docs.yml file contains the structure of the docsite, including the location of any markdown pages to be written to HTML, as well as the location of key HTML template files and accessory js/css files. This file is parsed upon the initialization of the python class `Pages` and used to build the site directory.

## Page.py and Setup.py

Setup.py is the main setup script for the website. It can be run from the command `python3 setup.py -p 'Project_base_dir' -d 'the yaml configuration file'` and is dependent on the page.py script. page.py contains the class `Pages` which initializes from a docs.yml configuration file, and parses the HTML templates: writing page content, and filling out the main navigation topbar, and the sidebar with link locations. It also links relevant javascript and css files at the top and bottom of the template page. The two main relevant functions are `write_to_template`, and `write_pages` which are used to write the contents of a markdown file to template.html

There are a few pages, such as the main index page and the Encyclopedia index page which are not populated with content from a markdown file, but are still parsed as templates in order to fill in the page navigation topbar, and link any necessary js or css files. These are treated as special cases within the `write_pages` function, and have their own template files under the templates directory.

## Main Index Page

The main index page is located under `templates/index.html` and contains a searchbar used to search for information from page headers. The search bar is powered by `js/search.js` a javascript file created by the page.py script containing an object which has every header section on each page alongside a link to that page. There is additional javascript code on the templates.html file using an asynchronous function to search through the search.js object and display any matches to the search input.

## Encyclopedia Index Page

The encyclopedia index page has a graphical selector used to sort the encyclopedia pages alphabetically. This is powered by a query selector function located in `js/encyclopedia.js`, and is built out with links to every encyclopedia pages using the `Pages` class attribute `encyclopedia_object`

## Dictionary Viewer

The viewer template is located in the `templates/viewer.html` directory.
The dictionary viewer makes an asynchronous get request call to the GDC Data Dictionary API, and fills in the main page from all of the nodes within the GDC Dictionary. It also has a specific node detail page for each node which is accessed using the querystring `?node=<node_name>` and fills in the details for that specific node on the page.

## Making edits

Template, css, and javascript files are editable. Major changes to the site can be made in the page.py script. Nothing else should need to be edited in order to make major changes except the docs.yml file in order to point to the location of new css, js, template or markdown files.
**Note**: After Making changes to the files in the `templates` directory, the `write_pages` function in page.py must be run in order to update the site directory with the new changes.
