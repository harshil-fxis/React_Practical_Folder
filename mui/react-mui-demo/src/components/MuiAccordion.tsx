import { ExpandMoreOutlined } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import React, { useState } from 'react'
import { MdOutlineExpandMore } from "react-icons/md";

const MuiAccordion = () => {
    const [expanded, setExpanded] = useState<string | false>(false)
    const handleCahnge = (isExanded: boolean, panel : string) => {
        setExpanded(isExanded ? panel : false)
    }
  return (
    <div>
      <Accordion 
      expanded= {expanded === 'panel1'} 
      onChange={(event, isExanded) => handleCahnge(isExanded, 'panel1')}>
        <AccordionSummary id='panel1-header' aria-controls='panel1-content' expandIcon={<ExpandMoreOutlined/>}>
            <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                sdvgds dsivskivsikvsikvskivsvbsskivskbvwibbvjbvsjvsjbv
                vbsvsbvsbvus v si hvsv ddd vhdi uvhsii vsk uvsuh vs uvhsii\v svjsvjs
                v sjvsjvhsi vsvsvj sbvjg sj vdj bvj sbvj sj vjsb vjbhdjh vc.
            </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded= {expanded === 'panel2'} 
      onChange={(event, isExanded) => handleCahnge(isExanded, 'panel2')}>
        <AccordionSummary id='panel2-header' aria-controls='panel2-content' expandIcon={<ExpandMoreOutlined/>}>
            <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                sdvgds dsivskivsikvsikvskivsvbsskivskbvwibbvjbvsjvsjbv
                vbsvsbvsbvus v si hvsv ddd vhdi uvhsii vsk uvsuh vs uvhsii\v svjsvjs
                v sjvsjvhsi vsvsvj sbvjg sj vdj bvj sbvj sj vjsb vjbhdjh vc.
            </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded= {expanded === 'panel3'}
      onChange={(event, isExanded) => handleCahnge(isExanded, 'panel3')}>
        <AccordionSummary id='panel3-header' aria-controls='panel3-content' expandIcon={<ExpandMoreOutlined/>}>
            <Typography>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                sdvgds dsivskivsikvsikvskivsvbsskivskbvwibbvjbvsjvsjbv
                vbsvsbvsbvus v si hvsv ddd vhdi uvhsii vsk uvsuh vs uvhsii\v svjsvjs
                v sjvsjvhsi vsvsvj sbvjg sj vdj bvj sbvj sj vjsb vjbhdjh vc.
            </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default MuiAccordion
