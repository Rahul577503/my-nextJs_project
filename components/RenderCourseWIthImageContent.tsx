import React from 'react'
import Grid from '@mui/material/Grid'

import Image from '@/components/Image'
import GetRow from '@/components/GetRow'
import P from '@/components/wrappers/P'
import { ICourses } from '@/interfaces/common'

const RenderCourseImageContent = ({ item }: { item: ICourses }) => {
  const gridWidth = item.image
    ? { lg: 8, md: 8, sm: 12, xs: 12 }
    : { lg: 12, md: 12, sm: 12, xs: 12 }

  const names: string[] = []
  item?.faculty?.map((faclty) => {
    return names.push(faclty.name)
  })

  return (
    <Grid container spacing={1} mt={1} mb={1}>
      {item.image && (
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <Image src={item.image} alt="img" />
        </Grid>
      )}
      <Grid
        item
        lg={gridWidth.lg}
        md={gridWidth.md}
        sm={gridWidth.sm}
        xs={gridWidth.xs}
      >
        <>
          <P variant="subtitle1" mb={2} style={{whiteSpace: 'pre-line', textAlign: 'justify'}}>
            {item.sd}
          </P>
          <GetRow label="Duration" title={item.duration} />
          <GetRow label="Timing" title={item.timing} />
          <GetRow label="Place" title={item.place} />
          <GetRow
            label="No. of Participants"
            title={item.minCount + '-' + item.maxCount}
          />
          <GetRow label="Inaugural Course" title={item.inaugural} />
          {item.liveSurgery && <GetRow label="Live Surgery" title={item.liveSurgery} />}
          {/* <GetRow label="Faculty" title={names?.join(', ')} /> */}
        </>
      </Grid>
    </Grid>
  )
}

export default RenderCourseImageContent
