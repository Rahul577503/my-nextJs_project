import Grid, { GridProps } from '@mui/material/Grid'

interface Prop extends GridProps {
  children?: JSX.Element | JSX.Element[]
}

export default function Column({ children, ...rest }: Prop): JSX.Element {
  return (
    <Grid item {...rest}>
      {children}
    </Grid>
  )
}
