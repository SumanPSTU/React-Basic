import { useState } from "react";

const UsestateTest = () => {
  const [text, setText] = useState("This is a text");

  const click = () => {
    setText("This is a new text");
  };

  return (
    <div>
      <p>{text}</p>
      <button onClick={click}>Click Me</button>
    </div>
  );
};

export default UsestateTest;
