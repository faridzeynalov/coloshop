import { useContext } from "react"
import { ProductContext } from "../../contexts/ProductContext"
import ProductCard from "../ProductCard"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './index.scss'

const Products = () => {

    const products = useContext(ProductContext)

    const getUniqueCategories = (products) => {
        const categories = products.map((product) => product.category);
        return ["all", ...new Set(categories)];
      };

      const categories = getUniqueCategories(products);


  return (
    <div className="products">
        <div className="container">
            <div className="productsTop">
                <h3>
                    New Arrivals
                </h3>
            </div>
            <Tabs>
    <TabList>
        {
            categories.map((category) => (
                <Tab key={category}>{category}</Tab>
            ))
        }
    </TabList>

    {categories.map((category) => (
        <TabPanel key={category}>
          <div className="productCards">
            {products
              .filter(
                (product) =>
                  category === "all" || product.category === category
              )
              .map((product) => (
                <ProductCard key={product.id} product={product} />

              ))}
          </div>
        </TabPanel>
      ))}
  </Tabs>

        </div>
    </div>
  )
}

export default Products