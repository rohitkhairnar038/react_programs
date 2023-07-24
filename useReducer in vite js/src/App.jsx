import React from 'react'
import { useReducer } from 'react'
import {reducerMethod} from './components/reducercode.jsx'

const App = () => {

  const[counter,dispatch] = useReducer(reducerMethod,0)
  const handleInr =()=>{
    dispatch(

{
  type:"inr",
  newCounter:1
}

    )
  }

const handleDcr =()=>{
  dispatch(
    {
      type:"dcr",
      newCounter:1
    }
  )
}
const handleZero = ()=>{
  dispatch(
    {
      type:"zero",
      newCounter:0
    }
  )
}


  return (
    <>
    <div>

<h1>this is react APP</h1>
<button onClick= {handleInr}>Increament</button>
<br></br>
<button onClick={handleDcr}>Decreament</button>
<br></br>
<button onClick= {handleZero}>zero</button>
<br></br>

counter: {counter}
    </div>
    </>
  )
}

export default App;