import { ChevronDown, ChevronUp } from '../icons'
import { useDispatch } from 'react-redux'
import { increase, decrease,remove,getTotal } from '../features/cart/cartSlice'
import React , {useState} from 'react'

const CartItem = ({ id, img, title, price, amount }) => {
  const [localAmount, setAmount] = useState(amount);
  const dispatch = useDispatch()

  const handleIncrease = () =>{
    dispatch(increase(id));
    setAmount(prevAmount => prevAmount + 1);
    dispatch(getTotal()); 
  }

  const handleDecrease = () =>{
    if(localAmount>1){
      dispatch(decrease(id));
      setAmount(prevAmount => prevAmount - 1);
    }else{
      dispatch(remove(id))
    }
    dispatch(getTotal()); 
  }

  const handleRemove = () =>{
    dispatch(remove(id))
  }

  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button className="remove-btn" onClick={handleRemove}>remove</button>
      </div>
      <div>
        <button className="amount-btn" onClick={handleIncrease}>
          <ChevronUp/>
        </button>
        <p className="amount">{localAmount}</p>
        <button className="amount-btn" onClick={handleDecrease}>
          <ChevronDown />
        </button>
      </div>
    </article>
  )
}

export default CartItem
