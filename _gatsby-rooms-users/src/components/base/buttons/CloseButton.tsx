import React from 'react'
import Button from '@material-ui/core/Button'
import CloseIcon from '@material-ui/icons/Close'

type Props = {
  display?: boolean
  disabled?: boolean
  component?: any
  onClick?: (e: any) => void
}

export default function CloseButton({
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
      startIcon={<CloseIcon/>}
    >
      Close
    </Button>
  )
}
