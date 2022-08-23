import sys
from page import Pages
#setup the page module for use in the CLI

if __name__ == '__main__':
    import argparse

    my_parser = argparse.ArgumentParser(allow_abbrev=False)
    my_parser.add_argument('-p', action='store', type=str, required=True)
    my_parser.add_argument('-d', action='store', type=str, required=True)
    args = my_parser.parse_args()

    #create a new Pages object
    try:
        pages = Pages(project_home_title=args.p,config_file= args.d)
        #Write the pages
        pages.write_pages()
    except Exception as e:
        print(e)
        sys.exit(1)


