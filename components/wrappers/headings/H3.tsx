import Typography, { TypographyProps } from '@mui/material/Typography'

interface Prop extends TypographyProps {
  component?: React.ElementType
  children?: JSX.Element | string
}

export default function H2({
  variant,
  component,
  children,
  ...rest
}: Prop): JSX.Element {
  return (
    <Typography
      variant={variant ? variant : 'h3'}
      component={component || 'h3'}
      {...rest}
    >
      {children}
    </Typography>
  )
}
