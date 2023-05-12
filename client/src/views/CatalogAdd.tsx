import React, { ReactElement, useEffect, useState } from 'react'

import { ProductService } from '../services/Product'
import { ProductAdd } from '../components/product-add'
import { IProductData } from '../types/product.interface'

export const CatalogAdd: React.FC = (): ReactElement => {
  const createProduct = async (productData: IProductData): Promise<void> => {
    ProductService.create(productData)
  }
  return (
    <ProductAdd createProduct={createProduct}></ProductAdd>
  )
}