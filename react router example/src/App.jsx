
import React from "react"
import{Link,Route,Routes} from "react-router-dom"


const Home=()=>{
  return(
    <h1>Home page</h1>
  )
}


const Blogs =()=>{
  return(
    <h1>blog page</h1>
  )
}

const Contacts =()=>{
  return(
    <h1>contact page</h1>
  )
}

function App(){
  return(
    <>
    <nav>
      <ul>
<li><Link to = '/'>Home</Link></li>
<li><Link to ='/Blogs'>Blogs</Link> </li>
<li> <Link to ='/Contacts'> Contacts</Link> </li>

      </ul>
    </nav>
    <Routes>
      <Route path ='/' element={<Home></Home>}></Route>
      <Route path ='/Contacts' element={<Contacts></Contacts>}></Route>
      <Route path = '/Blogs' element ={<Blogs></Blogs>}></Route>
    </Routes>
    
    
    </>
  )
}

export default App;