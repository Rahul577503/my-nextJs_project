import Typography, { TypographyProps } from '@mui/material/Typography'

interface Prop extends TypographyProps {
  component?: React.ElementType
  children?: JSX.Element | string
}

export default function H5({
  variant,
  component,
  children,
  ...rest
}: Prop): JSX.Element {
  return (
    <Typography
      variant={variant ? variant : 'h5'}
      component={component || 'h5'}
      {...rest}
    >
      {children}
    </Typography>
  )
}
