const PassingComponent = (props)=>{
    return(

        <div className="content">
            <button style={{padding:'5px 20px ',
                borderRadius:'10px',
                backgroundColor:'blue',
                border:'transparent'
            }} onClick={props.item}>Click me</button>
        </div>

    );
}
export default PassingComponent;