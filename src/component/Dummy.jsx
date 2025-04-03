import { useRef } from "react";

const Dummy =()=>{

    const apiData = useRef();
    const data = useRef();
    const FetchData = async ()=>{
      const data =  await fetch('https://dummyjson.com/products');

        apiData.current = await data.json();
        console.log(apiData);
       

    };
    const showData = async()=>{
        data.current.innerHTML = JSON.stringify(apiData.current,null,2);
        if(apiData.current){
            alert("Data is collected!");
        }else{
            alert("Data is not collected yet!");
        }
    };
    return(

        <div>
            <p ref={data}></p>
            <button onClick={FetchData}>Call API</button>
            <button onClick={showData}>show data</button>

        </div>



    );
};
export default Dummy;