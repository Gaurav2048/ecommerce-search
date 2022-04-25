import { useContext } from "react";
import { DataContext } from "./StoreWrapper";

const Product = ({id}) => {
    const { store: { data, cart }, dispatch } = useContext(DataContext)
    const product = data.map[id];

    const addToCart = () => {
        dispatch({
            type: "ADD_TO_CART",
            payload: id
        })
    }

    const removeCart = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            payload: id
        })
    }
    
    return <div style={{
        border: '1px solid #cbcbcb',
        borderRadius: '4px',
        width: '300px',
        height: '400px',
        margin: '4px'
    }}>
        <img src={product.image} width="300px" height="300px" />
        {product.title}
        <button onClick={() => {
            cart.some(item => item === id) ? removeCart() : addToCart()
        }}>
            {
                cart.some(item => item === id) ? "Added To cart" : "Add to Cart"
            }
        </button>
    </div>
}

export default Product;
