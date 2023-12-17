import Typography, { TypographyProps } from '@mui/material/Typography'

interface Prop extends TypographyProps {
  component?: React.ElementType
  children?: JSX.Element | string
}

export default function P({
  variant,
  component,
  children,
  ...rest
}: Prop): JSX.Element {
  return (
    <Typography variant={variant} component={component || 'p'} {...rest}>
      {children}
    </Typography>
  )
}
