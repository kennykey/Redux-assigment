import { openModal } from '../features/modal/modalSlice'
import { useSelector,useDispatch } from 'react-redux'
import CartItem from './CartItem'
import cartItems from '../cartItems'

const CartContainer = () => {
  const { amount } = useSelector((state) => state.cart)
  const dispatch = useDispatch()


  if (amount < 0) {
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    )
  }else{
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
        </header>
        <div>
          {cartItems.map((item) => {
            return <CartItem key={item.id} {...item} />
          })}
        </div>
        <footer>
          <hr />
          <div className="cart-total">
            <h4>
              total <span>$0</span>
            </h4>
          </div>
          <button
            className="btn clear-btn"
            onClick={() => {
              dispatch(openModal())
            }} >
            clear cart
          </button>
        </footer>
      </section>
    )
  }
}
export default CartContainer
