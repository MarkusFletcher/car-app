import React, { ReactElement } from 'react'
import style from './FormField.module.scss'

interface Props {
  label: string,
  forId: string,
  error?: string,
  children: React.ReactNode
}

export const FormField: React.FC<Props> = ({label, forId, error, children}): ReactElement => {
  return (
    <div className={style.field}>
      <label htmlFor={forId}>
        <span>{label}</span>
        {error && <span className={style.error}>{error}</span>}
      </label>
      {children}
    </div>
  )
}
