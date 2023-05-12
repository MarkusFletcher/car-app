import api from '@/api'

import { AxiosResponse } from 'axios'
import { IUser, IUserData } from '../types/user.interface'
import { IAuthResponse } from '../types/response/auth.inteface'

export class UserService {
  private static readonly BASE_URL = 'http://localhost:3001/api/user'

  static async getAll(): Promise<IUser[]> {
    try {
      const { data } = await api.get(this.BASE_URL)
      return data
    } catch(err) {
      throw err
    }
  }

  static async getById(id: string): Promise<IUser> {
    try {
      const { data } = await api.get(`${this.BASE_URL}/${id}`)
      return data
    } catch(err) {
      throw err
    }
  }

  static async registration(data: IUserData): Promise<AxiosResponse<IAuthResponse> | false> {
    try {
      return api.post(`${this.BASE_URL}/registration`, data)
    }
    catch {
      return false
    }
  }
}