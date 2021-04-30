import React from 'react'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'

type Props = {
  display?: boolean
  disabled?: boolean
  component?: any
  onClick?: (e: any) => void
}

export default function EditButton({
  display=true,
  disabled=false,
  component,
  onClick,
}: Props) {
  if (!display) {
    return null
  }

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
