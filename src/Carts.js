import { useContext } from "react";
import CartItems from "./CartItems";
import { DataContext } from "./StoreWrapper";

const Carts = () => {
    const { store } = useContext(DataContext)
    const cart = store.cart;
    return <div> 
        <h1>Carts</h1> 
        {
            cart.map(item => <CartItems id={item} key={item} />)
        }

    </div>
}

export default Carts;