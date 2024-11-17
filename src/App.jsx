import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Toggle from './Toggle'
import Counter from './Counter'
import Controller from './Controller'
// import Controller from './Controller'
// import Toggle from './Toggle'
// import Counter from './Counter'

// import Controllers from './Controllers'

function App() {
  const [count, setCount] = useState(0)
  const [news,newText]=useState(true)


  return (
    <div className='container'>
    <Controller/>
     { news ===true ? <Toggle/> : " " }
     <button id='button' onClick={()=>newText((hide)=>!hide)}> 
      {
        news === true ? " Click To Hide" : "Click To Show"
      } </button>
      <Counter/>
    </div>
  )
}

export default App
