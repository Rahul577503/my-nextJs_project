import { ButtonProps, default as MuiButton } from '@mui/material/Button'

interface Prop extends ButtonProps {
  children?: JSX.Element | string
}

export default function Button({ children, ...rest }: Prop): JSX.Element {
  return <MuiButton {...rest}>{children}</MuiButton>
}
