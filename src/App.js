import "./assets/style/App.css";
import IFelse from "./component/IFelse";
import Navbar  from "./component/Navbar";


export default function App() {
  return (
    <div className="App">
      {Navbar()}
      {IFelse()}
      
    </div>
  );
}


