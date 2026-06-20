import React,{useState} from 'react'

function Counterclock () {
    const[count,setCount]=useState(0);
    function minus(){
        setCount(count-1);
    }
    function plus(){
        setCount(count+1);
    }
    function reset(){
        setCount(0);
    }

  return (
    <div style={{textAlign:"center",marginTop:"50px"}}>
        <h1>Counter Clock</h1>
        <h2>{count}</h2>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
        <button onClick={reset}>reset</button>
        <br>
        </br>
        <button onClick={()=>setCount(count+1)}>another plus</button>
    </div>
  );
}
export default Counterclock;