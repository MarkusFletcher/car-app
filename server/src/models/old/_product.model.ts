// import { readFile, writeFile } from 'fs/promises'
// import { Logger } from '../utils/Logger'
// import { IProduct, IProductData } from '../types/product.interface'

// export class ProductModel {
//   private static readonly DATA_URL = './data/products.json'

//   private static async getData(): Promise<IProduct[]> {
//     try {
//       const res: string = await readFile(this.DATA_URL, 'utf8')
//       return JSON.parse(res)
//     } catch (err) {
//       Logger.error(`Error reading data: ${err}`)
//       throw err
//     }
//   }

//   private static async saveData(data: IProduct[]): Promise<boolean> {
//     try {
//       await writeFile(this.DATA_URL, JSON.stringify(data))
//     } catch (err) {
//       Logger.error(`Error saving data: ${err}`)
//       return false
//     }
//   }

//   static async findOne(query: Partial<IProduct>): Promise<IProduct> {
//     try {
//       const products: IProduct[] = await this.getData()
//       const foundProduct = products.find(product => {
//         for (const key in query) {
//           if (product[key] === query[key] && query.hasOwnProperty(key)) {
//             return true
//           }
//           return false
//         }
//       })
//       if (!foundProduct) Logger.warning(`No such items found`)
//       return foundProduct
//     } catch (err) {
//       Logger.error(`Error find product: ${err}`)
//       throw err
//     }
//   }
  
//   static async getAll(): Promise<IProduct[]> {
//     try {
//       return await this.getData()
//     } catch (err) {
//       Logger.error(`Error getting all products: ${err}`)
//       throw err
//     }
//   }

//   static async create(product: IProduct): Promise<boolean>  {
//     try {
//       const products: IProduct[] = await this.getData()
//       products.push(product)
//       await this.saveData(products)
//       return true
//     } catch (err) {
//       Logger.error(`Error creating product: ${err}`)
//       return false
//     }
//   }

//   static async update(id: string, data: Partial<IProduct>): Promise<boolean> {
//     try {
//       const products: IProduct[] = await this.getData()
//       const idx: number = products.findIndex(product => product.id === id)
//       if (idx !== -1) {
//         products[idx] = {
//           ...products[idx],
//           ...data,
//           id
//         }
//         await this.saveData(products)
//       }
//     } catch (err) {
//       Logger.error(`Error updating product ID ${id}: ${err}`)
//       return false
//     }
//   }

//   static async delete(id: string): Promise<boolean> {
//     try {
//       const products: IProduct[] = await this.getData()
//       const idx: number = products.findIndex(product => product.id === id)
//       if (idx !== -1) {
//         products.splice(idx, 1)
//         await this.saveData(products)
//       }
//     } catch (err) {
//       Logger.error(`Error deleting product ID ${id}: ${err}`)
//       return false
//     }
//   }
// }