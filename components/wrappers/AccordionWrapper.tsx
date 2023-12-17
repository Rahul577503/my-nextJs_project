import React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import { IDescription } from '@/interfaces/common'
import P from '@/components/wrappers/P'
import H2 from '@/components/wrappers/headings/H2'

export default function AccordionWrapper({
  description,
}: {
  description: IDescription[]
}) {
  const [expanded, setExpanded] = React.useState<string | false>('panel0')

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false)
    }

  if (!description) return null

  return (
    <>
      {description?.map((desc, index) => {
        return (
          <React.Fragment key={index}>
            <Accordion
              expanded={expanded === 'panel' + index}
              onChange={handleChange('panel' + index)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}a-content`}
                id={`panel${index}a-header`}
              >
                <H2 variant="h6" mb={0} mt={0} mx={1}>
                  {desc?.title}
                </H2>
              </AccordionSummary>
              <AccordionDetails>
                <P mb={2} key={index} style={{ whiteSpace: 'pre-line' }}>
                  {desc.content}
                </P>
              </AccordionDetails>
            </Accordion>
          </React.Fragment>
        )
      })}
    </>
  )
}
