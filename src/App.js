import { Routes, Route } from "react-router-dom";
import Home from "./components/routes/home/home.component";
import Navbar from "./components/routes/navbar/navbar.component";
import Authentication from "./components/routes/authentication/authentication.component";

const App = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />} >
          <Route index element={<Home />} />
          <Route path="auth" element={<Authentication/>} />

        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
