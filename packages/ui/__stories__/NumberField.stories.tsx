import React, { useState } from 'react'
import { logger } from '@hazelcast/services'

import { NumberField } from '../src/NumberField'
import styles from '../src/TextField.module.scss'

const eventHandlers = {
  onBlur: () => logger.log('blur'),
  onChange: (newValue: number) => logger.log('change', newValue),
}

export default {
  title: 'Components/NumberField',
  component: NumberField,
}
export const Default = () => {
  const [value, setValue] = useState(42)
  return <NumberField name="name" value={value} placeholder="Enter the name" label="Wisest jedi" {...eventHandlers} onChange={setValue} />
}

export const Error = () => (
  <NumberField name="name" value={42} placeholder="Enter the name" label="Wisest jedi" error="Dark side" {...eventHandlers} />
)

export const Hovered = () => (
  <NumberField name="name" value={42} placeholder="Enter the name" label="Wisest jedi" className={styles.hover} {...eventHandlers} />
)

export const Focused = () => (
  <NumberField name="name" value={42} placeholder="Enter the name" label="Wisest jedi" className={styles.focus} {...eventHandlers} />
)

export const FocusedWithError = () => (
  <NumberField
    name="name"
    value={42}
    placeholder="Enter the name"
    label="Wisest jedi"
    className={styles.focus}
    error="Dark side"
    {...eventHandlers}
  />
)

export const Disabled = () => (
  <NumberField name="name" value={42} placeholder="Enter the name" label="Wisest jedi" disabled {...eventHandlers} />
)

export const DisabledDecrement = () => {
  return <NumberField name="name" value={42} placeholder="Enter the name" label="Wisest jedi" min={42} {...eventHandlers} />
}

export const DisabledIncrement = () => {
  return <NumberField name="name" value={42} placeholder="Enter the name" label="Wisest jedi" max={42} {...eventHandlers} />
}

export const WithHelperText = () => (
  <NumberField
    name="name"
    value={42}
    label="Wisest jedi"
    placeholder="Enter the name"
    helperText="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    {...eventHandlers}
  />
)
