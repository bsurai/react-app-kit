import React from 'react'
import Button from '@material-ui/core/Button'
import EditIcon from '@material-ui/icons/Edit';

type Props = {
  disabled?: boolean
  onClick?: (e: any) => void
}

export default function SaveButton({ disabled=false, onClick }: Props) {
  return (
    <Button
      variant='contained'
      disabled={disabled}
      onClick={onClick}
      startIcon={<EditIcon/>}
    >
      Edit
    </Button>
  )
}
