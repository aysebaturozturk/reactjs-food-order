import { useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsShown, setCartIsShow] = useState(false);

  function showCartHandler(){
      setCartIsShow(true);
  }

  function hideCartHandler(){
      setCartIsShow(false);
  }

  return (
    <CartProvider>
      <Header />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
