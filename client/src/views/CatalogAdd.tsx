import React, { ReactElement, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { ProductAPI } from '../services/Product'
import { ProductAdd } from '../components/product-add'
import { IProductData } from '../types/product.interface'

export const CatalogAdd: React.FC = (): ReactElement => {
  const createProduct = async (productData: IProductData): Promise<void> => {
    ProductAPI.create(productData)
  }
  return (
    <ProductAdd createProduct={createProduct}></ProductAdd>
  )
}