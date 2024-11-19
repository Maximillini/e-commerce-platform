import { useState, useEffect } from "react"
import { ProductList } from "../Product/List"

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
        <ProductList products={products} />
      </div>
    }
    </>
  )
}
