import Typography, { TypographyProps } from '@mui/material/Typography'

interface Prop extends TypographyProps {
  children?: JSX.Element | string
}

export default function MainHeading({ children, ...rest }: Prop): JSX.Element {
  return (
    <Typography
      variant="h1"
      align="center"
      color="default"
      mt={1}
      {...rest}
    >
      {children}
    </Typography>
  )
}
