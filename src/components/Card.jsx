import React from 'react'
import { useDispatch } from 'react-redux'
import { handleClick } from '../redux/MainReducer'

const Card = ({data}) => {
    const dispatch=useDispatch()
  return (
    <div className='card' onClick={()=>dispatch(handleClick(data))}>
        <h2>{data?.title}</h2>
        <p>{data?.desc}</p>
    </div>
  )
}

export default Card