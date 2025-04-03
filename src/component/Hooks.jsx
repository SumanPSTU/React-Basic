import { useRef } from "react";

const Hooks =()=>{
    const ref = useRef();
    const img = useRef();
    const att = useRef();
    const fname = useRef()
     const lname = useRef();
    const link = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9WQ2FExmFKVDSZZz-sodJFItx9acJ4kkBxw&s";
    const click=()=>{
        
        ref.current.style.color = "red";
        ref.current.style.backgroundColor = "purple";
        ref.current.style.padding = "10px";
        ref.current.style.borderRadius = "5px";
        ref.current.innerHTML="<h1>Hello sumon</h1>";
        img.current.src=link;
        img.current.style.borderRadius='20px';
        att.current.setAttribute=('height','200px');
        att.current.setAttribute=('weight','200px');
        att.current.setAttribute=('background','blue');
        const v1 = fname.current.value;
        const v2 = lname.current.value;
        alert("your name is  "+v1+" "+v2);
        fname.current.value ="";
        lname.current.value="";
    }
    return(

        <div style={{height:'100px'}}>
            
            <button onClick={click}>Clicke me </button>
            <div ref={ref}></div>
            <div style={{margin:'20px',height:'200px'}}><img ref={img} alt="" /></div>
            <div ref={att}></div>
            <input type="text" ref={fname} />
            <input type="text" ref={lname} />
        </div>



    );

};
export default Hooks;