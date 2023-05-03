import { Router } from 'express'
import { ProductController } from '../controllers/product.controller'

const productRouter = Router({ mergeParams : true })

productRouter.get('/:id', ProductController.getById)
productRouter.get('/', ProductController.getAll)

export { productRouter }