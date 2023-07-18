import React, { useState } from 'react'

const App = () => {

const[values,setValues] = useState({fname:'abc',address:'xyz'})
const handleEvent = (event)=>{
    const name = event.target.name
    const value = event.target.value
    const newValues = {...values,[name]:value}
    setValues(newValues)
}

  return (
    <div>
        <form>
username: <input type='text' name = 'fname' value={values.fname} onChange={handleEvent}></input>

address : <input type='text'  name='address' value={values.address} onChange={handleEvent}></input>

        </form>
<br></br>
username : {values.fname}
<br></br>
address: {values.address}
</div>   
  )
}

export default App