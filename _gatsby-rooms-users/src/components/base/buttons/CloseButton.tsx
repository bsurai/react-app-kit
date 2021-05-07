import React from 'react'
import BaseButton, { ButtonProps } from './BaseButton'
import CloseIcon from '@material-ui/icons/Close'

export default function CloseButton(props: ButtonProps) {
  return (
    <BaseButton
      {...props}
      startIcon={<CloseIcon/>}
    >
      Close
    </BaseButton>
  )
}
