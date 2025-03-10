# Mutation Summary Page

The Mutation Summary Page contains information about one somatic mutation and how it affects the associated gene. Each mutation is identified by its chromosomal position and nucleotide-level change.

## Summary

[![Mutation Summary](../images/GDC-Mutation-Summary_v2.png)](../images/GDC-Mutation-Summary_v2.png "Click to see the full image.")

- **ID:** A unique identifier (UUID) for this mutation
- **DNA Change:** Denotes the chromosome number, position, and nucleotide change of the mutation
- **Type:** A broad categorization of the mutation
- **Reference Genome Assembly:** The reference genome in which the chromosomal position refers to
- **Allele in the Reference Assembly:** The nucleotide(s) that compose the site in the reference assembly
- **Functional Impact:** A subjective classification of the severity of the variant consequence. The categories are:
  - **HIGH**: The variant is assumed to have high (disruptive) impact in the protein, probably causing protein truncation, loss of function or triggering nonsense mediated decay
  - **MODERATE**: A non-disruptive variant that might change protein effectiveness
  - **LOW**: Assumed to be mostly harmless or unlikely to change protein behavior

### External References

A separate panel contains links to databases that contain information about the specific mutation. These include [dbSNP](https://www.ncbi.nlm.nih.gov/projects/SNP/), [COSMIC](http://cancer.sanger.ac.uk/cosmic), and [CIViC](https://civicdb.org/home).

## Consequences

[![Mutation Consequences](../images/GDC-Mutation-Consequences.png)](../images/GDC-Mutation-Consequences.png "Click to see the full image.")

The consequences of the mutation are displayed in a table. The fields that detail each mutation are listed below:

- **Gene:** The symbol for the affected gene
- **AA Change:** Details on the amino acid change, including compounds and position, if applicable
- **Consequence:** The biological consequence of each mutation
- **Coding DNA Change:** The specific nucleotide change and position of the mutation within the gene
- **Strand:** If the gene is located on the forward (+) or reverse (-) strand
- **Transcript(s):** The transcript(s) affected by the mutation. Each contains a link to the [Ensembl](https://www.ensembl.org) entry for the transcript

## Cancer Distribution

[![Mutation Distribution](../images/GDC-Mutation-CancerDist.png)](../images/GDC-Mutation-CancerDist.png "Click to see the full image.")

The Cancer Distribution table contains information about how the mutation affects each project, which can be exported as a JSON object. The table contains the following fields:

- **Project ID**: The ID for a specific project
- **Disease Type**: The disease associated with the project
- **Site**: The anatomical site affected by the disease
- **# Affected Cases**: The number of affected cases and total number of cases displayed as a fraction and percentage

## Protein Viewer

[![Mutation Protein Graph](../images/GDC-Mutation-ProteinGraph.png)](../images/GDC-Mutation-ProteinGraph.png "Click to see the full image.")

The protein viewer displays a plot representing the position of mutations along the polypeptide chain associated with the mutation. The y-axis represents the number of cases that exhibit each mutation, whereas the x-axis represents the polypeptide chain sequence. [Pfam domains](http://pfam.xfam.org/) that were identified along the polypeptide chain are identified with colored rectangles labeled with pfam IDs. See the Gene Summary Page for additional details about the protein viewer.
