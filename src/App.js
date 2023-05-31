import { Routes, Route } from "react-router-dom";
import Home from "./components/routes/home/home.component";
import Navbar from "./components/routes/navbar/navbar.component";
import Authentication from "./components/routes/authentication/authentication.component";
import Shop from "./components/routes/shop/shop.component";
import Checkout from "./components/routes/checkout/checkout.component";
import Category from "./components/category/category.component";
const App = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />} >
          <Route index element={<Home />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
