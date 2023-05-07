import React, { ReactElement } from 'react'
import style from './Select.module.scss'

interface Option {
  key: string | number
  value: string | number,
  name?: string | number
}

interface Props {
  id: string,
  name: string,
  value: string
  options: Option[],
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void,
}

export const Select: React.FC<Props> = ({id, name, value, options, onChange}): ReactElement => {
  return (
    <select className={style.select} id={id} name={name} value={value} onChange={onChange} required>
      {options.map(option => (
        <option key={option.value} value={option.value}>{option.name || option.value}</option>
      ))}
    </select>
  )
}
