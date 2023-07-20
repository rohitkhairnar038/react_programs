import React,{useState} from 'react'
import {useForm} from 'react-hook-form'

const App = () => {

const{handleSubmit, register, formState:{errors}} = useForm()

const[fn,setFn] = useState()
const[ln,setLn] = useState()
const[sage,setAge] = useState(0)

const senddata=(data)=>{
  console.log(data)
setFn(data.fname)
setLn(data.lname)
setAge(data.age)

}





return(

<div>
  <form onSubmit={handleSubmit(senddata)}>
<input type='text'  {...register('fname',{required:true})}
placeholder='enter first name'></input>

{errors.fname && <div style={{color:'red'}}>
  this field is required </div>}
<br></br>
<br></br>

<input type='text' {...register('lname',{required:true})}
placeholder='enter your last name'></input>

{errors.lname && <div style={{color:'red'}}>

this field is required </div>
}

<br></br>
<br></br>

<input type='number' {...register('age',{min:1,max:100})}
placeholder='enter your age'></input>
{errors.age &&  <div style={{color:'red'}}>
  
  this field is requied</div>
      }

      <input type='submit'></input>
</form>
<br></br>
<br></br>

first name:{fn}
<br></br>

last name : {ln}
<br></br>
age: {sage}

</div>
)
}

export default App