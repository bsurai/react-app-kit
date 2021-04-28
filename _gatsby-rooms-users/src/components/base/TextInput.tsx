import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'

type Props = {
  value?: any
  readOnly?: boolean
  label?: string
  onChange?: (e: any) => void
}

export default function TextInput({ value, readOnly=false, label='', onChange }: Props) {
  return (
    <div>
      <FormControl>
        <InputLabel>{label}</InputLabel>
        <Input
          value={value}
          readOnly={readOnly}
          onChange={onChange}
        />
      </FormControl>
    </div>
  )
}
