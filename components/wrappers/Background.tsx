import Paper, { PaperProps } from '@mui/material/Paper'

interface Prop extends PaperProps {
  children?: React.ReactNode
}

export default function Background({
  sx,
  children,
  ...rest
}: Prop): JSX.Element {
  return (
    <Paper
      sx={
        sx
          ? Object.assign(sx, {
              p: 2,
              display: 'flex',
              flexDirection: 'column',
            })
          : { p: 2, display: 'flex', flexDirection: 'column' }
      }
      {...rest}
    >
      {children}
    </Paper>
  )
}
