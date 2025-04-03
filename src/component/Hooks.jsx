import { useRef } from "react";

const Hooks =()=>{
    const ref = useRef();
    const img = useRef();
    const link = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9WQ2FExmFKVDSZZz-sodJFItx9acJ4kkBxw&s";
    const click=()=>{
        
        ref.current.style.color = "red";
        ref.current.style.backgroundColor = "purple";
        ref.current.style.padding = "10px";
        ref.current.style.borderRadius = "5px";
        ref.current.innerHTML="<h1>Hello sumon</h1>";
        img.current.src=link;
        img.current.style.borderRadius='20px';
    }
    return(

        <div style={{height:'100px'}}>
            
            <button onClick={click}>Clicke me </button>
            <div ref={ref}></div>
            <div style={{margin:'20px',height:'200px'}}><img ref={img} alt="" /></div>
        </div>



    );

};
export default Hooks;