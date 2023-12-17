import TextField from '@mui/material/TextField'

type Props = {
  name: string
  label: string
  placeholder?: string
  error: any
  register: any
  validation?: any
  onChange?: any
  onBlur?: any
  onFocus?: any
  InputProps?: any
  disabled?: string
  margin?: string
  noValidate?: boolean
  autoComplete?: string
  autoFocus?: boolean
  fullWidth?: boolean
  required?: boolean
  type?: 'text' | 'password' | 'number' | 'date' | 'datetime'
}

export default function TextBox(props: Props): JSX.Element {
  return (
    <TextField
      onChange={props?.onChange}
      onBlur={props?.onBlur}
      onFocus={props?.onFocus}
      type={props?.type || 'text'}
      margin="normal"
      fullWidth={props?.fullWidth || true}
      label={props?.label}
      autoComplete={props?.autoComplete}
      autoFocus={props?.autoFocus}
      helperText={props.error?.message}
      disabled={props?.disabled}
      required={props?.required}
      error={props.error && true ? true : undefined}
      {...props?.register(props.name, props?.validation || {})}
    />
  )
}
