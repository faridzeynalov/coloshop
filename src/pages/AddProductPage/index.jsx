import { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import './index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductsAsync } from '../../redux/Slices/productSlice'

const AddProductPage = () => {

  const dispatch = useDispatch()
  const products = useSelector((state) => state.products.value)
  const [search, setSearch] = useState('')


  useEffect(() => {
    dispatch(fetchProductsAsync())
  }, [dispatch])


      const filteredProducts = products.filter((product) => product.title.toLowerCase().includes(search.trim().toLowerCase()))


  return (
    <Layout>
        <div className="addProductsPage">
          <div className="container">
            <div className="pageTop">
              <div className="search">
                <input type="text" placeholder="Search by name" onChange={(e)=> setSearch(e.target.value)}/>
              </div>
              <button>Add product</button>
            </div>
            <div className="filter">

            </div>

            <div className="productsTable">
              <table className='table table-bordered table-hover'>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Actions</th>
                  </tr>

                </thead>
                <tbody>
                  {
                    filteredProducts.map((product) => (
                      <tr key={product.id}>
                        <td>
                          <img src={product.image} alt="" />
                        </td>
                        <td>{product.title}</td>
                        <td>{product.category}</td>
                        <td>${product.price}</td>
                        <td>
                          <button>
                            <i className='fa fa-edit'></i>
                          </button>
                          <button className='fa fa-trash'></button>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
    </Layout>
  )
}

export default AddProductPage