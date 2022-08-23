![](https://gdc.cancer.gov/sites/all/themes/gdc_bootstrap/logo.png)

# GDC Open Source code

=======
GDC is Open Source, Github Repositories containing source code of GDC Applications can be found on [GDC GitHub Organization page](https://github.com/NCI-GDC/).

- GDC Data Portal: https://github.com/NCI-GDC/portal-ui
- GDC Legacy Archive: https://github.com/NCI-GDC/portal-ui-legacy
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
[Authentication and Authorization](../../Commons/Authentication.md)
```

Inside another documentation page

```
[Authentication and Authorization](../../Commons/Authentication.md#internal-section)
```

### Adding icons and PDFs

The convention for this, when updating docs.yml is the following:

- <font-awesome-icon> <content> <url ending in .pdf>: 'index.md'
  example:
- fa-file-pdf-o Download PDF /API/PDF/API_UG.pdf: 'index.md'

### Documentation Conventions

A detailed list of all conventions is available on [GDC Website](https://gdc.cancer.gov/conventions-page)
