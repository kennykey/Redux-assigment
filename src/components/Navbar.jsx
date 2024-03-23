import { CartIcon } from '../icons'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalItems = cartItems.reduce((total, cartItem) => total + cartItem.amount, 0);

  return (
    <nav>
      <div className="nav-center">
        <h3>redux toolkit by Kenny key</h3>
        <div className="nav-container">
          <CartIcon/>
          <div className="amount-container">
            <p className="total-amount">{totalItems}</p>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
