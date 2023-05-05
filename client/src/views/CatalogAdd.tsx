import React, { ReactElement, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { ProductAdd } from '../components/product-add'
import { IProduct } from '../types/product.interface'

type Params = {
  id: string
}

export const CatalogAdd: React.FC = (): ReactElement => {
  return (
    <ProductAdd></ProductAdd>
  )
}