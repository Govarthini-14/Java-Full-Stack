import React from 'react'

export const LoginPage = () => {
    var Name="Govarthini";
    var Pass="govi123";
    function loginHandle(){
        const name=document.getElementById("name").value;
        const pass=document.getElementById("pass").value;
        if(name===Name && pass===Pass){
            alert("login successful");

        }
        else if(name===Name && pass!=Pass){
            alert("correct user name but the pass is mismatched")
        }
        else{
            alert("login denied");
        }


    }




  return(

    <div>
        <labe>Enter name:</labe>
        <input type='text' id="name" placeholder='enter your name'></input>
        <br/>
        <br/>
        <labe>Enter password:</labe>
        <input type='password' id="pass" placeholder='enter your pass'></input>
        <button onClick={loginHandle}>login?</button>
        
    </div>
  );
}
