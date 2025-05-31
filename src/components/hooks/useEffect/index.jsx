import './index.css'
import React, { useEffect, useState } from 'react'

const ReactUseEffect = () => {
    const [count,setCount]=useState(0)
    const [name,setName]=useState("")
    useEffect(() => {
      document.title=`Count is ${count}`
     
      
    }, [count])
    console.log(name)
  return (
    <div className=' effect-container'>
      <h1>Hello,useEffect</h1>
      <p>Count : {count} </p>
      <p>Name : {name}</p>
      <input type="text" name="" id="" value={name} onChange={(e)=>setName(e.target.value)}/>
      <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}

export default ReactUseEffect
