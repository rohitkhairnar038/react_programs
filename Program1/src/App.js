import React, { useRef, useState } from 'react'





const App = () => {

const fn = useRef(null)
const[fname,setFname] = useState('')

const Header =({fname})=>{
 return(
<header>
  <h1>Hello {fname}</h1>
  </header>

 )
}

const buttonClick = (event)=>{
  setFname(fn.current.value)
}

const Footer = ({fname})=>{
   return(
<footer>
  <h3>Hello {fname}</h3>
</footer>

   )
}


const Main = ({fname})=>{
   return(
<div>
  <input   ref={fn}  placeholder='enter username'></input>
  <br></br>
<button onClick={buttonClick}>ok</button>
</div>
   )
}



  return (
    <div>
<Header fname={fname}></Header>
<Main></Main>
<Footer  fname={fname}></Footer>

    </div>
  )
}

export default App;
