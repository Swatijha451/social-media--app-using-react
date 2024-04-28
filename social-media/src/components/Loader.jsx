const Loader=()=>{
return(
<div className="text-center mySpinner">
  <div className="spinner-border" role="status " style={{height:"3rem",width:"3rem"}}>
    <span className="visually-hidden">Loading...</span>
  </div>
</div>
) 
};
export default Loader;
