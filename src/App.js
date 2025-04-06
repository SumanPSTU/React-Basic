import "./assets/style/App.css";
import IFelse from "./component/IFelse";
import Login from "./component/Login";
import Navbar  from "./component/Navbar";
import UsestateTest from "./component/UsestateTest";

export default function App() {
  return (
    <div className="App">
      {Navbar()}
      {IFelse()}
      
      <div>
      <UsestateTest/>
      </div>
      
      <div>
        <Login/>
      </div>
      
      
    </div>
  );
}


