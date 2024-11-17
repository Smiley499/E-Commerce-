
import React, { useState } from 'react'

const Counter = () => {
  const [display,countDisplay]=useState('')
  const characterDisplay=(p)=>{
    countDisplay(p.target.value)
  }
  return (
    <div>
      <textarea value={display}
       rows='5' cols='50' onChange={characterDisplay} style={{border:'solid pink' , borderRadius:'8px',color:'rgb(201, 242, 228)'}}>
       </textarea>
    <span style={{color:' rgb(201, 201, 188)'}}><h2>Character Count : {display.length}</h2></span>
    </div>
  )
}

export default Counter

