export interface IProduct {
  id: string,
  brand: string,
  model: string,
  year: number,
  description: string,
  imgUrl: string
}

export interface IProductData extends Omit<IProduct, 'id'> {}

export interface IProductDataErrors extends Partial<{[key in keyof IProductData]: string}> {}
// interface IProductDataErrors extends IProductData {
//   [key: keyof IProductData]: string;
// }