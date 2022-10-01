# Data Transfer Tool Release Notes

| Version                          | Date              |
| -------------------------------- | ----------------- |
| [v1.6.1](DTT_Release_Notes#v161) | May 17, 2021      |
| [v1.6.0](DTT_Release_Notes#v160) | July 8, 2020      |
| [v1.5.0](DTT_Release_Notes#v150) | January 30, 2020  |
| [v1.4.0](DTT_Release_Notes#v140) | December 18, 2018 |
| [v1.3.0](DTT_Release_Notes#v130) | August 22, 2017   |
| [v1.2.0](DTT_Release_Notes#v120) | Oct 31, 2016      |
| [v1.1.0](DTT_Release_Notes#v110) | September 7, 2016 |
| [v1.0.1](DTT_Release_Notes#v101) | June 2, 2016      |
| [v1.0.0](DTT_Release_Notes#v100) | May 26, 2016      |

## V1.6.1

- **GDC Product**: Data Transfer Tool
- **Release Date**: May 17, 2021

### New Features and Changes

- None

### Bugs Fixed Since Last Release

- Fixed issue with resuming large file downloads. <!--DEV-506-->
- Fixed issue with error reporting. <!--DEV-505-->
- Improved multi-part file upload. <!--DEV-401-->

### Known Issues and Workarounds

- Use of non-ASCII characters in token passed to Data Transfer Tool will produce incorrect error message "Internal server error: Auth service temporarily unavailable".
- On some terminals, dragging and dropping a file into the interactive client will add single quotes (' ') around the file path. This causes the interactive client to misinterpret the file path and generate an error when attempting to load a manifest file or token.
  - _Workaround:_ Manually type out the file name or remove the single quotes from around the file path.
- When any files mentioned in the upload manifest are not present in the upload directory the submission will hang at the missing file.
  - _Workaround:_ Edit the manifest to specify only the the files that are present in the upload directory for submission or copy the missing files into the upload directory.

## V1.6.0

- **GDC Product**: Data Transfer Tool
- **Release Date**: July 8, 2020

### New Features and Changes

- None

### Bugs Fixed Since Last Release

- Fixed issue with file upload requiring a manifest <!--DEV-170-->
- Restored multi-part upload feature <!--DEV-228-->
- Fixed error reporting issue <!--DEV-139-->

### Known Issues and Workarounds

- Use of non-ASCII characters in token passed to Data Transfer Tool will produce incorrect error message "Internal server error: Auth service temporarily unavailable".
- On some terminals, dragging and dropping a file into the interactive client will add single quotes (' ') around the file path. This causes the interactive client to misinterpret the file path and generate an error when attempting to load a manifest file or token.
  - _Workaround:_ Manually type out the file name or remove the single quotes from around the file path.
- When any files mentioned in the upload manifest are not present in the upload directory the submission will hang at the missing file.
  - _Workaround:_ Edit the manifest to specify only the the files that are present in the upload directory for submission or copy the missing files into the upload directory.

## V1.5.0

- **GDC Product**: Data Transfer Tool
- **Release Date**: January 30, 2020

### New Features and Changes

- Data transfer tool code now uses Python 3. <!--DTT-1109-->

### Bugs Fixed Since Last Release

- Problems with downloading associated annotations is fixed. <!--SV-1641-->

### Known Issues and Workarounds

- Use of non-ASCII characters in token passed to Data Transfer Tool will produce incorrect error message "Internal server error: Auth service temporarily unavailable".
- On some terminals, dragging and dropping a file into the interactive client will add single quotes (' ') around the file path. This causes the interactive client to misinterpret the file path and generate an error when attempting to load a manifest file or token.
  - _Workaround:_ Manually type out the file name or remove the single quotes from around the file path.
- When any files mentioned in the upload manifest are not present in the upload directory the submission will hang at the missing file.
  - _Workaround:_ Edit the manifest to specify only the the files that are present in the upload directory for submission or copy the missing files into the upload directory.

## V1.4.0

- **GDC Product**: Data Transfer Tool
- **Release Date**: December 18, 2018

### New Features and Changes

- Enabled download latest file version feature <!--DTT-112-->
- Removal of Interactive mode <!--DTT-30--><!--DTT-105-->
- Enabled display of all default settings <!--DTT-30--><!--DTT-105-->
- Standardized upload and download help menus <!--DTT-95-->

### Bugs Fixed Since Last Release

- Download flag --no-related-files bug preventing file downloads fixed <!--DTT-94-->
- File name handling with forward slashes bug fixed <!--DTT-99-->
- Download flag --no-segment-md5sums bug fixed. <!--DTT-11-->

### Known Issues and Workarounds

- Use of non-ASCII characters in token passed to Data Transfer Tool will produce incorrect error message "Internal server error: Auth service temporarily unavailable".
- On some terminals, dragging and dropping a file into the interactive client will add single quotes (' ') around the file path. This causes the interactive client to misinterpret the file path and generate an error when attempting to load a manifest file or token.
  - _Workaround:_ Manually type out the file name or remove the single quotes from around the file path.
- When any files mentioned in the upload manifest are not present in the upload directory the submission will hang at the missing file.
  - _Workaround:_ Edit the manifest to specify only the the files that are present in the upload directory for submission or copy the missing files into the upload directory.

## v1.3.0

- **GDC Product**: Data Transfer Tool
- **Release Date**: August 22, 2017

### New Features and Changes

- Faster performance when downloading many small files <!--DTT-29, DTT-42-->
- Faster performance overall <!--DTT-29-->
- Better handling of time outs <!--DTT-23-->
- Uses new default API URL (htts://api.gdc.cancer.gov) <!--DTT-34-->
- Better logging <!--DTT-38, DTT-12-->

### Bugs Fixed Since Last Release

- Submission manifest **local_file_path:** will now modify path as expected <!--DTT-27-->
- Upload flags --path/-f will modify the upload path as expected <!--DTT-28-->
- When deleting uploaded files you will no longer need a file in the current directory of the same name <!--DTT-36-->
- Can specify manifest path for upload <!--DTT-32-->

### Known Issues and Workarounds

- Use of non-ASCII characters in token passed to Data Transfer Tool will produce incorrect error message "Internal server error: Auth service temporarily unavailable".
- On some terminals, dragging and dropping a file into the interactive client will add single quotes (' ') around the file path. This causes the interactive client to misinterpret the file path and generate an error when attempting to load a manifest file or token.
  - _Workaround:_ Manually type out the file name or remove the single quotes from around the file path.
- When any files mentioned in the upload manifest are not present in the upload directory the submission will hang at the missing file.
  - _Workaround:_ Edit the manifest to specify only the the files that are present in the upload directory for submission or copy the missing files into the upload directory.

## v1.2.0

- **GDC Product**: Data Transfer Tool
- **Release Date**: Oct 19th 2016

### New Features and Changes

- Better handling of connectivity interruptions

### Bugs Fixed Since Last Release

- Uploads via manifest file has been fixed.
- Legacy -i/--identifier flag removed.
- Improved error messaging when uploading without a token.

### Known Issues and Workarounds

- Use of non-ASCII characters in token passed to Data Transfer Tool will produce incorrect error message "Internal server error: Auth service temporarily unavailable".
- On some terminals, dragging and dropping a file into the interactive client will add single quotes (' ') around the file path. This causes the interactive client to misinterpret the file path and generate an error when attempting to load a manifest file or token.
  - _Workaround:_ Manually type out the file name or remove the single quotes from around the file path.
- When any files mentioned in the upload manifest are not present in the upload directory the submission will hang at the missing file.
  - _Workaround:_ Edit the manifest to specify only the the files that are present in the upload directory for submission or copy the missing files into the upload directory.
- Upload flags --path/-f do not modify the upload path as expected.
  - _Workaround:_ Copy the Data Transfer Tool into the the root of the submittable data directory and run from there.
- Submission manifest field **local_file_path:** does not modify upload path expected.
  - _Workaround:_ Run Data Transfer Tool from root of the submittable data directory so that data is in the current working directory of the Data Transfer Tool.

## v1.1.0

- **GDC Product**: Data Transfer Tool
- **Release Date**: September 7, 2016

### New Features and Changes

- Partial extension added to all download files created during download. Removed after successful download.
- Number of processes started by default changed to 8 (-n flag).

### Bugs Fixed Since Last Release

- None to report.

### Known Issues and Workarounds

- Use of non-ASCII characters in token passed to Data Transfer Tool will produce incorrect error message "Internal server error: Auth service temporarily unavailable".
- On some terminals, dragging and dropping a file into the interactive client will add single quotes (' ') around the file path. This causes the interactive client to misinterpret the file path and generate an error when attempting to load a manifest file or token.
  - _Workaround:_ Manually type out the file name or remove the single quotes from around the file path.
- Use of a manifest file for uploads to the Submission Portal will produce an error message "ERROR: global name 'read_manifest' is not defined". <!--SV-457-->
  - _Workaround:_ Upload files via UUID instead or use the API/Submission Portal.

## v1.0.1

- **GDC Product**: Data Transfer Tool
- **Release Date**: June 2, 2016

### New Features and Changes

- MD5 checksum verification of downloaded files.
- BAM index files (.bai) are now automatically downloaded with parent BAM.
- UDT mode included to help improve certain high-speed transfers between the GDC and distant locations.

### Bugs Fixed Since Last Release

- None to report.

### Known Issues and Workarounds

- Use of non-ASCII characters in token passed to Data Transfer Tool will produce incorrect error message "Internal server error: Auth service temporarily unavailable".
- On some terminals, dragging and dropping a file into the interactive client will add single quotes (' ') around the file path. This causes the interactive client to misinterpret the file path and generate an error when attempting to load a manifest file or token.
  - _Workaround:_ Manually type out the file name or remove the single quotes from around the file path.

## v1.0.0

- **GDC Product**: Data Transfer Tool
- **Release Date**: May 26, 2016

### New Features and Changes

- Single-thread and multi-threaded download capability
- User-friendly command line interface
- Progress bars provide visual representation of transfer status
- Optional interactive (REPL) mode
- Detailed help menus for upload and download functionality
- Support for authentication using a token file
- Support for authentication using a token string
- Resumption of incomplete uploads and downloads
- Initiation of transfers using manifests
- Initiation of transfers using file UUIDs
- Advanced configuration options
- Binary distributions available for Linux (Ubuntu), OS X, and Windows

### Bugs Fixed Since Last Release

- None to report.

### Known Issues and Workarounds

- Use of non-ASCII characters in token passed to Data Transfer Tool will produce incorrect error message "Internal server error: Auth service temporarily unavailable".
- On some terminals, dragging and dropping a file into the interactive client will add single quotes (' ') around the file path. This causes the interactive client to misinterpret the file path and generate an error when attempting to load a manifest file or token.
  - _Workaround:_ Manually type out the file name or remove the single quotes from around the file path.
