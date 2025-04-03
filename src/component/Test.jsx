import PassingComponent from "./PassingComponent";

const Test = (props)=>{

  // event method for onClick listener
  const handle =()=>{
    alert("Welcome here !");
  }
    return(

      <div>
        <ul>
          <li>{props.title}</li>
        </ul>
        <PassingComponent item={handle}/>
      </div>
    );
}

export default Test;