import { useContext } from "react";
import { DataContext } from "./StoreWrapper";

const CartItems = ({id}) => {
    const { store } = useContext(DataContext)
    const map = store.data.map;

    const product = map[id];

    return <div style={{
        border: '1px solid #cbcbcb',
        padding: '4px',
        margin: '4px 0',
        borderRadius: '4px'
    }}>
        <div style={{
            display: 'flex',
        }}>
            <img src={product.image} width="100px" height="100px" />
            <div>
                <h3>{product.title}</h3>
                <h5>{product.description}</h5>
            </div>
        </div>
        <button>Remove</button>
    </div>
} 

export default CartItems;
