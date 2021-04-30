import React from 'react'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'

type Props = {
  disabled?: boolean
  component?: any
  onClick?: (e: any) => void
}

export default function EditButton({ disabled=false, component, onClick }: Props) {
  return (
    <Button
      variant='contained'
      disabled={disabled}
      onClick={onClick}
      component={component}
      startIcon={<SaveIcon/>}
    >
      Save
    </Button>
  )
}
