import Typography, { TypographyProps } from '@mui/material/Typography'

interface Prop extends TypographyProps {
  component?: React.ElementType
  children?: JSX.Element | string
}

export default function H4({
  variant,
  component,
  children,
  ...rest
}: Prop): JSX.Element {
  return (
    <Typography
      variant={variant ? variant : 'h4'}
      component={component || 'h4'}
      {...rest}
    >
      {children}
    </Typography>
  )
}
