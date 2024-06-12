import './App.css'
import ListProducts from './components/list-products/ListProducts';
import ShoppingCart from './components/shopping-cart/ShoppingCart';
import ShoppingCartProvider from './context/GeneralContext';

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <div className='grid grid-cols-2 gap-6 p-4 min-w-[850px]'>
          <ListProducts className='grid grid-cols-2' />
          <ShoppingCart />
        </div>
      </ShoppingCartProvider>
    </>
  )
}

export default App
