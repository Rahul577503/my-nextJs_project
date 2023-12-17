import React from 'react'
import { BoxProps, default as MuiBox } from '@mui/material/Box'

interface Prop extends BoxProps {
  children?: React.ReactNode
}

export default function Box({ children, ...rest }: Prop): JSX.Element {
  return <MuiBox {...rest}>{children}</MuiBox>
}
