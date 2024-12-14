import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'

const Container = () => {
    const {arr}=useSelector(state=>state.Data)
    console.log(arr);
    
  return (
    <div className='container'>
        {
            arr?.map((data,i)=>{
                return <Card key={i} data={data}/>
            })
        }
    </div>
  )
}

export default Container