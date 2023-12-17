import Container, { ContainerProps } from '@mui/material/Container'

interface Prop extends ContainerProps {
  children?: JSX.Element | JSX.Element[]
}

export default function Page({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  maxWidth,
  children,
  ...rest
}: Prop): JSX.Element {
  return (
    <Container
    maxWidth = 'xl'
      sx={{
        mt: 2,
        mb: 2,
        paddingLeft: {
          xs: 1,
          sm: 2,
          md: 2,
          lg: 2,
        },
        paddingRight: {
          xs: 1,
          sm: 2,
          md: 2,
          lg: 2,
        },
      }}
      {...rest}
    >
      {children}
    </Container>
  )
}
