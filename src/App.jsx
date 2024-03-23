import Navbar from './components/Navbar'
import CartContainer from './components/CartContainer'
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
    </Fragment>
  )
}
export default App
