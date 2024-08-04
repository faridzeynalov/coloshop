import { RouterProvider } from 'react-router-dom'
import {ROUTES} from './routes'
import { ProductContext } from './contexts/ProductContext'
import { useEffect, useState } from 'react'
import { fetchProducts } from './api'


function App() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetchProducts().then((res) => setProducts(res.data));
  }, [])

  return (
    <>
    <ProductContext.Provider value={products}>
      <RouterProvider router={ROUTES} />
     </ProductContext.Provider>
    </>
  )
}

export default App
