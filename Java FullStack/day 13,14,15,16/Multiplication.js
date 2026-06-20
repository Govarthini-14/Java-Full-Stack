/*import React,{useState} from 'react'

export const Muttiplication = () => {
    const[msg,setMsg] = useState("");
    function getMessage(){
        fetch("http://localhost:8080/multi")
        .then((res)=>res.text())
        .then((data)=>setMsg(data));
    }

      return (
    <div style={{textAlign:"center",marginTop:"40px"}}>
        <h1>MULTIPLICATION TABLE</h1>
        <button onClick={getMessage}>MULTIPLICATION</button>
        <p> Message from backend : {msg}</p>

    </div>
  );
}
*/

import React,{useState} from 'react'

export const Multiplication = () => {
  const[msg,setMsg]=useState("");
   const[number,setNumber]=useState("")
  function handleClick(){
      fetch("http://localhost:8080/multi/"+number)
      .then((res)=>res.text())
      .then((data)=>setMsg(data));
  }
  return (
    <div style={{textAlign:"center"}}>
      <h1>This is REACT frontend page</h1>
      <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)}/>
      <button onClick={handleClick}>Generate table</button>
      <pre>Tables:{msg}</pre>
    </div>
  )
}
