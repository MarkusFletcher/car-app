import { Model } from './model'
import { IProduct } from '../types/product.interface'

class ProductModel extends Model<IProduct> {
    protected readonly DATA_URL = './data/products.json'
}

export const productModel = new ProductModel
