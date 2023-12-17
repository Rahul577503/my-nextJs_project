import FormControlLabel from '@mui/material/FormControlLabel'

type Props = {
  field: any
  label: string
  register?: any
  validation?: any
  onChange?: any
  disabled?: string
  margin?: string
  fullWidth?: boolean
}

export default function FormLabelWithField(props: Props): JSX.Element {
  return <FormControlLabel control={props.field} label={props.label} />
}
