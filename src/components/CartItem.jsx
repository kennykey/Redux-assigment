import { ChevronDown, ChevronUp } from '../icons'
import { useSelector,useDispatch } from 'react-redux'
import { increase, decrease } from '../features/cart/cartSlice'

const CartItem = ({ id, img, title, price }) => {
  const { amount } = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  const handleIncrease = () =>{
    dispatch(increase(id,price));
  }

  const handleDecrease = () =>{
    dispatch(decrease(id,price));
  }

  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button className="remove-btn">remove</button>
      </div>
      <div>
        <button className="amount-btn" onClick={handleIncrease}>
          <ChevronUp/>
        </button>
        <p className="amount">{amount}</p>
        <button className="amount-btn" onClick={handleDecrease}>
          <ChevronDown />
        </button>
      </div>
    </article>
  )
}

export default CartItem
