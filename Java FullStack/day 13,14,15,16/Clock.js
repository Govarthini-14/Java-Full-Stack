import React from 'react'

export const Clock = () => {
    var  num=0;
    function plus(){
        num=num+1
        document.getElementById("res").textContent=num
    }
    function minus(){
        num=num-1
        document.getElementById("res").textContent=num
    }
    function reset(){
        document.getElementById("res").textContent=0
    }

  return (
    <div>
    <button onClick={plus}>+</button>
    <button onClick={minus}>-</button>
    <button onClick={reset}>reset</button>
    <h1 id="res">0</h1>
    </div>
  );
}
