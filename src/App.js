import {useState} from 'react'
import Banner from "./components/Banner";
import Cart from "./components/Cart";
import ShoppingList from "./components/ShoppingList";
import Footer from "./components/Footer"
import './styles/Layout.css'


function App() {
  const [cart, updateCart] = useState([])
  return (
    <div >
     <Banner/>
     <div className="lmj-layout-inner">
        <Cart cart={cart} updateCart={updateCart}/>
        <ShoppingList cart={cart} updateCart={updateCart}/>
     </div>
     <Footer/>
    </div>
  );
}

export default App;
