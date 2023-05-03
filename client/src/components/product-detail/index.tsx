import React, { ReactElement } from 'react'
import style from './ProductDetail.module.scss'
import { Link } from 'react-router-dom'

import { IProduct } from '../../types/product.interface'

type Props = {
  product: IProduct | null
}

export const ProductDetail: React.FC<Props> = ({ product }): ReactElement => {
  return (
    product ? <div className={style.card}>
      <Link className={style.back + ' btn'} to='/catalog'>Back</Link>
      <div className={style.top}>
        <img src={product.imgUrl} alt="" />
      </div>
      <div className={style.info}>
        <div className={style.brand}>{ product.brand }</div>
        <span className={style.model}>{ product.model } </span>
        <span className={style.year}>{ product.year }</span>
      </div>
    </div> 
    : <div>...loading</div>
  )
}

