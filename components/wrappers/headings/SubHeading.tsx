import Typography, { TypographyProps } from '@mui/material/Typography'

interface Prop extends TypographyProps {
  children?: JSX.Element | string
  align?: 'center' | 'left'
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'caption'
    | 'button'
    | 'overline'
    | 'inherit'
}

export default function SubHeading({
  children,
  align,
  ...rest
}: Prop): JSX.Element {
  return (
    <Typography
      variant="h2"
      align={align || 'left'}
      color="default"
      mt={1}
      mb={1}
      sx={{
        marginBottom: { xs: 2, sm: 3, md: 4, lg: 5 },
        marginTop: { xs: 2, sm: 3, md: 4, lg: 5 },
        textTransform: 'uppercase',
      }}
      {...rest}
    >
      {children}
    </Typography>
  )
}
