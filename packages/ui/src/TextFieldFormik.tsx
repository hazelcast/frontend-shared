import React from 'react'
import { FieldValidator, useField } from 'formik2'
import { TextField, TextFieldExtraProps } from './TextField'

export type TextFieldFormikProps<V extends object> = TextFieldExtraProps & {
  name: keyof V
  validate?: FieldValidator
}

export const TextFieldFormik = <V extends object>({ name, validate, ...props }: TextFieldFormikProps<V>) => {
  const [field, meta] = useField<string | undefined>({
    name,
    validate,
  })

  return (
    <TextField
      {...props}
      name={name}
      value={field.value}
      onChange={field.onChange}
      onBlur={field.onBlur}
      error={meta.touched ? meta.error : undefined}
    />
  )
}