export interface IProduct {
  id: string,
  brand: string,
  model: string,
  year: number,
  description: string,
  imgUrl: string
}

export interface IProductData extends Omit<IProduct, 'id'> {}