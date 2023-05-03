import { Request, Response } from 'express'
import { v4 as uuidv4 } from 'uuid'
import { Logger } from '../utils/Logger'
import { productModel } from '../models/product.model'
import { IProductData, IProduct } from '../types/product.interface'


export class ProductService {
  static async getAll(): Promise<IProduct[]> {
    try {
      const products: IProduct[] = await productModel.getAll()
      return products
    } catch (err) {
      Logger.error(`Error getting all products: ${err}`)
      throw new Error(err)
    }
  }
  
  static async getById(id: string): Promise<IProduct> {
    try {
      const product: IProduct = await productModel.findOne({id})
      return product
    } catch (err) {
      Logger.error(`Error getting product by ID ${id}: ${err}`)
      throw new Error(err)
    }
  }
  
  static async create(data: IProductData): Promise<boolean> {
    try {
      const product: IProduct = {
        id: uuidv4(),
        brand: data.brand,
        model: data.model,
        year: data.year,
        description: data.description,
        imgUrl: data.imgUrl
      }
      const success: boolean = await productModel.create(product)
      if (!success) {
        Logger.error('Error creating product')
      }
      return success
    } catch (err) {
      Logger.error(`Error creating product: ${err}`)
      throw new Error(err)
    }
  }
}
