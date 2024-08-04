import axios from "axios";

const BASE_URL = 'https://products-demo-khaki.vercel.app/products';


export const fetchProducts = async () => {
  return await axios.get(BASE_URL);
};