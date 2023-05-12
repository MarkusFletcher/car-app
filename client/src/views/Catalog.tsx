import React, { ReactElement, useEffect, useState } from 'react'
import { ProductList } from '../components/product-list'
import { ProductService } from '../services/Product'
import { IProduct } from '../types/product.interface'

export const Catalog: React.FC = (): ReactElement => {
  const [products, setProducts] = useState<IProduct[]>([])
  
  useEffect(() => {
    ProductService.getAll().then(res => {
      setProducts(res)
    })
  }, [])

  return (
    <ProductList products={products}></ProductList>
  )
}
