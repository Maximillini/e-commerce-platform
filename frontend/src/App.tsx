import { useEffect, useState } from 'react'
import './App.css'

type Product = {
  title: string,
  price: string,
  description: string,
  category: string,
  image_url: string
}

function App() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

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
      <>
        <h1>Products:</h1>
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
      </>
    }
    </>
  )
}

export default App
