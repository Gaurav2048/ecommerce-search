import { useContext, useEffect, useMemo, useState } from "react";
import { DataContext } from "./StoreWrapper";

const Product = ({id}) => {
    const { state: { data, carts }, dispatch } = useContext(DataContext)
    const product = data.map[id];
    const addedToCart = useMemo(() => carts.some(item => item === id), [carts])

    const addToCart = () => {
      dispatch({
        type: "ADD_TO_CART",
        payload: id,
      })
    }

    const removeFromCart = () => {
      dispatch({
        type: "REMOVE_FROM_CART",
        payload: id
      })
    }
    
    return <div className="product">
        <img src={product.image} width="300px" height="300px" />
        {product.title}
        <button onClick={() => addedToCart ? removeFromCart() : addToCart()}>
          {addedToCart ? "Remove From Cart" : " Add to Cart"}
        </button>
    </div>
}

export default Product;
