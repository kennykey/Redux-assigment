import { openModal } from '../features/modal/modalSlice'
import { useDispatch } from 'react-redux'
import { clear } from '../features/cart/cartSlice'

const Modal = () => {
  const dispatch = useDispatch()

  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>Remove all items from your shopping cart?</h4>
        <div className="btn-container">
          <button
            type="button"
            className="btn confirm-btn"
            onClick={() => {
              dispatch(clear())
              dispatch(openModal())
            }}
          >
            confirm
          </button>
          <button
            type="button"
            className="btn clear-btn"
            onClick={() => {
              dispatch(openModal())
            }}
          >
            cancel
          </button>
        </div>
      </div>
    </aside>
  )
}
export default Modal
