import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState("")
  const [result, setResult] = useState([])
useEffect(()=>{
  if(input.trim()===""){
    setResult([]);
    return;
  }
  fetch(`https://boolean-spec-frontend.vercel.app/freetestapi/products?search=${input}`)
  .then((res)=>res.json())
  .then((data)=>setResult(data))
  .catch((error)=>console.error("errore"))
},[input]);
  return (
    <>
     <h1>hello world</h1>
     <input 
     type="text"
     placeholder='cerca'
     value={input}
     onChange={(e)=>setInput(e.target.value)}
     />
     
    </>
  )
}

export default App
