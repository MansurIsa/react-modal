import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { overlayFunc } from '../redux/MainReducer'
import { IoClose } from "react-icons/io5";


const Modals = () => {
    const { obj } = useSelector(state => state.Data)
    const dispatch=useDispatch()
    return (
        <div className='modal_container'>
            <div className='overlay' onClick={()=>dispatch(overlayFunc())}></div>
            <div className='modal_card'>
            <IoClose onClick={()=>dispatch(overlayFunc())}/>

                <h2>{obj?.title}</h2>
                <p>{obj?.desc}</p>
            </div>
        </div>

    )
}

export default Modals