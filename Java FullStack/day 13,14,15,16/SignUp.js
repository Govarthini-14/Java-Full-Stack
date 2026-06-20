import React, { useState } from 'react';

export const SignUp = () => {
  const [name, setName] = useState("");
  const [phno, setPhno] = useState("");
  const [mail, setMail] = useState("");
  const [usrname, setUsrname] = useState("");
  const [pswd, setPswd] = useState("");
  const [conpswd, setConpswd] = useState("");
  const [dob, setDob] = useState("");
  const [message, setMessage] = useState("");

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPswd(value);

    const password =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&]).{8,15}$/;

    if (password.test(value)) {
      setMessage(" Valid Password");
    } else {
      setMessage(
        " Password must contain 8-15 characters, at least one letter, one digit and one special character"
      );
    }
  };

  const handleClick = () => {
    if (name === "") {
      alert("Enter Name");
    } else if (phno === "") {
      alert("Enter Phone Number");
    }
    
    else if (mail === "") {
      alert("Enter Mail");
    } else if (usrname === "") {
      alert("Enter UserName");
    } else if (pswd === "") {
      alert("Enter Password");
    } else if (conpswd === "") {
      alert("Enter Confirm Password");
    } else if (dob === "") {
      alert("Enter DOB");
    } else if (pswd !== conpswd) {
      alert("Re-enter the password correctly");
    } else {
      alert("Signup Successful");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Sign Up!!!</h1>

      <input
        type="text"
        placeholder="Enter Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br /><br />

      <input
        type="number"
        placeholder="Enter Your Phone Number"
        value={phno}
        onChange={(e) => setPhno(e.target.value)}
      />
      <br /><br />

      <input
        type="email"
        placeholder="Enter Mail"
        value={mail}
        onChange={(e) => setMail(e.target.value)}
      />
      <br /><br />

      <input
        type="text"
        placeholder="Enter Username"
        value={usrname}
        onChange={(e) => setUsrname(e.target.value)}
      />
      <br /><br />

      <input
        type="password"
        placeholder="Enter Password"
        value={pswd}
        onChange={handlePasswordChange}
      />
      <br />

      <p>{message}</p>

      <input
        type="password"
        placeholder="Confirm Password"
        value={conpswd}
        onChange={(e) => setConpswd(e.target.value)}
      />
      <br /><br />

      <input
        type="date"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
      />
      <br /><br />

      <button onClick={handleClick}>
        Click to Signup
      </button>
    </div>
  );
};