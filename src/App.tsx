import './App.css'
import ListProducts from './components/list-products/ListProducts';
import ShoppingCart from './components/shopping-cart/ShoppingCart';

function App() {
  return (
    <>
      <div className='grid grid-cols-2 gap-6 p-4'>
        <ListProducts />
        <ShoppingCart />
      </div>
    </>
  )
}

export default App
