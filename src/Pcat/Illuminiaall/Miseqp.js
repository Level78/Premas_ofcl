import React from 'react'
import Miseqppart from './Miseqppart'
// import { IconAlternate } from 'components/molecules';


export const services = [
    {
      icon: 'fas fa-calendar-day',
      title: 'Focus',
      subtitle:
        'The MiSeq desktop sequencer allows you to access more focused applications such as targeted gene sequencing, metagenomics, small genome sequencing, targeted gene expression, amplicon sequencing, and HLA typing. New MiSeq reagents enable up to 15 Gb of output with 25 M sequencing reads and 2×300 bp read lengths.',
    },
    {
      icon: 'fas fa-memory',
      title: 'Key Applications',
      subtitle:
        ' Small Whole-Genome Sequencing (microbe/virus) Targeted Gene Sequencing (amplicon, gene panel)16S Metagenomic SequencingDownload Data Sheet',
    },
    {
      icon: 'fas fa-dna',
      title: 'Application area',
      subtitle:
        "Small Whole-Genome Sequencing (microbe, virus), Targeted Gene Sequencing (amplicon, gene panel), Targeted Gene Expression Profiling, Long-Range Amplicon Sequencing*, miRNA & Small RNA Analysis, 16S Metagenomic Sequencing, DNA-Protein Interaction Analysis",
    },
  ];

function Miseqp() {
    return (
        <div>
           <Miseqppart data = {services}/> 
        </div>
    )
}

export default Miseqp
