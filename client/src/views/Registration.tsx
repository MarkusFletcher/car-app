import React, { ReactElement, useEffect, useState } from 'react'

import { UserAPI } from '../services/User'
import { RegistrationForm } from '../components/registration-form'
import { IUserData } from '../types/user.interface'

export const Registration: React.FC = (): ReactElement => {
  const registration = async (userData: IUserData): Promise<void> => {
    UserAPI.create(userData)
  }
  return (
    <RegistrationForm registration={registration}></RegistrationForm>
  )
}