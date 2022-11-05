import './App.css';
import {useState} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"

//Screens
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import ProductScreen from "./screens/ProductScreen/ProductScreen";
import CartScreen from "./screens/CartScreen/CartScreen";

//Components
import NavBar from './components/Navbar/NavBar';
import BackDrop from './components/BackDrop/BackDrop';
import SideDrawer from './components/SideDrawer/SideDrawer';

function App() {
  const [sideToggle, setSideToggle] = useState(false)
  return (
    <BrowserRouter>    
      <NavBar click={()=>setSideToggle(true)}/>
      <SideDrawer show={sideToggle}/>
      <BackDrop show={sideToggle} click={()=>setSideToggle(false)}/>
      <main>
        <Routes>
          <Route exact path="/" element={<HomeScreen/>}/>
          <Route exact path="/product/:id" element={<ProductScreen/>}/>
          <Route exact path="/cart" element={<CartScreen/>}/>
        </Routes>
      </main>
      {/* {HomeScreen} */}
      {/* {ProductScreen} */}
      {/* {CartScreen} */}
    </BrowserRouter>
  );
}

export default App;
