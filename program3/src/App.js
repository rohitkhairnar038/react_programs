import React, { useState } from 'react'

const App = () => {

const[gender,setGender] = useState("male")

const handleEvent1 = (event)=>{
  setGender('male')
}

const handleEvent2 =(event)=>{
  setGender('female')
} 


  return (
    <div>

<form>
male : <input type='radio' onChange={handleEvent1} name='g' checked = {gender=='male'}></input>
<br></br>
female : <input type='radio'  onChange={handleEvent2} name='g' checked = {gender == 'female'}></input>

</form>

you selected : {gender}

    </div>
  )
}

export default App;