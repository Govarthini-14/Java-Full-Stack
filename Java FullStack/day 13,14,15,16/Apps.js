import React from "react";
import{BrowserRouter,Routes,Route,Link} from "react-router-dom";
function Apps(){
    return(
        <BrowserRouter>
        <div style={{textAlign:"center",marginTop:"40px"}}>
        <h1> Simple Routing Demo</h1>
        <nav>
           <Link to="/">Home</Link>|{""}
           <Link to="/about">About</Link>|{""}
           <Link to="/contact">Contact</Link>|{""}

        </nav>
        <Routes>

         <Route path="/" element={<h2>Home Page</h2>}/>
         <Route path="/about" element={<h2>About Page</h2>}/>
         <Route path="/contact" element={<h2>Contact Page</h2>}/>

        </Routes>
        </div>
        </BrowserRouter>
    )
}
