import React, { ReactElement } from 'react'
import style from './ProductCard.module.scss'
import { Link } from 'react-router-dom'

import { IProduct } from '../../types/product.interface'

type Props = {
  product: IProduct
}

export const ProductCard: React.FC<Props> = ({ product }): ReactElement => {
  return (
    <div className={style.card}>
      <div className={style.top}>
        <img src={product.imgUrl} alt="" />
      </div>
      <div className={style.info}>
        <div className={style.brand}>{ product.brand }</div>
        <span className={style.model}>{ product.model } </span>
        <span className={style.year}>{ product.year }</span>
      </div>
      <Link className={style.more + ' btn'} to={`/catalog/${product.id}`}>Read more</Link>
    </div>
  )
}
