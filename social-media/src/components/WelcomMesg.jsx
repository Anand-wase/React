const WelcomeMesg = ({onGetPosClick}) =>{
  return <center><h1 className="welcomeMesg">There are no Posts</h1>
  <button type="button" className="btn btn-primary" onClick={onGetPosClick}>Get Posts From Server</button>
  </center>
  
}
export default WelcomeMesg;