export interface SizeType {
  width: number,
  height: number,
  depth: number
}

export interface ProductType {
  name: string,
  description: string,
  image: string,
  url?: string,
  price?: number,
  weight?: number
  size?: SizeType
}
