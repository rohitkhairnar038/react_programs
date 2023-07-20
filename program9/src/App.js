import {useContext,useRef,useState} from "react";
import { createContext } from "react";

const App =()=>{
const fn = useRef(null)
const[fname,setFname] = useState()

const context = createContext('')

const buttonclick =(event)=>{
  setFname(fn.current.value)
}



const Header =()=>{
  const firstname = useContext(context)
  return(
    <header>
      <h1>Hello {firstname}</h1>
    </header>
  )
}

const Footer =()=>{
  const firstname = useContext(context)
  return(
    <footer>
      <h3>bye{firstname}</h3>
    </footer>
  )
}



const Main =()=>{
  return(
    <div>
<input ref={fn}  placeholder="enter username"></input>
<br></br>
<button onClick={buttonclick}>ok</button>
<br></br>
    </div>
  )
}

return(
<div>
<context.Provider value={fname}>
<Header></Header>
<Main></Main>
<Footer></Footer>
</context.Provider>
</div>
)

}
export default App;