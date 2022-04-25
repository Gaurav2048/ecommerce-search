import { useNavigate } from "react-router-dom";

const Header = (props) => {
    return <div style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh'
    }}>
        <div style={{
        height: '60px',
        borderBottom: '1px solid #f7f7f7',
        background: 'lightblue',
    }}>
       <HeaderContent />
    </div>
        {props.children}
    </div>
}

export default Header;

const HeaderContent = () => {
    const navigate = useNavigate();
    return  <div style={{
        height: '60px'
    }}>
       <div onClick={() => navigate("/products")}>Products</div>
       <div onClick={() => navigate("/about")}>About</div>
    </div>
}
