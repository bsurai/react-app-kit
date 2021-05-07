import React from 'react'
import BaseButton, { ButtonProps } from './BaseButton'
import EditIcon from '@material-ui/icons/Edit';

export default function EditButton(props: ButtonProps) {
  return (
    <BaseButton
      {...props}
      startIcon={<EditIcon/>}
    >
      Edit
    </BaseButton>
  )
}
