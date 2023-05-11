import api from '@/api'

import { IProduct, IProductData } from '../types/product.interface'

export class ProductAPI {
  private static readonly BASE_URL = 'http://localhost:3001/api/products'

  static async getAll(): Promise<IProduct[]> {
    try {
      const { data } = await api.get(this.BASE_URL)
      return data
    } catch(err) {
      throw err
    }
  }

  static async getById(id: string): Promise<IProduct> {
    try {
      const { data } = await api.get(`${this.BASE_URL}/${id}`)
      return data
    } catch(err) {
      throw err
    }
  }

  static async create(data: IProductData): Promise<boolean> {
    try {
      api.post(`${this.BASE_URL}/create`, data)
      return true
    }
    catch {
      return false
    }
  }
}