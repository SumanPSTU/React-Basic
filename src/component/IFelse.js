import Navbar from "./Navbar";
import Test  from "./Test";
const IFelse = () => {
  const marks = 700;
  const city = ["Dhaka", "London", "NYC", "Dhilli"];
  let cop;
  if (marks < 90) {
    cop = <h1 style={{ color: "red" }}>Very bad!!</h1>;
  } else {
    cop = <h1 style={{ color: "green" }}> very Good!!</h1>;
  }

  return (
    <div>
      {marks > 90 ? <h1>CongS</h1> : <h1>Opps</h1>}
      <div>{cop}</div>
      <div style={{ background: "purple" }}>
        {((naem) => {
          if (marks > 90) {
            return <h1 style={{ color: "green" }}>Very Good {naem}</h1>;
          } else {
            <h1 style={{ color: "red" }}>Very Good</h1>;
          }
        })(10)}
      </div>

      <div style={{ weight: "100px" }}>
        <ul >
          {city.map((item, index) => {
            return <li style={{weight:'100px'}} key={index.toString()}>{item}</li>;
          })}
        </ul>
      </div>
      {Navbar()}
      <div>
        <Test title={"this is title"}/>
      </div>
    </div>
  );
};
export default IFelse;
