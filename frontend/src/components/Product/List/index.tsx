import { ProductCard } from "../Card"

type Product = {
  title: string,
  price: string,
  description: string,
  category: string,
  image_url: string
}

type ProductListProps = {
  products: Product[]
}

export const ProductList = ({ products }: ProductListProps) => {
  return (
    <ul className="flex gap-10 flex-wrap">
      {products.map((product) => <ProductCard product={product} />)}
    </ul>
  )
}
