import React, { ReactElement, useState, useMemo } from 'react'
import style from './ProductAdd.module.scss'
import { FormField } from '../ui/form-field'
import { InputText } from '../ui/input-text'
import { Textarea } from '../ui/textarea'
import { Select } from '../ui/select'

import { IProductData, IProductDataErrors } from '../../types/product.interface'

const defaultProductData: IProductData = {
  brand: '',
  model: '',
  year: 2023,
  description: '',
  imgUrl: ''
}

export const ProductAdd: React.FC<{createProduct: Function}> = ({createProduct}): ReactElement => {
  const [productData, setProductData] = useState<IProductData>(defaultProductData)
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
        .then(() => setProductData(defaultProductData))
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
      <FormField label="Brand" forId='brand' error={productErrors.brand}>
        <InputText id="brand" name="brand" value={productData.brand} onChange={handleInputChange} required/>
      </FormField>
      <FormField label="Model" forId='model' error={productErrors.model}>
        <InputText id="model" name="model" value={productData.model} onChange={handleInputChange} required/>
      </FormField>
      <FormField label="Year" forId='year' error={productErrors.year}>
        <Select
          id="year"
          name="year"
          value={productData.year.toString()} options={
            Array.from({ length: 50 }, (_, i) => new Date().getFullYear() - i).map(year => ({
              key: year,
              value: year,
              name: year
            }))}
          onChange={handleInputChange}
        />
      </FormField>
      <FormField label="Description" forId='description' error={productErrors.description}>
        <Textarea id="description" name="description" value={productData.description} onChange={handleInputChange}/>
      </FormField>
      <FormField label="Image URL" forId='imgUrl' error={productErrors.imgUrl}>
        <InputText id="imgUrl" name="imgUrl" value={productData.imgUrl} onChange={handleInputChange} required/>
      </FormField>

      <button className={style.button} type="submit" onClick={isValidData}>Save</button>
    </form>
  )
}
