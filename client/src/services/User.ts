import axios from 'axios'

import { IUser, IUserData } from '../types/user.interface'

export class UserAPI {
  private static readonly BASE_URL = 'http://localhost:3001/api/user'

  static async getAll(): Promise<IUser[]> {
    try {
      const { data } = await axios.get(this.BASE_URL)
      return data
    } catch(err) {
      throw err
    }
  }

  static async getById(id: string): Promise<IUser> {
    try {
      const { data } = await axios.get(`${this.BASE_URL}/${id}`)
      return data
    } catch(err) {
      throw err
    }
  }

  static async create(data: IUserData): Promise<boolean> {
    try {
      axios.post(`${this.BASE_URL}/registration`, data)
      return true
    }
    catch {
      return false
    }
  }
}