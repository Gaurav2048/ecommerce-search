import { DataContext } from "./StoreWrapper";
import { useContext } from "react";

const Carts = () => {
    const { state, dispatch } = useContext(DataContext);
    const carts = state.carts; // [1,2, 6, 7, 9]
    const data = state.data.map;


    return <div>    
        <h4>Carts</h4>
        {
            carts?.map(cartId => <Cart cartInfo = {data[cartId]} key={cartId} />)
        }

    </div>
}

export default Carts;


const Cart = (props) => {
    const { dispatch } = useContext(DataContext);
    const { cartInfo } = props;

    const removeFromCart = () => {
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: cartInfo.id.toString()
          })
    }


    return <div className="cart-info-container">
        <div className="data-container">
            <img src={cartInfo.image} alt="" width="100px" height="100px" />
            <div className="cart-title">
            <div className="title">{cartInfo.title}</div> 
            <div className="description">{cartInfo.description}</div> 
            </div>
        </div>
        <button onClick={removeFromCart}>Remove Item</button>
    </div>

}
