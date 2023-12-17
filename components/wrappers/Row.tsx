import Grid, { GridProps } from '@mui/material/Grid'

interface Prop extends GridProps {
  children?: JSX.Element | JSX.Element[]
}

export default function Row({ spacing, children, ...rest }: Prop): JSX.Element {
  return (
    <Grid container spacing={spacing || 2} sx={{ mb: 2 }} {...rest}>
      {children}
    </Grid>
  )
}
