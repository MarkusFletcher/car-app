import React, { ReactElement, useState, useMemo } from 'react'
import style from './RegistrationForm.module.scss'
import { FormField } from '../ui/form-field'
import { InputText } from '../ui/input-text'
import { Textarea } from '../ui/textarea'
import { Select } from '../ui/select'

import { IUserData, IUserDataErrors } from '../../types/User.interface'

const defaultUserData: IUserData = {
  email: '',
  login: '',
  password: '',
}

export const RegistrationForm: React.FC<{registration: Function}> = ({registration}): ReactElement => {
  const [userData, setUserData] = useState<IUserData>(defaultUserData)
  const [userErrors, setUserErrors] = useState<IUserDataErrors>({})

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {
    const name: string = e.target.name
    const value: string | number = e.target.value
    setUserData(prev => ({...prev, [name]: value}))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isValidData()) {
      registration(userData)
        .then(() => setUserData(defaultUserData))
    }
  }

  const isValidData = (): boolean => {
    const errors: IUserDataErrors = {}
    if (!userData.email) errors.email = 'Email is required'
    if (!userData.login) errors.login = 'login is required'
    setUserErrors(errors)
    return !Object.values(errors).length
  }

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <FormField label="Email" forId='email' error={userErrors.email}>
        <InputText id="email" name="email" value={userData.email} onChange={handleInputChange} required/>
      </FormField>
      <FormField label="Login" forId='login' error={userErrors.login}>
        <InputText id="login" name="login" value={userData.login} onChange={handleInputChange} required/>
      </FormField>

      <button className={style.button} type="submit" onClick={isValidData}>Save</button>
    </form>
  )
}
