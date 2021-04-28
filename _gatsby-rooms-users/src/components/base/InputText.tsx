import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'

type Props = {
  value?: any
  readOnly?: boolean
  label?: string
}

export default function InputText({ value, readOnly=false, label='' }: Props) {
  return (
    <div>
      <FormControl>
        <InputLabel>{label}</InputLabel>
        <Input value={value} readOnly={readOnly}/>
      </FormControl>
    </div>
  )
}
