import { default as MuiCheckbox } from '@mui/material/Checkbox'

type Props = {
  name: string
  label?: string
  value?: string
  color?: string
  error?: any
  register: any
  validation?: any
  onChange?: any
  disabled?: string
  required?: boolean
}

export default function Checkbox(props: Props): JSX.Element {
  return (
    <MuiCheckbox
      onChange={props?.onChange}
      value={props?.value}
      color={props?.color}
      disabled={props?.disabled}
      required={props?.required}
      error={props?.error && true ? true : undefined}
      {...props?.register(props.name, props?.validation || {})}
    />
  )
}
