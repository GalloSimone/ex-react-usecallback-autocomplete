import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState("")
  const [result, setResult] = useState([])
  const [debounceTimeout,setDebaunceTimeout]=useState(null)

useEffect(()=>{
  if(input.trim()===""){
    setResult([]);
    return;
  }
  if (debounceTimeout) {
    clearTimeout(debounceTimeout);
  }
const timeoutId=setTimeout(()=>{
  fetch(`https://boolean-spec-frontend.vercel.app/freetestapi/products?search=${input}`)
    .then((res)=>res.json())
    .then((data)=>setResult(data))
     .catch((error)=>console.error("errore"))
},300)
setDebaunceTimeout(timeoutId) 
return()=>clearTimeout(timeoutId)
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
     <div>
      {result.length>0 &&(
        <ul>
        {result.map((item, index)=>(
        <li key={index}>
          <img src={item.image} alt={item.name} />
          <p>nome:{item.name}</p>
          <p>descrizione:{item.description}</p>
          <p>prezzo:{item.price}</p>
          </li>
        ))}
          </ul>
      )}
     </div>
    </>
  )
}

export default App
