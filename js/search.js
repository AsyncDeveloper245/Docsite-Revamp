const searchData = [
  { name: "   Getting Started", location: "/output/dist/api-getting-started" },
  {
    name: "The GDC Application Programming Interface (API): An Overview",
    location: "/output/dist/api-getting-started",
  },
  {
    name: "Tools for communicating with the GDC API",
    location: "/output/dist/api-getting-started",
  },
  { name: "API Endpoints", location: "/output/dist/api-getting-started" },
  { name: "Entity UUIDs", location: "/output/dist/api-getting-started" },
  { name: "Sample Request", location: "/output/dist/api-getting-started" },
  { name: "Authentication", location: "/output/dist/api-getting-started" },
  {
    name: "   Search and Retrieval",
    location: "/output/dist/api-search-and-retrieval",
  },
  {
    name: "Introducing Search and Retrieval Requests",
    location: "/output/dist/api-search-and-retrieval",
  },
  { name: "Endpoints", location: "/output/dist/api-search-and-retrieval" },
  {
    name: "Request Parameters",
    location: "/output/dist/api-search-and-retrieval",
  },
  {
    name: "Alternative Request Format",
    location: "/output/dist/api-search-and-retrieval",
  },
  {
    name: "Using Wildcards",
    location: "/output/dist/api-search-and-retrieval",
  },
  {
    name: "Quicksearch Endpoint",
    location: "/output/dist/api-search-and-retrieval",
  },
  {
    name: "Additional Examples",
    location: "/output/dist/api-search-and-retrieval",
  },
  {
    name: "   Downloading Files",
    location: "/output/dist/api-downloading-files",
  },
  { name: "Data endpoint", location: "/output/dist/api-downloading-files" },
  { name: "Manifest endpoint", location: "/output/dist/api-downloading-files" },
  { name: "   Data Analysis", location: "/output/dist/api-data-analysis" },
  { name: "Endpoints", location: "/output/dist/api-data-analysis" },
  {
    name: "Genes Endpoint Examples",
    location: "/output/dist/api-data-analysis",
  },
  {
    name: "Simple Somatic Mutation Endpoint Examples",
    location: "/output/dist/api-data-analysis",
  },
  {
    name: "Simple Somatic Mutation Occurrence Endpoint Examples",
    location: "/output/dist/api-data-analysis",
  },
  {
    name: "Copy Number Variation Endpoint Examples",
    location: "/output/dist/api-data-analysis",
  },
  {
    name: "Copy Number Variation Occurrence Enpoint Examples",
    location: "/output/dist/api-data-analysis",
  },
  { name: "Analysis Endpoints", location: "/output/dist/api-data-analysis" },
  { name: "   BAM Slicing", location: "/output/dist/api-bam-slicing" },
  {
    name: "About the slicing endpoint",
    location: "/output/dist/api-bam-slicing",
  },
  {
    name: "Examples: Specifying a region",
    location: "/output/dist/api-bam-slicing",
  },
  {
    name: "Examples: Specifying a gene",
    location: "/output/dist/api-bam-slicing",
  },
  {
    name: "Examples: Specifying unmapped reads",
    location: "/output/dist/api-bam-slicing",
  },
  { name: "Errors", location: "/output/dist/api-bam-slicing" },
  { name: "   Submission", location: "/output/dist/api-submission" },
  { name: "Overview", location: "/output/dist/api-submission" },
  { name: "Submission endpoint", location: "/output/dist/api-submission" },
  { name: "Submission Formats", location: "/output/dist/api-submission" },
  { name: "GDC Data Model", location: "/output/dist/api-submission" },
  {
    name: "Making Requests to the Submission API",
    location: "/output/dist/api-submission",
  },
  { name: "Submission Transactions", location: "/output/dist/api-submission" },
  {
    name: "Creating and Updating Entities",
    location: "/output/dist/api-submission",
  },
  { name: "Retrieving Entities", location: "/output/dist/api-submission" },
  { name: "Deleting Entities", location: "/output/dist/api-submission" },
  { name: "Working With Files", location: "/output/dist/api-submission" },
  {
    name: "Querying Submitted Data Using GraphQL",
    location: "/output/dist/api-submission",
  },
  {
    name: "   Using Python to Query the GDC API",
    location: "/output/dist/api-python-examples",
  },
  { name: "Querying Metadata", location: "/output/dist/api-python-examples" },
  { name: "Downloading Files", location: "/output/dist/api-python-examples" },
  {
    name: "Basic Troubleshooting",
    location: "/output/dist/api-python-examples",
  },
  {
    name: "   Introduction to GDC GraphQL",
    location: "/output/dist/api-graphql-examples",
  },
  {
    name: "Using GDC GraphQL vs GDC REST API",
    location: "/output/dist/api-graphql-examples",
  },
  {
    name: "GDC GraphQL Overview",
    location: "/output/dist/api-graphql-examples",
  },
  {
    name: "GDC GraphQL Endpoints",
    location: "/output/dist/api-graphql-examples",
  },
  { name: "GDC GraphQL Schema", location: "/output/dist/api-graphql-examples" },
  {
    name: "Basic GraphQL queries in GDC",
    location: "/output/dist/api-graphql-examples",
  },
  {
    name: "Anatomy of a typical GDC GraphQL Query",
    location: "/output/dist/api-graphql-examples",
  },
  {
    name: "GDC GraphQL Examples",
    location: "/output/dist/api-graphql-examples",
  },
  {
    name: "   System Information",
    location: "/output/dist/api-system-information",
  },
  { name: "Overview", location: "/output/dist/api-system-information" },
  {
    name: "GDC Notifications Endpoint",
    location: "/output/dist/api-system-information",
  },
  {
    name: "API Status Endpoint",
    location: "/output/dist/api-system-information",
  },
  {
    name: "   Additional Examples",
    location: "/output/dist/api-additional-examples",
  },
  {
    name: "Data Search and Retrieval",
    location: "/output/dist/api-additional-examples",
  },
  {
    name: "   Appendix A: Available Fields",
    location: "/output/dist/api-appendix-a-available-fields",
  },
  {
    name: "Field Listing by Endpoint",
    location: "/output/dist/api-appendix-a-available-fields",
  },
  {
    name: "Field Group Listing by Endpoint",
    location: "/output/dist/api-appendix-a-available-fields",
  },
  {
    name: "   Appendix B: Key Terms",
    location: "/output/dist/api-appendix-b-key-terms",
  },
  {
    name: "   Appendix C: Format of Submission Requests and Responses",
    location:
      "/output/dist/api-appendix-c-format-of-submission-requests-and-responses",
  },
  {
    name: "Status Messages",
    location:
      "/output/dist/api-appendix-c-format-of-submission-requests-and-responses",
  },
  {
    name: "   API Release Notes",
    location: "/output/dist/api-api-release-notes",
  },
  { name: "v3.3.0 ", location: "/output/dist/api-api-release-notes" },
  { name: "v3.0.0 ", location: "/output/dist/api-api-release-notes" },
  { name: "v2.1.2 ", location: "/output/dist/api-api-release-notes" },
  { name: "v2.1.0 ", location: "/output/dist/api-api-release-notes" },
  { name: "v2.0.0 ", location: "/output/dist/api-api-release-notes" },
  { name: "v1.23.0 ", location: "/output/dist/api-api-release-notes" },
  { name: "v1.22.0 ", location: "/output/dist/api-api-release-notes" },
  { name: "v1.21.0 ", location: "/output/dist/api-api-release-notes" },
  { name: "v1.20.0 ", location: "/output/dist/api-api-release-notes" },
  { name: "v1.19.0 ", location: "/output/dist/api-api-release-notes" },
  { name: "v1.18.0 ", location: "/output/dist/api-api-release-notes" },
  { name: "v1.17.0", location: "/output/dist/api-api-release-notes" },
  { name: "v1.16.0", location: "/output/dist/api-api-release-notes" },
  { name: "v1.15.0", location: "/output/dist/api-api-release-notes" },
  { name: "v1.14.1", location: "/output/dist/api-api-release-notes" },
  { name: "v1.14.0", location: "/output/dist/api-api-release-notes" },
  { name: "v1.13.0", location: "/output/dist/api-api-release-notes" },
  { name: "v1.12.0", location: "/output/dist/api-api-release-notes" },
  { name: "v1.11.0", location: "/output/dist/api-api-release-notes" },
  { name: "v1.10.0", location: "/output/dist/api-api-release-notes" },
  { name: "v1.9.0", location: "/output/dist/api-api-release-notes" },
  { name: "v1.8.0", location: "/output/dist/api-api-release-notes" },
  { name: "v1.7.1", location: "/output/dist/api-api-release-notes" },
  { name: "v1.5.0", location: "/output/dist/api-api-release-notes" },
  { name: "v1.4.0", location: "/output/dist/api-api-release-notes" },
  { name: "v1.3.1", location: "/output/dist/api-api-release-notes" },
  { name: "v1.2.0", location: "/output/dist/api-api-release-notes" },
  { name: "v1.1.0", location: "/output/dist/api-api-release-notes" },
  { name: "v1.0.1", location: "/output/dist/api-api-release-notes" },
  {
    name: "   Getting Started",
    location: "/output/dist/data-portal-getting-started",
  },
  {
    name: "The GDC Data Portal: An Overview",
    location: "/output/dist/data-portal-getting-started",
  },
  {
    name: "Accessing the GDC Data Portal",
    location: "/output/dist/data-portal-getting-started",
  },
  { name: "Views", location: "/output/dist/data-portal-getting-started" },
  { name: "Toolbar", location: "/output/dist/data-portal-getting-started" },
  { name: "Tables", location: "/output/dist/data-portal-getting-started" },
  {
    name: "Filtering and Searching",
    location: "/output/dist/data-portal-getting-started",
  },
  { name: "Manage Sets", location: "/output/dist/data-portal-getting-started" },
  { name: "   Projects", location: "/output/dist/data-portal-projects" },
  { name: "Projects Page", location: "/output/dist/data-portal-projects" },
  {
    name: "Project Summary Page",
    location: "/output/dist/data-portal-projects",
  },
  { name: "   Exploration", location: "/output/dist/data-portal-exploration" },
  {
    name: "Filters / Facets",
    location: "/output/dist/data-portal-exploration",
  },
  { name: "Results", location: "/output/dist/data-portal-exploration" },
  { name: "OncoGrid", location: "/output/dist/data-portal-exploration" },
  { name: "File Navigation", location: "/output/dist/data-portal-exploration" },
  {
    name: "Survival Analysis",
    location: "/output/dist/data-portal-exploration",
  },
  {
    name: "   Analysis",
    location: "/output/dist/data-portal-custom-set-analysis",
  },
  {
    name: "Generating a Cohort for Analysis",
    location: "/output/dist/data-portal-custom-set-analysis",
  },
  {
    name: "Analysis Page",
    location: "/output/dist/data-portal-custom-set-analysis",
  },
  {
    name: "Analysis Page: Set Operations",
    location: "/output/dist/data-portal-custom-set-analysis",
  },
  {
    name: "Analysis Tab: Cohort Comparison",
    location: "/output/dist/data-portal-custom-set-analysis",
  },
  {
    name: "Analysis Tab: Clinical Data Analysis",
    location: "/output/dist/data-portal-custom-set-analysis",
  },
  {
    name: "Analysis Page: Results",
    location: "/output/dist/data-portal-custom-set-analysis",
  },
  { name: "   Repository", location: "/output/dist/data-portal-repository" },
  { name: "Filters / Facets", location: "/output/dist/data-portal-repository" },
  { name: "Annotations View", location: "/output/dist/data-portal-repository" },
  { name: "Results", location: "/output/dist/data-portal-repository" },
  {
    name: "File Summary Page",
    location: "/output/dist/data-portal-repository",
  },
  { name: "Image Viewer", location: "/output/dist/data-portal-repository" },
  {
    name: "   Advanced Search",
    location: "/output/dist/data-portal-advanced-search",
  },
  {
    name: "Overview: GQL",
    location: "/output/dist/data-portal-advanced-search",
  },
  {
    name: "Using the Advanced Search",
    location: "/output/dist/data-portal-advanced-search",
  },
  {
    name: "Setting Precedence of Operators",
    location: "/output/dist/data-portal-advanced-search",
  },
  { name: "Keywords", location: "/output/dist/data-portal-advanced-search" },
  { name: "Operators", location: "/output/dist/data-portal-advanced-search" },
  {
    name: "Special Cases",
    location: "/output/dist/data-portal-advanced-search",
  },
  {
    name: "Fields Reference",
    location: "/output/dist/data-portal-advanced-search",
  },
  {
    name: "   Cart and File Download",
    location: "/output/dist/data-portal-cart",
  },
  { name: "GDC Cart", location: "/output/dist/data-portal-cart" },
  { name: "Cart Summary", location: "/output/dist/data-portal-cart" },
  { name: "Cart Items", location: "/output/dist/data-portal-cart" },
  { name: "   Download Options", location: "/output/dist/data-portal-cart" },
  { name: "GDC Data Transfer Tool", location: "/output/dist/data-portal-cart" },
  { name: "   Controlled Files", location: "/output/dist/data-portal-cart" },
  { name: "   Authentication", location: "/output/dist/data-portal-cart" },
  { name: "Logging into the GDC", location: "/output/dist/data-portal-cart" },
  { name: "User Profile", location: "/output/dist/data-portal-cart" },
  {
    name: "GDC Authentication Tokens",
    location: "/output/dist/data-portal-cart",
  },
  { name: "Logging Out", location: "/output/dist/data-portal-cart" },
  {
    name: "   Legacy Archive",
    location: "/output/dist/data-portal-legacy-archive",
  },
  { name: "Overview", location: "/output/dist/data-portal-legacy-archive" },
  {
    name: "   Data Portal Release Notes",
    location: "/output/dist/data-portal-data-portal-release-notes",
  },
  {
    name: "Release 1.29.0",
    location: "/output/dist/data-portal-data-portal-release-notes",
  },
  {
    name: "Release 1.28.0",
    location: "/output/dist/data-portal-data-portal-release-notes",
  },
  {
    name: "Release 1.25.1",
    location: "/output/dist/data-portal-data-portal-release-notes",
  },
  {
    name: "Release 1.25.0",
    location: "/output/dist/data-portal-data-portal-release-notes",
  },
  {
    name: "Release 1.24.1",
    location: "/output/dist/data-portal-data-portal-release-notes",
  },
  {
    name: "Release 1.23.1",
    location: "/output/dist/data-portal-data-portal-release-notes",
  },
  {
    name: "Release 1.23.0",
    location: "/output/dist/data-portal-data-portal-release-notes",
  },
  {
    name: "Release 1.22.0",
    location: "/output/dist/data-portal-data-portal-release-notes",
  },
  {
    name: "Release 1.21.0",
    location: "/output/dist/data-portal-data-portal-release-notes",
  },
  {
    name: "Release 1.20.0",
    location: "/output/dist/data-portal-data-portal-release-notes",
  },
  {
    name: "Release 1.19.0",
    location: "/output/dist/data-portal-data-portal-release-notes",
  },
  {
    name: "Release 1.18.0",
    location: "/output/dist/data-portal-data-portal-release-notes",
  },
  {
    name: "Release 1.17.0",
    location: "/output/dist/data-portal-data-portal-release-notes",
  },
  {
    name: "Release 1.16.0",
    location: "/output/dist/data-portal-data-portal-release-notes",
  },
  {
    name: "Release 1.15.0",
    location: "/output/dist/data-portal-data-portal-release-notes",
  },
  {
    name: "Release 1.14.0",
    location: "/output/dist/data-portal-data-portal-release-notes",
  },
  {
    name: "Release 1.13.0",
    location: "/output/dist/data-portal-data-portal-release-notes",
  },
  {
    name: "Release 1.12.0",
    location: "/output/dist/data-portal-data-portal-release-notes",
  },
  {
    name: "Release 1.11.0",
    location: "/output/dist/data-portal-data-portal-release-notes",
  },
  {
    name: "Release 1.10.0",
    location: "/output/dist/data-portal-data-portal-release-notes",
  },
  {
    name: "Release 1.9.0",
    location: "/output/dist/data-portal-data-portal-release-notes",
  },
  {
    name: "Release 1.8.0",
    location: "/output/dist/data-portal-data-portal-release-notes",
  },
  {
    name: "Release 1.6.0",
    location: "/output/dist/data-portal-data-portal-release-notes",
  },
  {
    name: "Release 1.5.2",
    location: "/output/dist/data-portal-data-portal-release-notes",
  },
  {
    name: "Release 1.4.1",
    location: "/output/dist/data-portal-data-portal-release-notes",
  },
  {
    name: "Release 1.3.0",
    location: "/output/dist/data-portal-data-portal-release-notes",
  },
  {
    name: "Release 1.2.0",
    location: "/output/dist/data-portal-data-portal-release-notes",
  },
  {
    name: "Release 1.1.0",
    location: "/output/dist/data-portal-data-portal-release-notes",
  },
  {
    name: "Release 1.0.1",
    location: "/output/dist/data-portal-data-portal-release-notes",
  },
  {
    name: "   Before Submitting Data to the GDC Portal",
    location: "/output/dist/data-submission-portal-checklist",
  },
  {
    name: "Overview",
    location: "/output/dist/data-submission-portal-checklist",
  },
  {
    name: "Steps to Submit Data to the GDC",
    location: "/output/dist/data-submission-portal-checklist",
  },
  {
    name: "Key Features",
    location: "/output/dist/data-submission-portal-checklist",
  },
  {
    name: "Sections to the Data Submission Portal Guide",
    location: "/output/dist/data-submission-portal-checklist",
  },
  {
    name: "HIPAA Compliance",
    location: "/output/dist/data-submission-portal-checklist",
  },
  {
    name: "Release Notes",
    location: "/output/dist/data-submission-portal-checklist",
  },
  {
    name: "   Data Submission Overview",
    location: "/output/dist/data-submission-portal-data-submission-overview",
  },
  {
    name: "Overview",
    location: "/output/dist/data-submission-portal-data-submission-overview",
  },
  {
    name: "GDC Data Submission Workflow",
    location: "/output/dist/data-submission-portal-data-submission-overview",
  },
  {
    name: "Project and File Lifecycles",
    location: "/output/dist/data-submission-portal-data-submission-overview",
  },
  {
    name: "   Data Submission Portal",
    location: "/output/dist/data-submission-portal-data-submission-process",
  },
  {
    name: "Overview",
    location: "/output/dist/data-submission-portal-data-submission-process",
  },
  {
    name: "Authentication",
    location: "/output/dist/data-submission-portal-data-submission-process",
  },
  {
    name: "Homepage",
    location: "/output/dist/data-submission-portal-data-submission-process",
  },
  {
    name: "Dashboard",
    location: "/output/dist/data-submission-portal-data-submission-process",
  },
  {
    name: "Transactions",
    location: "/output/dist/data-submission-portal-data-submission-process",
  },
  {
    name: "Browse",
    location: "/output/dist/data-submission-portal-data-submission-process",
  },
  {
    name: "QC Reports",
    location: "/output/dist/data-submission-portal-data-submission-process",
  },
  {
    name: "Submit Your Workspace Data to the GDC",
    location: "/output/dist/data-submission-portal-data-submission-process",
  },
  {
    name: "Release",
    location: "/output/dist/data-submission-portal-data-submission-process",
  },
  {
    name: "   Data Upload Walkthrough",
    location: "/output/dist/data-submission-portal-data-submission-walkthrough",
  },
  {
    name: "GDC Data Model Basics",
    location: "/output/dist/data-submission-portal-data-submission-walkthrough",
  },
  {
    name: "   Case Submission",
    location: "/output/dist/data-submission-portal-data-submission-walkthrough",
  },
  {
    name: "Uploading the Case Submission File",
    location: "/output/dist/data-submission-portal-data-submission-walkthrough",
  },
  {
    name: "   Clinical Data Submission",
    location: "/output/dist/data-submission-portal-data-submission-walkthrough",
  },
  {
    name: "Clinical Data Requirements",
    location: "/output/dist/data-submission-portal-data-submission-walkthrough",
  },
  {
    name: "Submitting a Demographic Entity to a Case",
    location: "/output/dist/data-submission-portal-data-submission-walkthrough",
  },
  {
    name: "Submitting a Diagnosis Entity to a Case",
    location: "/output/dist/data-submission-portal-data-submission-walkthrough",
  },
  {
    name: "   Biospecimen Submission",
    location: "/output/dist/data-submission-portal-data-submission-walkthrough",
  },
  {
    name: "Sample Submission",
    location: "/output/dist/data-submission-portal-data-submission-walkthrough",
  },
  {
    name: "Portion, Analyte and Aliquot Submission",
    location: "/output/dist/data-submission-portal-data-submission-walkthrough",
  },
  {
    name: "Read Group Submission",
    location: "/output/dist/data-submission-portal-data-submission-walkthrough",
  },
  {
    name: "   Experiment Data Submission",
    location: "/output/dist/data-submission-portal-data-submission-walkthrough",
  },
  {
    name: "Uploading the Submittable Data File to the GDC",
    location: "/output/dist/data-submission-portal-data-submission-walkthrough",
  },
  {
    name: "Annotation Submission",
    location: "/output/dist/data-submission-portal-data-submission-walkthrough",
  },
  {
    name: "Deleting Submitted Entities",
    location: "/output/dist/data-submission-portal-data-submission-walkthrough",
  },
  {
    name: "Updating Uploaded Entities",
    location: "/output/dist/data-submission-portal-data-submission-walkthrough",
  },
  {
    name: "Strategies for Submitting in Bulk",
    location: "/output/dist/data-submission-portal-data-submission-walkthrough",
  },
  {
    name: "   Pre-Release Data Portal",
    location: "/output/dist/data-submission-portal-pre-release-qc",
  },
  {
    name: "Navigation",
    location: "/output/dist/data-submission-portal-pre-release-qc",
  },
  {
    name: "Authentication",
    location: "/output/dist/data-submission-portal-pre-release-qc",
  },
  {
    name: "Data Transfer Tool",
    location: "/output/dist/data-submission-portal-pre-release-qc",
  },
  {
    name: "GDC Pre-Release Data Admin Portal",
    location: "/output/dist/data-submission-portal-pre-release-qc",
  },
  {
    name: "AWG API",
    location: "/output/dist/data-submission-portal-pre-release-qc",
  },
  {
    name: "   Submission Best Practices",
    location: "/output/dist/data-submission-portal-best-practices",
  },
  {
    name: "Date Obfuscation",
    location: "/output/dist/data-submission-portal-best-practices",
  },
  {
    name: "Array Submission",
    location: "/output/dist/data-submission-portal-best-practices",
  },
  {
    name: "Submitting Complex Data Model Relationships",
    location: "/output/dist/data-submission-portal-best-practices",
  },
  {
    name: "Submission File Quality Control",
    location: "/output/dist/data-submission-portal-best-practices",
  },
  {
    name: "Target Capture Kit Q and A",
    location: "/output/dist/data-submission-portal-best-practices",
  },
  {
    name: "Specifying Tumor Normal Pairs for Analysis",
    location: "/output/dist/data-submission-portal-best-practices",
  },
  {
    name: "Clinical Data Requirements",
    location: "/output/dist/data-submission-portal-best-practices",
  },
  {
    name: "miRNA Submission",
    location: "/output/dist/data-submission-portal-best-practices",
  },
  {
    name: "   Data Submission Portal Release Notes",
    location:
      "/output/dist/data-submission-portal-data-submission-portal-release-notes",
  },
  {
    name: "Release 2.5.1",
    location:
      "/output/dist/data-submission-portal-data-submission-portal-release-notes",
  },
  {
    name: "Release 2.5.0",
    location:
      "/output/dist/data-submission-portal-data-submission-portal-release-notes",
  },
  {
    name: "Release 2.4.1",
    location:
      "/output/dist/data-submission-portal-data-submission-portal-release-notes",
  },
  {
    name: "Release 2.4.0",
    location:
      "/output/dist/data-submission-portal-data-submission-portal-release-notes",
  },
  {
    name: "Release 2.3.0",
    location:
      "/output/dist/data-submission-portal-data-submission-portal-release-notes",
  },
  {
    name: "Release 2.2.0",
    location:
      "/output/dist/data-submission-portal-data-submission-portal-release-notes",
  },
  {
    name: "Release 2.1.0",
    location:
      "/output/dist/data-submission-portal-data-submission-portal-release-notes",
  },
  {
    name: "Release 2.0.0",
    location:
      "/output/dist/data-submission-portal-data-submission-portal-release-notes",
  },
  {
    name: "Release 1.9.0",
    location:
      "/output/dist/data-submission-portal-data-submission-portal-release-notes",
  },
  {
    name: "Release 1.8.0",
    location:
      "/output/dist/data-submission-portal-data-submission-portal-release-notes",
  },
  {
    name: "Release 1.7.0",
    location:
      "/output/dist/data-submission-portal-data-submission-portal-release-notes",
  },
  {
    name: "Release 1.6.0",
    location:
      "/output/dist/data-submission-portal-data-submission-portal-release-notes",
  },
  {
    name: "Release 1.5.1",
    location:
      "/output/dist/data-submission-portal-data-submission-portal-release-notes",
  },
  {
    name: "Release 1.3.0",
    location:
      "/output/dist/data-submission-portal-data-submission-portal-release-notes",
  },
  {
    name: "Release 1.2.2",
    location:
      "/output/dist/data-submission-portal-data-submission-portal-release-notes",
  },
  {
    name: "Release 1.1.0",
    location:
      "/output/dist/data-submission-portal-data-submission-portal-release-notes",
  },
  {
    name: "Release 0.3.24.1",
    location:
      "/output/dist/data-submission-portal-data-submission-portal-release-notes",
  },
  {
    name: "Release 0.3.21",
    location:
      "/output/dist/data-submission-portal-data-submission-portal-release-notes",
  },
  {
    name: "Release 0.2.18.3",
    location:
      "/output/dist/data-submission-portal-data-submission-portal-release-notes",
  },
  {
    name: "   Getting Started",
    location: "/output/dist/data-transfer-tool-getting-started",
  },
  {
    name: "The GDC Data Transfer Tool: An Overview",
    location: "/output/dist/data-transfer-tool-getting-started",
  },
  {
    name: "Downloading the GDC Data Transfer Tool",
    location: "/output/dist/data-transfer-tool-getting-started",
  },
  {
    name: "   Preparing for Data Downloads and Uploads",
    location:
      "/output/dist/data-transfer-tool-preparing-for-data-download-and-upload",
  },
  {
    name: "Overview",
    location:
      "/output/dist/data-transfer-tool-preparing-for-data-download-and-upload",
  },
  {
    name: "Downloads",
    location:
      "/output/dist/data-transfer-tool-preparing-for-data-download-and-upload",
  },
  {
    name: "Uploads",
    location:
      "/output/dist/data-transfer-tool-preparing-for-data-download-and-upload",
  },
  {
    name: "   Data Transfer Tool Command Line Documentation",
    location: "/output/dist/data-transfer-tool-data-download-and-upload",
  },
  {
    name: "Downloads",
    location: "/output/dist/data-transfer-tool-data-download-and-upload",
  },
  {
    name: "Uploads",
    location: "/output/dist/data-transfer-tool-data-download-and-upload",
  },
  {
    name: "Troubleshooting",
    location: "/output/dist/data-transfer-tool-data-download-and-upload",
  },
  {
    name: "Help Menus",
    location: "/output/dist/data-transfer-tool-data-download-and-upload",
  },
  {
    name: "Data Transfer Tool Configuration File",
    location: "/output/dist/data-transfer-tool-data-download-and-upload",
  },
  {
    name: "   Data Transfer Tool Release Notes",
    location: "/output/dist/data-transfer-tool-dtt-release-notes",
  },
  {
    name: "V1.6.1",
    location: "/output/dist/data-transfer-tool-dtt-release-notes",
  },
  {
    name: "V1.6.0",
    location: "/output/dist/data-transfer-tool-dtt-release-notes",
  },
  {
    name: "V1.5.0",
    location: "/output/dist/data-transfer-tool-dtt-release-notes",
  },
  {
    name: "V1.4.0",
    location: "/output/dist/data-transfer-tool-dtt-release-notes",
  },
  {
    name: "v1.3.0",
    location: "/output/dist/data-transfer-tool-dtt-release-notes",
  },
  {
    name: "v1.2.0",
    location: "/output/dist/data-transfer-tool-dtt-release-notes",
  },
  {
    name: "v1.1.0",
    location: "/output/dist/data-transfer-tool-dtt-release-notes",
  },
  {
    name: "v1.0.1",
    location: "/output/dist/data-transfer-tool-dtt-release-notes",
  },
  {
    name: "v1.0.0",
    location: "/output/dist/data-transfer-tool-dtt-release-notes",
  },
  {
    name: "   Data Downloads with the Data Transfer Tool UI",
    location: "/output/dist/data-transfer-tool-data-download-dtt-ui",
  },
  {
    name: "Data Transfer Tool UI: Overview",
    location: "/output/dist/data-transfer-tool-data-download-dtt-ui",
  },
  {
    name: "Downloads with UUIDs",
    location: "/output/dist/data-transfer-tool-data-download-dtt-ui",
  },
  {
    name: "Downloads with Manifest",
    location: "/output/dist/data-transfer-tool-data-download-dtt-ui",
  },
  {
    name: "Download Progress Page",
    location: "/output/dist/data-transfer-tool-data-download-dtt-ui",
  },
  {
    name: "Controlled Access File Downloads",
    location: "/output/dist/data-transfer-tool-data-download-dtt-ui",
  },
  {
    name: "Settings and Advanced Settings",
    location: "/output/dist/data-transfer-tool-data-download-dtt-ui",
  },
  {
    name: "   Data Transfer Tool UI Release Notes",
    location: "/output/dist/data-transfer-tool-dtt-ui-release-notes",
  },
  {
    name: "v1.0.0",
    location: "/output/dist/data-transfer-tool-dtt-ui-release-notes",
  },
  {
    name: "v0.6.0",
    location: "/output/dist/data-transfer-tool-dtt-ui-release-notes",
  },
  {
    name: "v0.5.4",
    location: "/output/dist/data-transfer-tool-dtt-ui-release-notes",
  },
  {
    name: "v0.5.3",
    location: "/output/dist/data-transfer-tool-dtt-ui-release-notes",
  },
  {
    name: "   Troubleshooting Guide",
    location: "/output/dist/data-transfer-tool-appendix-b-troubleshooting",
  },
  {
    name: "Speed Performance During Download",
    location: "/output/dist/data-transfer-tool-appendix-b-troubleshooting",
  },
  {
    name: "Very Large Manifests",
    location: "/output/dist/data-transfer-tool-appendix-b-troubleshooting",
  },
  {
    name: "General Tips",
    location: "/output/dist/data-transfer-tool-appendix-b-troubleshooting",
  },
  {
    name: "Logging",
    location: "/output/dist/data-transfer-tool-appendix-b-troubleshooting",
  },
  {
    name: "OS Compatibility with the Data Transfer Tool",
    location: "/output/dist/data-transfer-tool-appendix-b-troubleshooting",
  },
  {
    name: "Network Troubleshooting",
    location: "/output/dist/data-transfer-tool-appendix-b-troubleshooting",
  },
  {
    name: "Common Error Codes",
    location: "/output/dist/data-transfer-tool-appendix-b-troubleshooting",
  },
  {
    name: "   GDC Data Dictionary",
    location: "/output/dist/data-dictionary-index",
  },
  { name: "Introduction", location: "/output/dist/data-dictionary-index" },
  {
    name: "Data Dictionary Viewer",
    location: "/output/dist/data-dictionary-index",
  },
  { name: "Search Tool", location: "/output/dist/data-dictionary-index" },
  {
    name: "Data Dictionary API",
    location: "/output/dist/data-dictionary-index",
  },
  {
    name: "   Data Dictionary Viewer",
    location: "/output/dist/data-dictionary-viewer",
  },
  {
    name: "GDC Metadata Validation Services",
    location: "/output/dist/data-dictionary-gdcmvs",
  },
  {
    name: "   Data Dictionary Release Notes",
    location: "/output/dist/data-dictionary-data-dictionary-release-notes",
  },
  {
    name: "v2.4.1",
    location: "/output/dist/data-dictionary-data-dictionary-release-notes",
  },
  {
    name: "v2.4.0",
    location: "/output/dist/data-dictionary-data-dictionary-release-notes",
  },
  {
    name: "v2.3.0",
    location: "/output/dist/data-dictionary-data-dictionary-release-notes",
  },
  {
    name: "v2.2.0",
    location: "/output/dist/data-dictionary-data-dictionary-release-notes",
  },
  {
    name: "v2.1.0",
    location: "/output/dist/data-dictionary-data-dictionary-release-notes",
  },
  {
    name: "v2.0.0 ",
    location: "/output/dist/data-dictionary-data-dictionary-release-notes",
  },
  {
    name: "v.1.18.1",
    location: "/output/dist/data-dictionary-data-dictionary-release-notes",
  },
  {
    name: "v.1.18",
    location: "/output/dist/data-dictionary-data-dictionary-release-notes",
  },
  {
    name: "v.1.17",
    location: "/output/dist/data-dictionary-data-dictionary-release-notes",
  },
  {
    name: "v.1.16",
    location: "/output/dist/data-dictionary-data-dictionary-release-notes",
  },
  {
    name: "v.1.15",
    location: "/output/dist/data-dictionary-data-dictionary-release-notes",
  },
  {
    name: "v.1.14",
    location: "/output/dist/data-dictionary-data-dictionary-release-notes",
  },
  {
    name: "v.1.13",
    location: "/output/dist/data-dictionary-data-dictionary-release-notes",
  },
  {
    name: "v.1.12.1",
    location: "/output/dist/data-dictionary-data-dictionary-release-notes",
  },
  {
    name: "v.1.12",
    location: "/output/dist/data-dictionary-data-dictionary-release-notes",
  },
  {
    name: "v.1.11",
    location: "/output/dist/data-dictionary-data-dictionary-release-notes",
  },
  {
    name: "Release with API v1.10.0",
    location: "/output/dist/data-dictionary-data-dictionary-release-notes",
  },
  {
    name: "Release with API v1.7.1",
    location: "/output/dist/data-dictionary-data-dictionary-release-notes",
  },
  {
    name: "Release with API v1.3.1",
    location: "/output/dist/data-dictionary-data-dictionary-release-notes",
  },
  { name: "   Introduction", location: "/output/dist/data-introduction" },
  { name: "   GDC Data Model", location: "/output/dist/data-gdc-data-model" },
  { name: "Introduction", location: "/output/dist/data-gdc-data-model" },
  {
    name: "Entities, Properties, and Links",
    location: "/output/dist/data-gdc-data-model",
  },
  { name: "GDC Identifiers", location: "/output/dist/data-gdc-data-model" },
  {
    name: "Working with the GDC Data Model",
    location: "/output/dist/data-gdc-data-model",
  },
  { name: "   Data Security", location: "/output/dist/data-data-security" },
  {
    name: "Authorization via dbGaP",
    location: "/output/dist/data-data-security",
  },
  {
    name: "Authentication via eRA Commons",
    location: "/output/dist/data-data-security",
  },
  {
    name: "Checking User Permissions",
    location: "/output/dist/data-data-security",
  },
  {
    name: "   GDC MAF Format v.1.0.0",
    location: "/output/dist/data-maf-format",
  },
  { name: "Introduction", location: "/output/dist/data-maf-format" },
  {
    name: "Somatic MAF File Generation",
    location: "/output/dist/data-maf-format",
  },
  {
    name: "Protected MAF File Structure",
    location: "/output/dist/data-maf-format",
  },
  { name: "Impact Categories", location: "/output/dist/data-maf-format" },
  { name: "   GDC VCF Format", location: "/output/dist/data-vcf-format" },
  { name: "Introduction", location: "/output/dist/data-vcf-format" },
  { name: "VCF file structure", location: "/output/dist/data-vcf-format" },
  { name: "GDC INFO fields", location: "/output/dist/data-vcf-format" },
  {
    name: "   DNA-Seq Analysis Pipeline",
    location: "/output/dist/data-dna-seq-variant-calling-pipeline",
  },
  {
    name: "Introduction",
    location: "/output/dist/data-dna-seq-variant-calling-pipeline",
  },
  {
    name: "Data Processing Steps",
    location: "/output/dist/data-dna-seq-variant-calling-pipeline",
  },
  {
    name: "Microsatellite Instability Detection",
    location: "/output/dist/data-dna-seq-variant-calling-pipeline",
  },
  {
    name: "File Access and Availability",
    location: "/output/dist/data-dna-seq-variant-calling-pipeline",
  },
  {
    name: "   mRNA Analysis Pipeline",
    location: "/output/dist/data-expression-mrna-pipeline",
  },
  {
    name: "Introduction",
    location: "/output/dist/data-expression-mrna-pipeline",
  },
  {
    name: "Data Processing Steps",
    location: "/output/dist/data-expression-mrna-pipeline",
  },
  {
    name: "mRNA Expression Transformation",
    location: "/output/dist/data-expression-mrna-pipeline",
  },
  {
    name: "Fusion Pipelines",
    location: "/output/dist/data-expression-mrna-pipeline",
  },
  {
    name: "scRNA-Seq Pipeline (single-nuclei)",
    location: "/output/dist/data-expression-mrna-pipeline",
  },
  {
    name: "File Access and Availability",
    location: "/output/dist/data-expression-mrna-pipeline",
  },
  {
    name: "   miRNA Analysis Pipeline",
    location: "/output/dist/data-mirna-pipeline",
  },
  { name: "Introduction", location: "/output/dist/data-mirna-pipeline" },
  {
    name: "Data Processing Steps",
    location: "/output/dist/data-mirna-pipeline",
  },
  {
    name: "File Access and Availability",
    location: "/output/dist/data-mirna-pipeline",
  },
  {
    name: "   Copy Number Variation Analysis Pipeline",
    location: "/output/dist/data-cnv-pipeline",
  },
  { name: "Introduction", location: "/output/dist/data-cnv-pipeline" },
  { name: "ASCAT Pipelines", location: "/output/dist/data-cnv-pipeline" },
  { name: "GENIE Copy Number", location: "/output/dist/data-cnv-pipeline" },
  {
    name: "DNACopy and GISTIC2 Pipelines",
    location: "/output/dist/data-cnv-pipeline",
  },
  {
    name: "   Methylation Analysis",
    location: "/output/dist/data-methylation-pipeline",
  },
  {
    name: "Methylation Array Harmonization Workflow",
    location: "/output/dist/data-methylation-pipeline",
  },
  {
    name: "Methylation Liftover Pipeline",
    location: "/output/dist/data-methylation-pipeline",
  },
  {
    name: "File Access and Availability",
    location: "/output/dist/data-methylation-pipeline",
  },
  {
    name: "   Protein Expression - RPPA",
    location: "/output/dist/data-rppa-intro",
  },
  { name: "Introduction", location: "/output/dist/data-rppa-intro" },
  { name: "RPPA Data in the GDC", location: "/output/dist/data-rppa-intro" },
  { name: "References", location: "/output/dist/data-rppa-intro" },
  {
    name: "   Aligned Reads Summary Metrics",
    location: "/output/dist/data-aligned-reads-summary-metrics",
  },
  {
    name: "   Data Release Notes",
    location: "/output/dist/data-data-release-notes",
  },
  {
    name: "Data Release 33.1",
    location: "/output/dist/data-data-release-notes",
  },
  {
    name: "Data Release 33.0",
    location: "/output/dist/data-data-release-notes",
  },
  {
    name: "Data Release 32.0",
    location: "/output/dist/data-data-release-notes",
  },
  {
    name: "Data Release 31.0",
    location: "/output/dist/data-data-release-notes",
  },
  {
    name: "Data Release 30.0",
    location: "/output/dist/data-data-release-notes",
  },
  {
    name: "Data Release 29.0",
    location: "/output/dist/data-data-release-notes",
  },
  {
    name: "Data Release 28.0",
    location: "/output/dist/data-data-release-notes",
  },
  {
    name: "Data Release 27.0 Bug Fix",
    location: "/output/dist/data-data-release-notes",
  },
  {
    name: "Data Release 27.0 ",
    location: "/output/dist/data-data-release-notes",
  },
  {
    name: "Data Release 26.0 ",
    location: "/output/dist/data-data-release-notes",
  },
  {
    name: "Data Release 25.0 ",
    location: "/output/dist/data-data-release-notes",
  },
  {
    name: "Data Release 24.0 ",
    location: "/output/dist/data-data-release-notes",
  },
  {
    name: "Data Release 23.0 ",
    location: "/output/dist/data-data-release-notes",
  },
  {
    name: "Data Release 22.0 ",
    location: "/output/dist/data-data-release-notes",
  },
  {
    name: "Data Release 21.0 ",
    location: "/output/dist/data-data-release-notes",
  },
  {
    name: "Data Release 20.0 ",
    location: "/output/dist/data-data-release-notes",
  },
  {
    name: "Data Release 19.1",
    location: "/output/dist/data-data-release-notes",
  },
  {
    name: "Data Release 19.0 ",
    location: "/output/dist/data-data-release-notes",
  },
  {
    name: "Data Release 18.0",
    location: "/output/dist/data-data-release-notes",
  },
  {
    name: "Data Release 17.1",
    location: "/output/dist/data-data-release-notes",
  },
  {
    name: "Data Release 17.0 ",
    location: "/output/dist/data-data-release-notes",
  },
  {
    name: "Data Release 16.0 ",
    location: "/output/dist/data-data-release-notes",
  },
  {
    name: "Data Release 15.0 ",
    location: "/output/dist/data-data-release-notes",
  },
  {
    name: "Data Release 14.0 ",
    location: "/output/dist/data-data-release-notes",
  },
  {
    name: "Data Release 13.0",
    location: "/output/dist/data-data-release-notes",
  },
  {
    name: "Data Release 12.0",
    location: "/output/dist/data-data-release-notes",
  },
  {
    name: "Data Release 11.0",
    location: "/output/dist/data-data-release-notes",
  },
  {
    name: "Data Release 10.1",
    location: "/output/dist/data-data-release-notes",
  },
  {
    name: "Data Release 10.0 ",
    location: "/output/dist/data-data-release-notes",
  },
  {
    name: "Data Release 9.0 ",
    location: "/output/dist/data-data-release-notes",
  },
  {
    name: "Data Release 8.0",
    location: "/output/dist/data-data-release-notes",
  },
  {
    name: "Data Release 7.0",
    location: "/output/dist/data-data-release-notes",
  },
  {
    name: "Data Release 6.0",
    location: "/output/dist/data-data-release-notes",
  },
  {
    name: "Data Release 5.0",
    location: "/output/dist/data-data-release-notes",
  },
  {
    name: "Data Release 4.0",
    location: "/output/dist/data-data-release-notes",
  },
  {
    name: "Data Release 3.0",
    location: "/output/dist/data-data-release-notes",
  },
  {
    name: "Data Release 2.0",
    location: "/output/dist/data-data-release-notes",
  },
  {
    name: "Initial Data Release (1.0)",
    location: "/output/dist/data-data-release-notes",
  },
  {
    name: "   Affymetrix SNP 6.0",
    location: "/output/dist/encyclopedia-affymetrix-snp-6-0",
  },
  {
    name: "Description",
    location: "/output/dist/encyclopedia-affymetrix-snp-6-0",
  },
  {
    name: "Overview",
    location: "/output/dist/encyclopedia-affymetrix-snp-6-0",
  },
  {
    name: "References",
    location: "/output/dist/encyclopedia-affymetrix-snp-6-0",
  },
  {
    name: "External Links",
    location: "/output/dist/encyclopedia-affymetrix-snp-6-0",
  },
  { name: "   Annotations", location: "/output/dist/encyclopedia-annotations" },
  { name: "References", location: "/output/dist/encyclopedia-annotations" },
  { name: "External Links", location: "/output/dist/encyclopedia-annotations" },
  {
    name: "   Introduction to Annotations",
    location: "/output/dist/encyclopedia-annotations-tcga",
  },
  {
    name: "Annotations Overview",
    location: "/output/dist/encyclopedia-annotations-tcga",
  },
  {
    name: "Annotation Classification and Categories",
    location: "/output/dist/encyclopedia-annotations-tcga",
  },
  {
    name: "   Aggregated Somatic Mutation",
    location: "/output/dist/encyclopedia-aggregated-somatic-mutation",
  },
  {
    name: "Description",
    location: "/output/dist/encyclopedia-aggregated-somatic-mutation",
  },
  {
    name: "Overview",
    location: "/output/dist/encyclopedia-aggregated-somatic-mutation",
  },
  {
    name: "References",
    location: "/output/dist/encyclopedia-aggregated-somatic-mutation",
  },
  {
    name: "External Links",
    location: "/output/dist/encyclopedia-aggregated-somatic-mutation",
  },
  { name: "   Aliquot", location: "/output/dist/encyclopedia-aliquot" },
  { name: "Description", location: "/output/dist/encyclopedia-aliquot" },
  { name: "Overview", location: "/output/dist/encyclopedia-aliquot" },
  { name: "References", location: "/output/dist/encyclopedia-aliquot" },
  { name: "External Links", location: "/output/dist/encyclopedia-aliquot" },
  {
    name: "   Biospecimen Data",
    location: "/output/dist/encyclopedia-biospecimen-data",
  },
  {
    name: "Description",
    location: "/output/dist/encyclopedia-biospecimen-data",
  },
  { name: "Overview", location: "/output/dist/encyclopedia-biospecimen-data" },
  {
    name: "References",
    location: "/output/dist/encyclopedia-biospecimen-data",
  },
  {
    name: "External Links",
    location: "/output/dist/encyclopedia-biospecimen-data",
  },
  { name: "   Case", location: "/output/dist/encyclopedia-case" },
  { name: "Description", location: "/output/dist/encyclopedia-case" },
  { name: "Overview", location: "/output/dist/encyclopedia-case" },
  { name: "References", location: "/output/dist/encyclopedia-case" },
  {
    name: "   Cancer Genomics Hub (CGHub)",
    location: "/output/dist/encyclopedia-cancer-genomics-hub",
  },
  {
    name: "Description",
    location: "/output/dist/encyclopedia-cancer-genomics-hub",
  },
  {
    name: "Overview",
    location: "/output/dist/encyclopedia-cancer-genomics-hub",
  },
  {
    name: "References",
    location: "/output/dist/encyclopedia-cancer-genomics-hub",
  },
  {
    name: "External Links",
    location: "/output/dist/encyclopedia-cancer-genomics-hub",
  },
  {
    name: "   Center for Cancer Genomics (CCG)",
    location: "/output/dist/encyclopedia-center-for-cancer-genomics",
  },
  {
    name: "Description",
    location: "/output/dist/encyclopedia-center-for-cancer-genomics",
  },
  {
    name: "Overview",
    location: "/output/dist/encyclopedia-center-for-cancer-genomics",
  },
  {
    name: "References",
    location: "/output/dist/encyclopedia-center-for-cancer-genomics",
  },
  {
    name: "External Links",
    location: "/output/dist/encyclopedia-center-for-cancer-genomics",
  },
  {
    name: "   Clinical Data",
    location: "/output/dist/encyclopedia-clinical-data",
  },
  { name: "Description", location: "/output/dist/encyclopedia-clinical-data" },
  { name: "Overview", location: "/output/dist/encyclopedia-clinical-data" },
  { name: "References", location: "/output/dist/encyclopedia-clinical-data" },
  {
    name: "External Links",
    location: "/output/dist/encyclopedia-clinical-data",
  },
  {
    name: "   Clinical Supplement",
    location: "/output/dist/encyclopedia-clinical-supplement",
  },
  {
    name: "Description",
    location: "/output/dist/encyclopedia-clinical-supplement",
  },
  {
    name: "Overview",
    location: "/output/dist/encyclopedia-clinical-supplement",
  },
  {
    name: "References",
    location: "/output/dist/encyclopedia-clinical-supplement",
  },
  {
    name: "External Links",
    location: "/output/dist/encyclopedia-clinical-supplement",
  },
  {
    name: "   Controlled Access",
    location: "/output/dist/encyclopedia-controlled-access",
  },
  {
    name: "Description",
    location: "/output/dist/encyclopedia-controlled-access",
  },
  { name: "Overview", location: "/output/dist/encyclopedia-controlled-access" },
  {
    name: "References",
    location: "/output/dist/encyclopedia-controlled-access",
  },
  {
    name: "External Links",
    location: "/output/dist/encyclopedia-controlled-access",
  },
  {
    name: "   Data Access Policy",
    location: "/output/dist/encyclopedia-data-access-policy",
  },
  {
    name: "Description",
    location: "/output/dist/encyclopedia-data-access-policy",
  },
  {
    name: "Overview",
    location: "/output/dist/encyclopedia-data-access-policy",
  },
  {
    name: "References",
    location: "/output/dist/encyclopedia-data-access-policy",
  },
  {
    name: "External Links",
    location: "/output/dist/encyclopedia-data-access-policy",
  },
  {
    name: "   Data Submitter",
    location: "/output/dist/encyclopedia-data-submitter",
  },
  { name: "Description", location: "/output/dist/encyclopedia-data-submitter" },
  { name: "Overview", location: "/output/dist/encyclopedia-data-submitter" },
  { name: "References", location: "/output/dist/encyclopedia-data-submitter" },
  {
    name: "External Links",
    location: "/output/dist/encyclopedia-data-submitter",
  },
  {
    name: "   Database of Genotypes and Phenotypes (dbGaP)",
    location: "/output/dist/encyclopedia-dbgap",
  },
  { name: "Description", location: "/output/dist/encyclopedia-dbgap" },
  { name: "Overview", location: "/output/dist/encyclopedia-dbgap" },
  { name: "References", location: "/output/dist/encyclopedia-dbgap" },
  { name: "External Links", location: "/output/dist/encyclopedia-dbgap" },
  { name: "   Entity", location: "/output/dist/encyclopedia-entity" },
  { name: "Description", location: "/output/dist/encyclopedia-entity" },
  { name: "Overview", location: "/output/dist/encyclopedia-entity" },
  { name: "References", location: "/output/dist/encyclopedia-entity" },
  { name: "External Links", location: "/output/dist/encyclopedia-entity" },
  {
    name: "   GDC Application Programming Interface (API)",
    location: "/output/dist/encyclopedia-gdc-api",
  },
  { name: "Description", location: "/output/dist/encyclopedia-gdc-api" },
  { name: "Overview", location: "/output/dist/encyclopedia-gdc-api" },
  { name: "References", location: "/output/dist/encyclopedia-gdc-api" },
  { name: "External Links", location: "/output/dist/encyclopedia-gdc-api" },
  {
    name: "   GDC Data Portal",
    location: "/output/dist/encyclopedia-gdc-data-portal",
  },
  {
    name: "Description",
    location: "/output/dist/encyclopedia-gdc-data-portal",
  },
  { name: "Overview", location: "/output/dist/encyclopedia-gdc-data-portal" },
  { name: "References", location: "/output/dist/encyclopedia-gdc-data-portal" },
  {
    name: "External Links",
    location: "/output/dist/encyclopedia-gdc-data-portal",
  },
  {
    name: "   GDC Data Submission Portal",
    location: "/output/dist/encyclopedia-gdc-data-submission-portal",
  },
  {
    name: "Description",
    location: "/output/dist/encyclopedia-gdc-data-submission-portal",
  },
  {
    name: "Overview",
    location: "/output/dist/encyclopedia-gdc-data-submission-portal",
  },
  {
    name: "References",
    location: "/output/dist/encyclopedia-gdc-data-submission-portal",
  },
  {
    name: "External Links",
    location: "/output/dist/encyclopedia-gdc-data-submission-portal",
  },
  {
    name: "   GDC Data Transfer Tool (DTT)",
    location: "/output/dist/encyclopedia-gdc-data-transfer-tool",
  },
  {
    name: "Description",
    location: "/output/dist/encyclopedia-gdc-data-transfer-tool",
  },
  {
    name: "Overview",
    location: "/output/dist/encyclopedia-gdc-data-transfer-tool",
  },
  {
    name: "References",
    location: "/output/dist/encyclopedia-gdc-data-transfer-tool",
  },
  {
    name: "External Links",
    location: "/output/dist/encyclopedia-gdc-data-transfer-tool",
  },
  {
    name: "   GDC Documentation Site",
    location: "/output/dist/encyclopedia-gdc-documentation-site",
  },
  {
    name: "Description",
    location: "/output/dist/encyclopedia-gdc-documentation-site",
  },
  {
    name: "Overview",
    location: "/output/dist/encyclopedia-gdc-documentation-site",
  },
  {
    name: "References",
    location: "/output/dist/encyclopedia-gdc-documentation-site",
  },
  {
    name: "External Links",
    location: "/output/dist/encyclopedia-gdc-documentation-site",
  },
  {
    name: "   GDC Web Site",
    location: "/output/dist/encyclopedia-gdc-web-site",
  },
  { name: "Description", location: "/output/dist/encyclopedia-gdc-web-site" },
  { name: "Overview", location: "/output/dist/encyclopedia-gdc-web-site" },
  { name: "References", location: "/output/dist/encyclopedia-gdc-web-site" },
  {
    name: "External Links",
    location: "/output/dist/encyclopedia-gdc-web-site",
  },
  {
    name: "   Genome Data Analysis Network (GDAN)",
    location: "/output/dist/encyclopedia-genomic-data-analysis-network",
  },
  {
    name: "Description",
    location: "/output/dist/encyclopedia-genomic-data-analysis-network",
  },
  {
    name: "Overview",
    location: "/output/dist/encyclopedia-genomic-data-analysis-network",
  },
  {
    name: "References",
    location: "/output/dist/encyclopedia-genomic-data-analysis-network",
  },
  {
    name: "External Links",
    location: "/output/dist/encyclopedia-genomic-data-analysis-network",
  },
  {
    name: "   Genomic Data Commons (GDC)",
    location: "/output/dist/encyclopedia-genomic-data-commons",
  },
  {
    name: "Description",
    location: "/output/dist/encyclopedia-genomic-data-commons",
  },
  {
    name: "Overview",
    location: "/output/dist/encyclopedia-genomic-data-commons",
  },
  {
    name: "References",
    location: "/output/dist/encyclopedia-genomic-data-commons",
  },
  {
    name: "External Links",
    location: "/output/dist/encyclopedia-genomic-data-commons",
  },
  {
    name: "   Harmonized Data",
    location: "/output/dist/encyclopedia-harmonized-data",
  },
  {
    name: "Description",
    location: "/output/dist/encyclopedia-harmonized-data",
  },
  { name: "Overview", location: "/output/dist/encyclopedia-harmonized-data" },
  { name: "References", location: "/output/dist/encyclopedia-harmonized-data" },
  {
    name: "External Links",
    location: "/output/dist/encyclopedia-harmonized-data",
  },
  {
    name: "   HTSeq-Counts",
    location: "/output/dist/encyclopedia-htseq-counts",
  },
  { name: "Description", location: "/output/dist/encyclopedia-htseq-counts" },
  { name: "Overview", location: "/output/dist/encyclopedia-htseq-counts" },
  { name: "References", location: "/output/dist/encyclopedia-htseq-counts" },
  {
    name: "External Links",
    location: "/output/dist/encyclopedia-htseq-counts",
  },
  {
    name: "   HTSeq-FPKM-UQ",
    location: "/output/dist/encyclopedia-htseq-fpkm-uq",
  },
  { name: "Description", location: "/output/dist/encyclopedia-htseq-fpkm-uq" },
  { name: "Overview", location: "/output/dist/encyclopedia-htseq-fpkm-uq" },
  { name: "References", location: "/output/dist/encyclopedia-htseq-fpkm-uq" },
  {
    name: "External Links",
    location: "/output/dist/encyclopedia-htseq-fpkm-uq",
  },
  { name: "   HTSeq-FPKM", location: "/output/dist/encyclopedia-htseq-fpkm" },
  { name: "Description", location: "/output/dist/encyclopedia-htseq-fpkm" },
  { name: "Overview", location: "/output/dist/encyclopedia-htseq-fpkm" },
  { name: "References", location: "/output/dist/encyclopedia-htseq-fpkm" },
  { name: "External Links", location: "/output/dist/encyclopedia-htseq-fpkm" },
  { name: "   Latest Data", location: "/output/dist/encyclopedia-latest-data" },
  { name: "Description", location: "/output/dist/encyclopedia-latest-data" },
  { name: "Overview", location: "/output/dist/encyclopedia-latest-data" },
  { name: "References", location: "/output/dist/encyclopedia-latest-data" },
  { name: "External Links", location: "/output/dist/encyclopedia-latest-data" },
  {
    name: "   Manifest File",
    location: "/output/dist/encyclopedia-manifest-file",
  },
  { name: "Description", location: "/output/dist/encyclopedia-manifest-file" },
  { name: "Overview", location: "/output/dist/encyclopedia-manifest-file" },
  { name: "References", location: "/output/dist/encyclopedia-manifest-file" },
  {
    name: "External Links",
    location: "/output/dist/encyclopedia-manifest-file",
  },
  { name: "   MD5 Checksum", location: "/output/dist/encyclopedia5-checksum" },
  { name: "Description", location: "/output/dist/encyclopedia5-checksum" },
  { name: "Overview", location: "/output/dist/encyclopedia5-checksum" },
  { name: "References", location: "/output/dist/encyclopedia5-checksum" },
  { name: "External Links", location: "/output/dist/encyclopedia5-checksum" },
  {
    name: "   Mutation Annotation Format (MAF)",
    location: "/output/dist/encyclopedia-mutation-annotation-format",
  },
  {
    name: "Description",
    location: "/output/dist/encyclopedia-mutation-annotation-format",
  },
  {
    name: "Overview",
    location: "/output/dist/encyclopedia-mutation-annotation-format",
  },
  {
    name: "References",
    location: "/output/dist/encyclopedia-mutation-annotation-format",
  },
  {
    name: "   Mutation Annotation Format (MAF) - Legacy TCGA Specification",
    location: "/output/dist/encyclopedia-mutation-annotation-format-tcgav2",
  },
  {
    name: "   Current version changes",
    location: "/output/dist/encyclopedia-mutation-annotation-format-tcgav2",
  },
  {
    name: "   About MAF specifications",
    location: "/output/dist/encyclopedia-mutation-annotation-format-tcgav2",
  },
  {
    name: "   MAF file fields",
    location: "/output/dist/encyclopedia-mutation-annotation-format-tcgav2",
  },
  {
    name: "Table 1 - File column headers",
    location: "/output/dist/encyclopedia-mutation-annotation-format-tcgav2",
  },
  {
    name: "   MAF file checks",
    location: "/output/dist/encyclopedia-mutation-annotation-format-tcgav2",
  },
  {
    name: "   MAF naming convention",
    location: "/output/dist/encyclopedia-mutation-annotation-format-tcgav2",
  },
  { name: "   Redaction", location: "/output/dist/encyclopedia-redaction" },
  { name: "Description", location: "/output/dist/encyclopedia-redaction" },
  { name: "Overview", location: "/output/dist/encyclopedia-redaction" },
  { name: "References", location: "/output/dist/encyclopedia-redaction" },
  { name: "External Links", location: "/output/dist/encyclopedia-redaction" },
  {
    name: "   Release Number",
    location: "/output/dist/encyclopedia-release-number",
  },
  { name: "Description", location: "/output/dist/encyclopedia-release-number" },
  { name: "Overview", location: "/output/dist/encyclopedia-release-number" },
  { name: "References", location: "/output/dist/encyclopedia-release-number" },
  {
    name: "External Links",
    location: "/output/dist/encyclopedia-release-number",
  },
  {
    name: "   Representational state transfer (REST) Application Programming Interface (API)",
    location: "/output/dist/encyclopedia-rest-api",
  },
  { name: "Description", location: "/output/dist/encyclopedia-rest-api" },
  { name: "Overview", location: "/output/dist/encyclopedia-rest-api" },
  { name: "References", location: "/output/dist/encyclopedia-rest-api" },
  { name: "External Links", location: "/output/dist/encyclopedia-rest-api" },
  { name: "   RNA-Seq", location: "/output/dist/encyclopedia-rna-seq" },
  { name: "Description", location: "/output/dist/encyclopedia-rna-seq" },
  { name: "Overview", location: "/output/dist/encyclopedia-rna-seq" },
  { name: "References", location: "/output/dist/encyclopedia-rna-seq" },
  { name: "External Links", location: "/output/dist/encyclopedia-rna-seq" },
  {
    name: "   Sequence Trace File",
    location: "/output/dist/encyclopedia-sequence-trace-file",
  },
  {
    name: "Description",
    location: "/output/dist/encyclopedia-sequence-trace-file",
  },
  {
    name: "Overview",
    location: "/output/dist/encyclopedia-sequence-trace-file",
  },
  {
    name: "References",
    location: "/output/dist/encyclopedia-sequence-trace-file",
  },
  {
    name: "External Links",
    location: "/output/dist/encyclopedia-sequence-trace-file",
  },
  {
    name: "   SNP Array-Based Data",
    location: "/output/dist/encyclopedia-snp-array-based-data",
  },
  {
    name: "Description",
    location: "/output/dist/encyclopedia-snp-array-based-data",
  },
  {
    name: "Overview",
    location: "/output/dist/encyclopedia-snp-array-based-data",
  },
  {
    name: "References",
    location: "/output/dist/encyclopedia-snp-array-based-data",
  },
  {
    name: "External Links",
    location: "/output/dist/encyclopedia-snp-array-based-data",
  },
  {
    name: "   TCGA Barcode",
    location: "/output/dist/encyclopedia-tcga-barcode",
  },
  { name: "Description", location: "/output/dist/encyclopedia-tcga-barcode" },
  { name: "Overview", location: "/output/dist/encyclopedia-tcga-barcode" },
  { name: "References", location: "/output/dist/encyclopedia-tcga-barcode" },
  {
    name: "   The Cancer Imaging Archive (TCIA)",
    location: "/output/dist/encyclopedia-tcia",
  },
  { name: "Description", location: "/output/dist/encyclopedia-tcia" },
  { name: "Overview", location: "/output/dist/encyclopedia-tcia" },
  { name: "References", location: "/output/dist/encyclopedia-tcia" },
  { name: "External Links", location: "/output/dist/encyclopedia-tcia" },
  {
    name: "   Universally Unique Identifier (UUID)",
    location: "/output/dist/encyclopedia-uuid",
  },
  { name: "Description", location: "/output/dist/encyclopedia-uuid" },
  { name: "Overview", location: "/output/dist/encyclopedia-uuid" },
  { name: "References", location: "/output/dist/encyclopedia-uuid" },
  { name: "External Links", location: "/output/dist/encyclopedia-uuid" },
  {
    name: "   Variant Call Format (VCF)",
    location: "/output/dist/encyclopedia-variant-call-format",
  },
  {
    name: "Description",
    location: "/output/dist/encyclopedia-variant-call-format",
  },
  {
    name: "Overview",
    location: "/output/dist/encyclopedia-variant-call-format",
  },
  {
    name: "References",
    location: "/output/dist/encyclopedia-variant-call-format",
  },
  {
    name: "External Links",
    location: "/output/dist/encyclopedia-variant-call-format",
  },
  {
    name: "   TCGA Variant Call Format (VCF) 1.1 Specification",
    location: "/output/dist/encyclopedia-tcga-vcf-1-1v2",
  },
  {
    name: "   About TCGA VCF specification",
    location: "/output/dist/encyclopedia-tcga-vcf-1-1v2",
  },
  {
    name: "   Summary of current version changes",
    location: "/output/dist/encyclopedia-tcga-vcf-1-1v2",
  },
  {
    name: "   TCGA-specific customizations",
    location: "/output/dist/encyclopedia-tcga-vcf-1-1v2",
  },
  {
    name: "   File format",
    location: "/output/dist/encyclopedia-tcga-vcf-1-1v2",
  },
  { name: "HEADER", location: "/output/dist/encyclopedia-tcga-vcf-1-1v2" },
  {
    name: 'SAMPLE=<ID=id,SampleName=sampleName,Individual=individual,Description="description",',
    location: "/output/dist/encyclopedia-tcga-vcf-1-1v2",
  },
  {
    name: 'SAMPLE=<ID=NORMAL,SampleName=TCGA-06-0881-10A-01W,Individual=TCGA-06-0881,Description="Normal",File=TCGA-06-0881-10A-01W-0421-09.bam,Platform=Illumina,Source=dbGAP,Accession=1234,Genomes=,Mixture=<0.1,0.9>,Genome_Description=<"Germline',
    location: "/output/dist/encyclopedia-tcga-vcf-1-1v2",
  },
  {
    name: "   CHROM POS ID REF ALT QUAL FILTER INFO FORMAT  <SAMPLE2",
    location: "/output/dist/encyclopedia-tcga-vcf-1-1v2",
  },
  {
    name: "   Extensions for TCGA data",
    location: "/output/dist/encyclopedia-tcga-vcf-1-1v2",
  },
  {
    name: "Structural variants",
    location: "/output/dist/encyclopedia-tcga-vcf-1-1v2",
  },
  {
    name: "Complex rearrangements",
    location: "/output/dist/encyclopedia-tcga-vcf-1-1v2",
  },
  {
    name: "RNA-Seq variants",
    location: "/output/dist/encyclopedia-tcga-vcf-1-1v2",
  },
  {
    name: "Including validation status in VCF file",
    location: "/output/dist/encyclopedia-tcga-vcf-1-1v2",
  },
  { name: "SAMPLE=", location: "/output/dist/encyclopedia-tcga-vcf-1-1v2" },
  {
    name: 'SAMPLE=<ID=NORMAL_454,SampleName=TCGA-06-0881-10A-01W,Individual=TCGA-06-0881,Description="Validation',
    location: "/output/dist/encyclopedia-tcga-vcf-1-1v2",
  },
  { name: "SAMPLE=", location: "/output/dist/encyclopedia-tcga-vcf-1-1v2" },
  {
    name: 'SAMPLE=<ID=TUMOR_454,SampleName=TCGA-06-0881-01A-01W,Individual=TCGA-06-0881,Description="Validation',
    location: "/output/dist/encyclopedia-tcga-vcf-1-1v2",
  },
  {
    name: 'SAMPLE=<ID=TUMOR_Sanger,SampleName=TCGA-06-0881-01A-01W,Individual=TCGA-06-0881,Description="Validation',
    location: "/output/dist/encyclopedia-tcga-vcf-1-1v2",
  },
  {
    name: "   Validation rules",
    location: "/output/dist/encyclopedia-tcga-vcf-1-1v2",
  },
  {
    name: "tcgaversion HEADER line (e.g., ##tcgaversion=1.1). The current acceptable",
    location: "/output/dist/encyclopedia-tcga-vcf-1-1v2",
  },
  { name: "INFO=", location: "/output/dist/encyclopedia-tcga-vcf-1-1v2" },
  { name: "FORMAT=", location: "/output/dist/encyclopedia-tcga-vcf-1-1v2" },
  { name: "FILTER=", location: "/output/dist/encyclopedia-tcga-vcf-1-1v2" },
  { name: "PEDIGREE=", location: "/output/dist/encyclopedia-tcga-vcf-1-1v2" },
  { name: "key=value", location: "/output/dist/encyclopedia-tcga-vcf-1-1v2" },
  { name: "", location: "/output/dist/encyclopedia-tcga-vcf-1-1v2" },
  { name: "FIELDTYPE=", location: "/output/dist/encyclopedia-tcga-vcf-1-1v2" },
  {
    name: 'contig=<ID=20,length=62435964,assembly=B36,md5=f126cdf8a6e0c7f379d618ff66beb2da,species="Homo',
    location: "/output/dist/encyclopedia-tcga-vcf-1-1v2",
  },
  {
    name: "assembly=url or filename",
    location: "/output/dist/encyclopedia-tcga-vcf-1-1v2",
  },
  {
    name: "assembly=ftp://ftp-trace.ncbi.nih.gov/1000genomes/ftp/release/sv/breakpoint_assemblies.fasta",
    location: "/output/dist/encyclopedia-tcga-vcf-1-1v2",
  },
  {
    name: "assembly=breakpoint_assemblies.fasta",
    location: "/output/dist/encyclopedia-tcga-vcf-1-1v2",
  },
  {
    name: "vcfProcessLog=<InputVCF=,InputVCFSource=,InputVCFVer=<1.0>,InputVCFParam=,InputVCFgeneAnno=>",
    location: "/output/dist/encyclopedia-tcga-vcf-1-1v2",
  },
  {
    name: "vcfProcessLog=<InputVCF=,InputVCFSource=,InputVCFVer=<1.0,2.1,2.0>,",
    location: "/output/dist/encyclopedia-tcga-vcf-1-1v2",
  },
  { name: "INDIVIDUAL.", location: "/output/dist/encyclopedia-tcga-vcf-1-1v2" },
  {
    name: "Handling failed checks",
    location: "/output/dist/encyclopedia-tcga-vcf-1-1v2",
  },
  { name: "Test files", location: "/output/dist/encyclopedia-tcga-vcf-1-1v2" },
  {
    name: "   Variant Type",
    location: "/output/dist/encyclopedia-variant-type",
  },
  { name: "Description", location: "/output/dist/encyclopedia-variant-type" },
  { name: "Overview", location: "/output/dist/encyclopedia-variant-type" },
  { name: "References", location: "/output/dist/encyclopedia-variant-type" },
  {
    name: "External Links",
    location: "/output/dist/encyclopedia-variant-type",
  },
];
