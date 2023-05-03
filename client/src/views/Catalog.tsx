import React, { ReactElement, useEffect, useState } from 'react'
import { ProductList } from '../components/product-list'
import { ProductAPI } from '../services/Product'
import { IProduct } from '../types/product.interface'

export const Catalog: React.FC = (): ReactElement => {
  const [products, setProducts] = useState<IProduct[]>([])
  
  useEffect(() => {
    ProductAPI.getAll().then(res => {
      setProducts(res)
    })
  }, [])

  return (
    <ProductList products={products}></ProductList>
  )
}
