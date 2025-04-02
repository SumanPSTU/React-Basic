import React, { useState } from "react";

const Navbar = () => {

  const [text,settext] = useState("Hello React Developer");
  const [color,setColor] = useState({color:'red'})
  const hand = ()=>{
    settext("Hello sumon welcome to React lesson");
    setColor({color:'#785940'});
  }
  
  return (
    <div className="bg-red">
      <h1 id="id" style={color}>{text}</h1>
      <button onClick={hand} className="btn">Click me</button>
      <h1>Hello</h1>
    </div>
  );
};

export default Navbar;
