import { useNavigate } from "react-router-dom";
import { DataContext } from "./StoreWrapper";
import { useContext } from "react";

const Header = (props) => {
    return <div className="Header">
        <HeaderComponent />
        {props.children}
    </div>
}

export default Header;

const HeaderComponent = () => {
    const { state } = useContext(DataContext);
    const navigate = useNavigate();
    const carts = state.carts;

    return <div className="HeaderComponent">
       <div style={{
           display: 'flex'
       }}>
            <div className="point" onClick={() => navigate("/products")} >Products</div>
            <div onClick={() => navigate("/about")} className="point about">Abouts</div>
       </div>
        <button onClick={() => navigate("/carts")} >{`Carts (${carts.length} items)`}</button>
    </div>
}
