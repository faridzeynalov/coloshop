import ProductCard from "../ProductCard"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './index.scss'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { fetchProductsAsync } from "../../redux/Slices/productSlice";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.value);
  console.log(products)

  useEffect(() => {
    dispatch(fetchProductsAsync());
  }, [dispatch]);


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