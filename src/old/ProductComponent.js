import { useContext, useEffect, useState } from "react";
import { DataContext } from "./StoreWrapper";
import axios from "axios";
import { GET_PRODUCTS } from "../constants";
import Product from "./Product";

const ProductsComponent = () => {
    const { state, dispatch } = useContext(DataContext);
    const [ loading, setLoading ] = useState(false);
    const data = state.data;
    const carts = state.carts;
    console.log('cart', carts);

    useEffect(() => {
      fetchProducts();
    }, []);

    const fetchProducts = async () => {
     try {
      setLoading(true);
      const response =  await axios.get(GET_PRODUCTS);
      dispatch({
        type: "PRODUCT_DATA",
        payload: response.data,
      })
      setLoading(false);
     } catch(e) {
       console.log(e);
     }
    }
    
    
    return <div >
     {loading ? <h1>Loading Products</h1> : <div className="product-container">
      {
        data?.ids?.map(id => <Product id={id} key={id} />)
      } 
      </div>}
     
    </div>
  };

  export default ProductsComponent;
