import React,{useState} from 'react';

export const LoginConnection = () => {
    const[user,setUser]=useState("");
    const[pass,setPass]=useState("");

    const handleclick=()=>{
        fetch("http://localhost:8080/login",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({username:user,password:pass}),
        })
        .then((res)=>res.text())
        .then((data)=>alert(data))
        .catch(()=>alert("Backend not reachable"));
    }
  return (
    <div style={{textAlign:"center",marginTop:"50px"}}>
        <h2>Login Page</h2>
        <input
            type="text"
            placeholder='Username'
            value={user}
            onChange={(e)=>setUser(e.target.value)}
            />
            <br/><br/>
            <input
               type="password"
               placeholder='password'
               value={pass}
               onChange={(e)=>setPass(e.target.value)}
            />
            <br/><br/>
            <button onClick={handleclick}>Login</button>
    </div>
  )
}
