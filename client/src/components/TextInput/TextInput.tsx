import React from 'react';
import { TextField } from '@material-ui/core';

type TPors = {
  id?: string,
  type?: string,
  error?: boolean
  label: string,
  variant: "standard" | "filled" | "outlined" | undefined,
  value: string,
  setValue: (value: string) => void
}

export const TextInput = ({id, type, error, label, variant, value, setValue}: TPors) => {
  return (
    <TextField
      label={label}
      variant={variant}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  )
}
