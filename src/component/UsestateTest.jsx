import { useState } from "react";

const UsestateTest = () => {
  const [text, setText] = useState("This is a text");

  const click = () => {
    setText("This is a new text");
  };

  const [myObj, setObj] = useState({
    name: "John",
    age: 30,
  });

  const handle = () => {
    // setObj({
    //   name: "Sumon",
    //   age: 21,
    // });
    setObj((prev) => ({
      ...prev,
      name: "Sumon",
    }));
  };

  return (
    <div>
      <p>{text}</p>
      <button onClick={click}>Click Me</button>
      <h1>{myObj.name}</h1>
      <h1>{myObj.age}</h1>
      <button onClick={handle}>Click here</button>
      {/* {Object.entries(myObj).map(([key, value], index) => {
        return (
          <p key={index}>
            {key}: {value}
          </p>
        );
      })} */}
    </div>
  );
};

export default UsestateTest;
