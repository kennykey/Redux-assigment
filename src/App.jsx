import Navbar from './components/Navbar'
import CartContainer from './components/CartContainer'
import CartItem from './components/CartItem'
import Modal from './components/Modal'
import { Fragment } from 'react'
import { useSelector } from 'react-redux'

const App = () => {
  const { isOpen } = useSelector((state) => state.modal)

  return (
    <Fragment>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
      <CartItem />
    </Fragment>
  )
}
export default App
