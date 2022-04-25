import { BrowserRouter, Routes, Outlet, Route, Link, useNavigate, useLocation } from "react-router-dom";
import ProductsComponent from "./ProductComponent";
import DetailComponent from "./DetailComponent";
import ErrorBoundary from "./ErrorBoundary";
import StoreWrapper from "./StoreWrapper";
import Search from "./Search.old";
import Header from "./Header";
import './styles.css';
import Carts from "./Carts";
import SearchMovies from "./SearchMovies";

export default function App() {
  return (
    <ErrorBoundary>
      <StoreWrapper>
        <RoutesComponent />
      </StoreWrapper>
    </ErrorBoundary>
  );
}

const RoutesComponent = () => {
  return <BrowserRouter>
  <Header>
    <Routes>
      <Route path="/" element={<SearchMovies />} />
      <Route path="products" element={<ProductsComponent />} >
        <Route path=":detail" element={<DetailComponent />} />
      </Route>
      <Route path="carts" element={<Carts />} />
    </Routes>
  </Header>
</BrowserRouter>
}


const NotFound = () => {
  return <div> Not found </div>
}
