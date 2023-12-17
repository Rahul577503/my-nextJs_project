import Typography, { TypographyProps } from '@mui/material/Typography'

interface Prop extends TypographyProps {
  component?: React.ElementType
  children?: JSX.Element | string
}

export default function H6({
  variant,
  component,
  children,
  ...rest
}: Prop): JSX.Element {
  return (
    <Typography
      variant={variant ? variant : 'h6'}
      component={component || 'h6'}
      {...rest}
    >
      {children}
    </Typography>
  )
}
