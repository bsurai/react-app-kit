import React from 'react'
import Button from '@material-ui/core/Button'
import EditIcon from '@material-ui/icons/Edit'

type Props = {
  onClick?: (e: any) => void
}

export default function EditButton({ onClick }: Props) {
  return (
    <Button
      variant='contained'
      onClick={onClick}
      startIcon={<EditIcon/>}
    >
      Edit
    </Button>
  )
}
