import React, { useEffect, useRef, useState } from 'react'

const App = () => {
const bgc = useRef(null)
const[count,setCount] = useState(0)
const[bgColor,setBgcolor] = useState('red')

const inr =()=>{
setCount(count+1)

}

const changebg =()=>{
  setBgcolor(bgc.current.value)
}

useEffect(()=>{
document.body.style.background = bgColor
console.log("color is changed")
},[bgColor])




  return (
    <div>
<input type='text'  ref={bgc}></input>
<button  onClick={inr}  >+</button>
<button onClick={changebg}>change</button>
<br></br>
<br></br>
count : {count}

    </div>
  )
}

export default App