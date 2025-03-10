# Before Submitting Data to the GDC Portal

## Overview

The National Cancer Institute (NCI) Genomic Data Commons (GDC) Data Submission Portal User's Guide is the companion documentation for the [GDC Data Submission Portal](https://gdc.cancer.gov/submit-data/gdc-data-submission-portal) and provides detailed information and instructions for its use.

## Steps to Submit Data to the GDC

The following tasks are required to submit data to the [GDC Data Submission Portal](https://portal.gdc.cancer.gov/).

1.  Complete the GDC Data [Submission Request Form](https://gdc.cancer.gov/data-submission-request-form). After submission, the reqest will be reviewed by the GDC Data Submission Review Committee. During this time, create an [eRA Commons account](https://era.nih.gov/registration_accounts.cfm) if you do not already have one.

2.  If the study is approved, contact a [Genomic Program Administrator (GPA)](https://osp.od.nih.gov/genomic-program-administrators/) to register the approved study in [dbGaP](https://www.ncbi.nlm.nih.gov/sra/docs/submitdbgap). This includes registering the project as a GDC Trusted Partner study, registering cases, and adding authorized data submitters. For more information, see the [Data Submission Process](https://gdc.cancer.gov/submit-data/data-submission-processes-and-tools).

3.  Contact GDC User Services to create a submission project. The User Services team will require a project ID, which is a two-part identifier, where the first portion is the **Program** followed by a hyphen (**-**) and the second portion is the **Project**. This must be alphanumeric and all caps only. An example would be `TCGA-BRCA`. You must also create a project name, which can be longer and has fewer requirements on length or character usage. An example would be `Breast Invasive Carcinoma`.

## Key Features

The GDC Data Submission Portal is a platform that allows researchers to submit and release data to the GDC. The key features of the GDC Data Submission Portal are:

- **Upload and Validate Data**: Project data can be uploaded to the GDC project workspace. The GDC will validate the data against the [GDC Data Dictionary](../../Data_Dictionary/viewer.md).
- **Browse Data**: Data that has been uploaded to the project workspace can be browsed to ensure that the project is ready for processing.
- **Download Data**: Data that has been uploaded into the project workspace can be downloaded for review or update by using the [API](https://docs.gdc.cancer.gov/API/Users_Guide/Downloading_Files/) or the [Data Transfer Tool](https://gdc.cancer.gov/access-data/gdc-data-transfer-tool).
- **Review and Submit Data**: Prior to submission, data can be reviewed to check for accuracy and completeness. Once the review is complete, the data can be submitted to the GDC for processing through [Data Harmonization](https://gdc.cancer.gov/submit-data/gdc-data-harmonization).
- **Release Data**: After harmonization, data can be released to the research community for access through the [GDC Data Portal](https://portal.gdc.cancer.gov/) and other [GDC Data Access Tools](https://gdc.cancer.gov/access-data/data-access-processes-and-tools).
- **Status and Alerts**: Visual cues are implemented in the GDC Data Submission Portal Dashboard to easily identify incomplete submissions via panel displays summarizing submitted data and associated data elements.
- **Transactions**: A list of all actions performed in a project is provided with detailed information for each action.

## Sections to the Data Submission Portal Guide

- [**Data Submission Overview**](Data_Submission_Overview): Graphical explanations used to display the life cycle of projects and their data.
- [**Data Submission Process**](Data_Submission_Process): An overview of the data submission process using the GDC Data Submission Portal.
- [**Data Submission Walkthrough**](Data_Submission_Walkthrough): Step-by-step instructions on GDC data submission and their relationship to the GDC Data Model.
- [**Pre-Release Data Portal**](Pre_Release_QC): Instructions on how to use the Pre-Release Data Portal for projects that have been harmonized but not released.

## HIPAA Compliance

The GDC will not accept any data for patients age 90 and over including any follow-up events in which the event occurs after a patient turns 90 to ensure that HIPAA compliance is maintained. To comply with these requirements data submitters may omit any data (entire cases or specific nodes) that would violate this rule or obfuscate associated dates. Please see the [Date Obfuscation](/Data_Submission_Portal/Users_Guide/Best_Practices/#date-obfuscation) section for more information.

## Release Notes

The [Release Notes](../../Data_Submission_Portal/Release_Notes/Data_Submission_Portal_Release_Notes) section of this User's Guide contains details about new features, bug fixes, and known issues.
