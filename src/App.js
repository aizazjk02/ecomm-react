import { Routes, Route } from "react-router-dom";
import Home from "./components/routes/home/home.component";
import Navbar from "./components/routes/navbar/navbar.component";
import SignIn from "./components/routes/sign-in/sign-in.component";

const App = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />} >
          <Route index element={<Home />} />
          <Route path="sign-in" element={<SignIn/>} />

        </Route>
      </Routes>
    </div>
  );
}

export default App;
