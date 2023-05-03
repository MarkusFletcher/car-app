import React, { ReactElement } from 'react'
import style from './ProductList.module.scss'
import { ProductCard } from '../product-card'

import { IProduct } from '../../types/product.interface'

type Props = {
  products: IProduct[]
}

export const ProductList: React.FC<Props> = ({ products }): ReactElement => {
  return (
    <div className={style.list}>
      { products.map(product => (
        <ProductCard product={product} key={product.id}></ProductCard>
      ))}
    </div>
  )
}
