import React,{useState} from 'react'
import {useForm} from 'react-hook-form'

const App = () => {

const{handleSubmit,register} = useForm()

const[fn,setFn] = useState()
const[ln, setLn] = useState()

const setdata =(data)=>{
  console.log(data)
setFn(data.fname)
setLn(data.lname)

}


  return (
    <div>
<form   onSubmit={handleSubmit(setdata)}>

<input type='text' {...register('fname')}  placeholder='enter your first name'></input>
<br></br>


<input type='text' {...register('lname')}  placeholder='enter your last name'></input>
<br></br>
<br></br>
<button type='submit'>submit here</button>
</form>

firstname:{fn}
<br></br>

lastname: {ln}
    </div>
  )
}

export default App