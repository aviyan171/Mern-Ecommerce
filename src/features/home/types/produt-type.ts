export type Product = {
  createdAt: Date
  updatedAt: Date
  name: string
  photo: string[]
  price: number
  stock: number
  category: string
  _id: string
}

export type AdaptedProduct = Omit<Product, 'price'> & {
  price: string
}
