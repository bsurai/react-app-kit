import React from 'react'
import Button from '@material-ui/core/Button'
import CloseIcon from '@material-ui/icons/Close'

type Props = {
  disabled?: boolean
  component?: any
  onClick?: (e: any) => void
}

export default function CloseButton({ disabled=false, component, onClick }: Props) {
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
