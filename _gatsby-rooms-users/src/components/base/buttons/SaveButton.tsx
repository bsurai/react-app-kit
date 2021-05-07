import React from 'react'
import BaseButton, { ButtonProps } from './BaseButton'
import SaveIcon from '@material-ui/icons/Save'

export default function SaveButton(props: ButtonProps) {
  return (
    <BaseButton
      {...props}
      startIcon={<SaveIcon/>}
    >
      Save
    </BaseButton>
  )
}
