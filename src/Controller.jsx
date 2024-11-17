import React, { useState } from 'react'

const Controller = () => {
    const [new1,func2]=useState('')
    const new2=(e)=>{
   func2(e.target.value)
    }

  return (
    <div >
      <input type="text" id='count'  onChange={new2}
       placeholder='text here'
        style={{border:'solid pink', borderRadius:'8px' , color:' rgb(213, 232, 252)'}}/><br />
      <p>name:{new1}</p>
    </div>
  )
}

export default Controller


