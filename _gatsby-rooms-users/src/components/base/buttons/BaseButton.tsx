import React from 'react'
import Button from '@material-ui/core/Button'

export type ButtonVariant = 'contained'

export type ButtonProps = {
  display?: boolean
  disabled?: boolean
  component?: any
  variant?: ButtonVariant
  startIcon?: React.ReactNode
  children?: any
  onClick?: (e: any) => void
}

export default function BaseButton({
  display=true,
  disabled=false,
  variant='contained',
  component,
  startIcon,
  onClick,
  children,
}: ButtonProps) {
  if (!display) {
    return null
  }

  return (
    <Button
      variant={variant}
      disabled={disabled}
      onClick={onClick}
      component={component}
      startIcon={startIcon}
    >
      {children}
    </Button>
  )
}
