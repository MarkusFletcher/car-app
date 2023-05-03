import { Request, Response } from 'express'
import { Logger } from '../utils/Logger'
import { ProductService } from '../services/product.service'
import { IProductData } from '../types/product.interface'


export class ProductController {
  static async getAll(req: Request, res: Response): Promise<void> {
    try {
      Logger.info('Get products')
      const products = await ProductService.getAll()
      res.status(200).json(products)
    } catch (err) {
      Logger.error(`Error getting all products: ${err}`)
      res.status(500).json('Server Error')
    }
  }
  
  static async getById(req: Request, res: Response): Promise<void> {
    const id: string = req.params.id
    try {
      Logger.info(`Get product by id: ${id}`)
      const products = await ProductService.getById(id)
      res.status(200).json(products)
    } catch (err) {
      Logger.error(`Error getting product by ID ${id}: ${err}`)
      res.status(500).json('Server Error')
    }
  }
  
  static async create(req: Request, res: Response): Promise<void> {
    try {
      const {brand, model, year, description, imgUrl}: IProductData = req.body
      const success: boolean = await ProductService.create({brand, model, year, description, imgUrl})
      if (success) {
        Logger.info('Product has been created')
        res.status(200).json({success: true})
      }
      Logger.error('Error creating product')
      res.status(500).json({error: 'Error creating product'})
    } catch (err) {
      Logger.error(`Error creating product: ${err}`)
      res.status(500).json('Server Error')
    }
  }
}
