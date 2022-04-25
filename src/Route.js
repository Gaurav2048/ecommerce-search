import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./Products";
import Carts from "./Carts";
import Search from "./Search";
import Detail from "./Detail";
import Header from "./Header";


const RouteComponent = () => {
    return  <BrowserRouter>
        <Header>
            <Routes>
            <Route path="/" element={<Search />} />
            <Route path="products" element={<Products />} >
                <Route path=":productId" element={<Detail />} />
            </Route> 
            <Route path="cart" element={<Carts />} />
            </Routes>
        </Header>      
    </BrowserRouter>
    
}

export default RouteComponent;
