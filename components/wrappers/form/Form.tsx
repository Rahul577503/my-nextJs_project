import React from 'react'

type Props = {
  children: React.ReactNode
  onSubmit: any
  onChange?: any
  action?: string
  method?: string
  disabled?: string
  noValidate?: boolean
}

export default function Form({ children, ...rest }: Props): JSX.Element {
  return <form {...rest}>{children}</form>
}
