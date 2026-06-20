
import React,{useState} from 'react'

export const LoginHook = () => {
    const [user,setUser]=useState("")
    const [pass,setPass]=useState("")
    const [resUser,setResUser]=useState("")
    const [resPass,setResPass]=useState("")

    const myname="Govarthini"
    const myPass="govi@2006"

    const handleClick=()=>{
        setResUser(user)
        setResPass(pass)

        if(user===myname && pass===myPass){
            alert("Login Successful")
        }
        else{
            alert("Login Unsuccessful")
        }
    }
  return (
    <div style={{textAlign:"center",marginTop:"250px"}}>
        <label>User name:</label>
        <input type='text' placeholder='enter youe name' value={user} onChange={(e)=>setUser(e.target.value)}></input>
        <br/>
        <br/>
        <label>password:</label>
        <input type='password' placeholder='enter youe password' value={pass} onChange={(e)=>setPass(e.target.value)}></input>
        <br/>
        <br/>
        <button onClick={handleClick}>login</button>
        <h1>{resUser}</h1>
        <h2>{resPass}</h2>
    </div>
  )
}
