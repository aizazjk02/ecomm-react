import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Home from "./components/routes/home/home.component";
import Navbar from "./components/routes/navbar/navbar.component";
import Authentication from "./components/routes/authentication/authentication.component";
import Shop from "./components/routes/shop/shop.component";
import Checkout from "./components/routes/checkout/checkout.component";
import Orders from "./components/routes/orders/orders.component";
// import ShippingAddress from "./components/shipping-address/shipping-address.component";
import { getOrders, onAuthStateChangedListner } from "./utils/firebase/firebase.utils";
import { useDispatch } from "react-redux";
import { setCurrentUser, setOrders } from "./store/user/user.actions";
const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    const fetchOrders = async (uid) => {
      const result = await getOrders(uid)
      dispatch(setOrders(result))
    }
    const unsubscribe = onAuthStateChangedListner((user) => {
      dispatch(setCurrentUser(user))
      fetchOrders(user?.uid)

    })
    return unsubscribe // this method is going to get called after useEffect 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />} >
          <Route index element={<Home />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="orders" element={<Orders />} />
          
        </Route>
      </Routes>

    </div>
  );
}

export default App;
