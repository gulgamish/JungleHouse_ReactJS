import {useState, useEffect} from 'react'
import Banner from "./components/Banner";
import Cart from "./components/Cart";
import ShoppingList from "./components/ShoppingList";
import Footer from "./components/Footer"
import './styles/Layout.css'


function App() {
  const savedCart = localStorage.getItem('cart')
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])
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
