import logo from "./logo.svg";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Basket from "./components/Basket/Basket";
import Main from "./components/Main/Main";
import Product from "./components/Product/Product";
import Profil from "./components/Profil/Profil";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useState } from "react";

function App() {
  const [modal, setModal] = useState(false)

  return (
    <div className="App">
      <BrowserRouter>
        <Basket modal={modal} setModal={setModal}/>
        <Header setModal={setModal}/>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/product" element={<Product />} />
          <Route path="/profil" element={<Profil />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
