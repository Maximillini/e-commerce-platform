import { useState, useEffect } from "react"

type Product = {
  title: string,
  price: string,
  description: string,
  category: string,
  image_url: string
}

export const Main = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  
  // TODO: move to custom hook and add error handling
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('http://localhost:3000/products')
      const productData = await response.json()
      console.log({ productData })

      await setProducts(productData)
      setLoading(false)
    }

    fetchProducts()
  }, [])
  
  return (
    <>
    {loading ? <div>loading...</div> :
      <div className="">
        <h1 className="">Products:</h1>
        <ul>
          {products.map((product: Product) => {
            return (
            <li>
              <img src={product.image_url} alt={product.description}/>
              <div>{product.title}</div>
              <div>{product.price}</div>
            </li>
            )
          })}
        </ul>
      </div>
    }
    </>
  )
}
