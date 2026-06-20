import React from 'react'

export const Compute = () => {
    const n=300
    function handleClick(){
      const msg=document.getElementById("result");
      msg.textContent="Good cat";
      msg.style.color='red';
    }
    function handleC(){
      const img = document.getElementById("image").src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvaT6eLE9PfqdknSUYSOmeE6iCfsKRggRGuQ&s';
    
    }
  return (<div>
    <h1>EVENT HANDLING</h1>
    <button onClick={handleClick}>click</button>
    <h1 id="result" onClick={handleClick}> good dog</h1>
    <h2>When you click the pic you will see the magic...</h2>
    <img src='https://media.istockphoto.com/id/183412466/photo/eastern-bluebirds-male-and-female.jpg?s=612x612&w=0&k=20&c=6_EQHnGedwdjM9QTUF2c1ce7cC3XtlxvMPpU5HAouhc=' width={300} height={180} id ="image" onClick={handleC}></img>

    </div>
  )

}

