//useEffect() eg.......it includes useState function also

import React,{useState,useEffect} from "react";
function Effecthook(){
   
    const[message,setMessage]=useState("Loading.....");
    useEffect(()=>{
        const timer=setTimeout(()=>{
            setMessage("Hello,this is useEffect in action!");
        },4000);//waits 2 sec
        return()=>clearTimeout(timer);//cleanup
    },[]);
    return(
        <div style={{textAlign:"center",marginTop:"50px"}}>
            <h1>{message}</h1>
        </div>
    );
}
 

export default Effecthook;
