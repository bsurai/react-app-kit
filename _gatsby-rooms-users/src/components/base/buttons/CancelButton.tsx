import React from 'react'
import BaseButton, { ButtonProps } from './BaseButton'
import CancelIcon from '@material-ui/icons/Cancel'

export default function CancelButton(props: ButtonProps) {
  return (
    <BaseButton
      {...props}
      startIcon={<CancelIcon/>}
    >
      Cancel
    </BaseButton>
  )
}
