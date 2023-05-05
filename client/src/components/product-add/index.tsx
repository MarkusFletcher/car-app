import React, { ReactElement, useState } from 'react'
import style from './ProductAdd.module.scss'
import { Button } from '../ui/button'

import { IProduct } from '../../types/product.interface'

type Props = {
  product: IProduct
}

export const ProductAdd: React.FC<Props> = (): ReactElement => {
  const [brand, setBrand] = useState<string>('')
  const [model, setModel] = useState<string>('')
  const [year, setYear] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [imgUrl, setImgUrl] = useState<string>('')

  return (
    <form className={style.form}>
      <div className={style.field}>
        <label htmlFor="brand">Brand</label>
        <input id="brand" name="brand" type="text" value={brand} onChange={(e) => setBrand(e.target.value)}/>
      </div>
      <div className={style.field}>
        <label htmlFor="model">Model</label>
        <input id="model" name="model" type="text" value={brand}/>
      </div>
      <div className={style.field}>
        <label htmlFor="year">Year</label>
        <input id="year" name="year" type="text" />
      </div>
      <div className={style.field}>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows="10"></textarea>
      </div>
      <div className={style.field}>
        <label htmlFor="img-url">Image url</label>
        <input id="img-url" name="img-url" type="text" />
      </div>
      <button className={style.button} type="submit">Save</button>
    </form>
  )
}
