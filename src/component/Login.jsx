import { useState } from "react";

const Login = () => {
  let [formObj, setObj] = useState({
    fname: "",
    lname: "",
    city: "",
    gender: "",
  });
  const onchange = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formObj); // Add any submission logic here
  };

  const inputOnChange = (property, value) => {
    setObj((prev) => ({
      ...prev,
      [property]: value,
    }));
  };
  
  

  return (
    <div style={{ height: "300px", marginTop: "20px" }}>
      <form action=""onSubmit={onchange}>
        <input
        onChange={(e)=>{inputOnChange("fname",e.target.value)}}
          type="text"
          name="fname"
          value={formObj.fname}
          placeholder="Enter first name"
        />
        <br />
        <input
        onChange={(e)=>{inputOnChange("lname",e.target.value)}}
          type="text"
          name="lname"
          value={formObj.lname}
          placeholder="Enter last name"
        />
        <br />
        <select
        onChange={(e)=>{inputOnChange("city",e.target.value)}} name="city"  id="">
          <option value="">Choose city</option>
          <option value="New York">New York</option>
          <option value="Los Angeles">Los Angeles</option>
          <option value="Dhaka">Dhaka</option>
        </select>
        <br />
        <input
        onChange={(e)=>{inputOnChange("gender","Male")}}
          type="radio"
          checked={formObj.gender === "Male"}
          name="gender"
          id=""
        />
        Male
        <input
        onChange={(e)=>{inputOnChange("gender","Female")}}
          type="radio"
          checked={formObj.gender === "Female"}
          name="gender"
          id=""
        />
        Female <br />
        <button type="submit" >Submit</button>
      </form>
    </div>
  );
};
export default Login;
