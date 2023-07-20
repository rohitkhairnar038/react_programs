import React,{useRef, } from 'react';

const App = ()=>{
const fname = useRef(null)
const lname = useRef(null)
const lang = useRef(null)
const g1 = useRef(null)
const g2 = useRef(null)

const formSubmit =(event)=>{

event.preventDefault()

let fn = fname.current.value
let ln = lname.current.value
let lng = lang.current.value

let gender =''
if(g1.current.checked===true){
  gender="male"
}

if(g2.current.checked===true){
  gender="female"
}


console.log("my first name"+fn)
console.log("my last name"+ln)
console.log("select language"+lng)
console.log("select gender"+gender)
console.log("request submitted to server")
}


  return(
    <div>
<form   onSubmit={formSubmit}>

<input type='text' ref={fname}></input>
<br></br>

<input type='text' ref={lname}></input>
<br></br>
<br></br>
<select ref={lang}>
  <option value='ccc'>ccc</option>
  <option value = "java">java</option>
  <option value = "python">python</option>
</select>
<br></br>
<br></br>
<input type='radio' ref={g1}  name='g'></input>
<input type='radio' ref={g2}  name='g'></input>
<button type='submit'>send to server</button>

</form>

    </div>
  )






}

export default App;