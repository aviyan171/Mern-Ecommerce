export type CategoryFilter = {
  keyword?: string | number
  price?: number | string
  category?: string
  sort?: 'oldest' | 'latest'
  page?: number
}
