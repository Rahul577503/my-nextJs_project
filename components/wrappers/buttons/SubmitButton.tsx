import { ButtonProps } from '@mui/material/Button'
import Button from './Button'

interface Prop extends ButtonProps {
  children?: JSX.Element | string
}

export default function SubmitButton({
  variant,
  children,
  ...rest
}: Prop): JSX.Element {
  return (
    <Button type="submit" variant={variant ? variant : 'contained'} {...rest}>
      {children}
    </Button>
  )
}
