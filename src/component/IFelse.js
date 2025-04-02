const IFelse = () => {
  const marks = 700;
  let cop;
  if(marks<90){
    cop = <h1 style={{color:'red'}}>Very bad!!</h1>
  }else{
    cop = <h1 style={{color:'green'}}> very Good!!</h1>
  }

  return(<div>
    {
        (marks > 90) ? <h1>CongS</h1> : <h1>Opps</h1>
    }
    <div>{cop}</div>
  </div>)
};
export default IFelse;
