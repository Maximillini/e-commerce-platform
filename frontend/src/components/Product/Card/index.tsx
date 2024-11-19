type Product = {
  title: string,
  price: string,
  description: string,
  category: string,
  image_url: string
}

type ProductCardProps = {
  product: Product
}

export const ProductCard = ({ product }: ProductCardProps) => (
  <li className="product-card basis-1/5 bg-white text-left text-slate-700 rounded-md">
    <img className="p-10" src={product.image_url} alt={product.description}/>
    <div className="px-6">
      <div className="font-bold">{product.title}</div>
      <div>{product.price}</div>
      <div>{product.description}</div>
    </div>
  </li>
)
