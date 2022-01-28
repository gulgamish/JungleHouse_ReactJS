import { createContext, useContext} from 'react'
import Banner from "./components/Banner";
import Cart from "./components/Cart";
import ShoppingList from "./components/ShoppingList";
import Footer from "./components/Footer"
import './styles/Layout.css'
import useCart from './hooks/useCart';

const CartContext = createContext(null);

export const useCartContext = () => useContext(CartContext);

function App() {
  const values = useCart();

  return (
    <div >
     <Banner/>
     <div className="lmj-layout-inner">
        <CartContext.Provider value={{ ...values }}>
          <Cart />
          <ShoppingList />
        </CartContext.Provider>
     </div>
     <Footer/>
    </div>
  );
}

export default App;
