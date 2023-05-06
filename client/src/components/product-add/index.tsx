import React, { ReactElement, useState, useMemo } from 'react'
import style from './ProductAdd.module.scss'
import { Button } from '../ui/button'

import { IProductData, IProductDataErrors } from '../../types/product.interface'

const defaulProductData: IProductData = {
  brand: '',
  model: '',
  year: 2023,
  description: '',
  imgUrl: ''
}

export const ProductAdd: React.FC<{createProduct: Function}> = ({createProduct}): ReactElement => {
  const [productData, setProductData] = useState<IProductData>(defaulProductData)
  const [productErrors, setProductErrors] = useState<IProductDataErrors>({})

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {
    const name: string = e.target.name
    const value: string | number = e.target.value
    setProductData(prev => ({...prev, [name]: value}))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isValidData()) {
      createProduct(productData)
        .then(() => setProductData(defaulProductData))
    }
  }

  const isValidData = (): boolean => {
    const errors: IProductDataErrors = {}
    if (!productData.brand) errors.brand = 'Brand is required'
    if (!productData.model) errors.model = 'Model is required'
    if (!/^(ftp|http|https):\/\/[^ "]+$/.test(productData.imgUrl)) errors.imgUrl = 'Img URL is required and should be a valid URL'
    setProductErrors(errors)
    return !Object.values(errors).length
  }

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <div className={style.field}>
        <label htmlFor="brand">
          <span>Brand</span>
          {productErrors.brand ? <span className={style.error}>{productErrors.brand}</span> : ''}
        </label>
        <input id="brand" name="brand" type="text" value={productData.brand} onChange={handleInputChange} required/>
      </div>

      <div className={style.field}>
        <label htmlFor="model">
          <span>Model</span>
          {productErrors.model ? <span className={style.error}>{productErrors.model}</span> : ''}
        </label>
        <input id="model" name="model" type="text" value={productData.model} onChange={handleInputChange} required/>
      </div>

      <div className={style.field}>
        <label htmlFor="year">
          <span>Year</span>
          {productErrors.year ? <span className={style.error}>{productErrors.year}</span> : ''}
        </label>
        <select id="year" name="year" value={productData.year.toString()} onChange={handleInputChange} required>
          {Array.from({ length: 50 }, (_, i) => new Date().getFullYear() - i).map(year => (
            <option key={year} value={year.toString()}>{year}</option>
          ))}
        </select>
      </div>

      <div className={style.field}>
        <label htmlFor="description">
          <span>Description</span>
          {productErrors.description ? <span className={style.error}>{productErrors.description}</span> : ''}
        </label>
        <textarea id="description" name="description" value={productData.description} onChange={handleInputChange} required></textarea>
      </div>

      <div className={style.field}>
        <label htmlFor="imgUrl">
          <span>Image URL</span>
          {productErrors.imgUrl ? <span className={style.error}>{productErrors.imgUrl}</span> : ''}
        </label>
        <input id="imgUrl" name="imgUrl" type="text" value={productData.imgUrl} onChange={handleInputChange} required/>
      </div>

      <button className={style.button} type="submit" onClick={isValidData}>Save</button>
    </form>
  )
}
