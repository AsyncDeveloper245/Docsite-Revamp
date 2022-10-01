# Gene Summary Page

The Gene Summary Page describes each gene with mutation data featured at the GDC and provides results related to the analyses that are performed on these genes.

## Summary

The summary section of the gene page contains the following information:

[![Gene Summary](../images/GDC-Gene-Summary_v2.png)](../images/GDC-Gene-Summary_v2.png "Click to see the full image.")

- **Symbol:** The gene symbol
- **Name:** Full name of the gene
- **Synonyms:** Synonyms of the gene name or symbol, if available
- **Type:** A broad classification of the gene
- **Location:** The chromosome on which the gene is located and its coordinates
- **Strand:** If the gene is located on the forward (+) or reverse (-) strand
- **Description:** A description of gene function and downstream consequences of gene alteration

* **Annotation:** A notation/link that states whether the gene is part of [The Cancer Gene Census](http://cancer.sanger.ac.uk/census/)

## External References

A list with links that lead to external databases with additional information about each gene is displayed here. These external databases include: [Entrez](https://www.ncbi.nlm.nih.gov/gquery/), [Uniprot](http://www.uniprot.org/), [Hugo Gene Nomenclature Committee](http://www.genenames.org/), [Online Mendelian Inheritance in Man](https://www.omim.org/), [Ensembl](http://may2015.archive.ensembl.org/index.html), and [CIViC](https://civicdb.org/home).

## Cancer Distribution

A table and bar graph shows how many cases are affected by mutations within the gene as a ratio and percentage. Each row/bar represents the number of cases for each project. The final column in the table lists the number of unique mutations observed on the gene for each project.

[![Cancer Distribution](../images/GDC-Gene-CancerDist.png)](../images/GDC-Gene-CancerDist.png "Click to see the full image.")

## Protein Viewer

[![Protein Plot](../images/GDC-Gene-ProteinGraph.png)](../images/GDC-Gene-ProteinGraph.png "Click to see the full image.")

Mutations and their frequency across cases are mapped to a graphical visualization of protein-coding regions with a lollipop plot. Pfam domains are highlighted along the x-axis to assign functionality to specific protein-coding regions. The bottom track represents a view of the full gene length. Different transcripts can be selected by using the drop-down menu above the plot.

The panel to the right of the plot allows the plot to be filtered by mutation consequences or impact. The plot will dynamically change as filters are applied. Mutation consequence and impact is denoted in the plot by color.

Note: The impact filter on this panel will not display the annotations for alternate transcripts.

The plot can be viewed at different zoom levels by clicking and dragging across the x-axis, clicking and dragging across the bottom track, or double clicking the pfam domain IDs. The `Reset` button can be used to bring the zoom level back to its original position. The plot can also be exported as a PNG image, SVG image or as JSON formatted text by choosing the `Download` button above the plot.

## Most Frequent Mutations

The most frequent somatic mutations in the gene are displayed in a tabular view at the bottom of the page.

[![Gene MFM](../images/GDC-Gene-MFM.png)](../images/GDC-Gene-MFM.png "Click to see the full image.")

A table is displayed below that lists information about each mutation including:

- **Mutation ID:** A UUID Code for the mutation assigned by the GDC, when clicked will bring a user to the Mutation Summary Page
- **DNA Change:** The chromosome and starting coordinates of the mutation are displayed along with the nucleotide differences between the reference and tumor allele
- **Type:** A general classification of the mutation
- **Consequences:** The effects the mutation has on the gene coding for a protein (i.e. synonymous, missense, non-coding transcript)
- **# Affected Cases in Gene:** The number of affected cases, expressed as number and percentage across all mutations within the gene
- **# Affected Cases Across GDC:** The number of affected cases, expressed as number across all projects. Choosing the arrow next to the percentage will expand the selection with a breakdown of each affected project
- **Impact:** A subjective classification of the severity of the variant consequence. The categories are:
  - **HIGH**: The variant is assumed to have high (disruptive) impact in the protein, probably causing protein truncation, loss of function or triggering nonsense mediated decay
  - **MODERATE**: A non-disruptive variant that might change protein effectiveness
  - **LOW**: Assumed to be mostly harmless or unlikely to change protein behavior
  - **MODIFIER**: Usually non-coding variants or variants affecting non-coding genes, where predictions are difficult or there is no evidence of impact
