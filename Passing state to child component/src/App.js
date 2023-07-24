import React, { useState } from 'react'


const Display = (props)=>{
  return(
    <div>
      <p>counter is {props.counter}</p>
    </div>
  )
}





const App = () => {

  const[counter,setCounter] = useState(0);

const handleEvent = ()=>{
  setCounter(counter+1)
}

const handleEvent1 = ()=>{
  setCounter(counter-1)
}

const handleEvent2 = ()=>{
  setCounter(0)
}

  return (
    <div>
<p>event handling demo</p>
<button onClick={handleEvent} text = 'increament'>increament</button>
<br></br>
<button  onClick={handleEvent1}    text = 'decreament'>decreament</button>
<br></br>
<button onClick={handleEvent2}>zero</button>
<br></br>
<p><Display counter ={counter}></Display></p>


    </div>
  )
}

export default App