import React from 'react'
import Nextseppart from './Nextseppart'
// import { IconAlternate } from 'components/molecules';


export const services = [
    {
      icon: 'fas fa-layer-group',
      title: 'Easy to use',
      subtitle:
        'Maximize time and resources with an intuitive experience Easy-to-use system and on-board informatics streamline workflow and analysis, making NGS accessible to novice and expert users',
    },
    {
      icon: 'fas fa-dollar-sign',
      title: 'Cost-efficient',
      subtitle:
        'Achieve capacity for breakthroughs, support to sustain them Cost-efficient, high-throughput system delivers accurate results for emerging applications of increasing complexity',
    },
    {
      icon: 'fas fa-dna',
      title: 'Application area',
      subtitle:
        "Small Whole-Genome Sequencing (microbe, virus)Exome & Large Panel Sequencing (enrichment-based)Single-Cell Profiling (scRNA-Seq, scDNA-Seq, oligo tagging assays)Transcriptome Sequencing (total RNA-Seq, mRNA-Seq, gene expression profiling)",
    },
  ];

function Nextsep() {
    return (
        <div>
           <Nextseppart data = {services}/> 
        </div>
    )
}

export default Nextsep
