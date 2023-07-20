import React,{useState,useRef} from 'react'

const App = () => {

const [values,setValues] = useState([])

const fname = useRef(null)
const lname = useRef(null)
const address = useRef(null)

const handleEvent=(event)=>{
  event.preventDefault()

  const a = fname.current.value
  const b = lname.current.value
  const c = address.current.value

  const newrow = {fname:a , lname:b , address:c}
  setValues([...values, newrow])

}




  return (
    <div>
<form   onSubmit={handleEvent}>
<input type='text' name='fname' ref={fname}></input>

<input type='text' name='lname' ref={lname}></input>

<input type='text' name='address' ref={address}></input>

<br></br>
<button type='submit'>click here</button>

</form>
<br></br>
<br></br>

<table  border={1}>
<tr>
  <td>fname</td>
  <td>lname</td>
  <td>address</td>
</tr>

{values.map((row)=>{
return(
<tr>
<td>{row.fname}</td>
<td>{row.lname}</td>
<td>{row.address}</td>
</tr>

)

}
)



}

  
</table>

    </div>
  )
}

export default App;