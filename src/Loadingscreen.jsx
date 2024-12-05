import "./Loadingscreen.css"
function Loadingscreen(){
    return(
        <>
        <div className="Loading">
            <div className="animation">
            <iframe src="https://lottie.host/embed/7b986f8b-5691-46a9-b331-c0c033771d25/vSsC1JMjG8.json"></iframe>
            </div>
            <p className="loadingp">Wait for few moments...</p>
            <span>Content Loading might take sometime</span>
        </div>
        
        </>
  );
}
export default Loadingscreen