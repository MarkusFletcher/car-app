import React, { ReactElement, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { ProductDetail } from '../components/product-detail'
import { ProductAPI } from '../services/Product'
import { IProduct } from '../types/product.interface'

type Params = {
  id: string
}

export const CatalogDetail: React.FC = (): ReactElement => {
  const [product, setProduct] = useState<IProduct | null>(null)
  
  const { id } = useParams<keyof Params>() as Params
  //https://stackoverflow.com/questions/69993011/how-to-specify-the-result-type-of-useparams-with-react-router-v6
  
  useEffect(() => {
    ProductAPI.getById(id).then(res => {
      setProduct(res)
    })
  }, [])

  return (
    <ProductDetail product={product}></ProductDetail>
  )
}