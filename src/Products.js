import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GET_PRODUCTS } from "./constants";
import axios from "axios";
import { DataContext } from "./StoreWrapper";
import Product from "./Product";

const Products = () => {
    const { store, dispatch } = useContext(DataContext);
    const { data: { ids } } = store;
    const navigate = useNavigate();
    console.log(ids);
    useEffect(() => {
        fetchProducts()
    }, [])

    const fetchProducts = async () => {
      const response = await axios.get(GET_PRODUCTS);
      dispatch({
          type: 'PRODUCT_DATA',
          payload: response.data,
      })
    }
   
    return <div style={{
        overflow: 'hidden'
    }}>
            <button onClick={() => navigate("/cart")}>Cart</button>
            <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            overflow: 'scroll',
            height: '100%'
        }}> 
        {
            ids && ids.map(id => <Product id={id} key={id} />)
        }
        </div>
    </div>
}

export default Products;