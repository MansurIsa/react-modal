import React from 'react'
import Container from './components/Container'
import { useSelector } from 'react-redux'
import Modals from './modals/Modals'

const App = () => {
  const {modal}=useSelector(state=>state.Data)
  return (
    <div>
      
      <Container/>
      {modal && <Modals/>}
    </div>
  )
}

export default App