import './App.css';
import myWonderfulImage from "./imageInSrc.jfif"


function App() {
  return (
    <div className="all">
    <div className="s1">
      <h1 className="title red">Your name here</h1>
      <img src={myWonderfulImage} alt ='src' />
      <img src="/imageInPublic.jfif" alt='public'/>
    </div>
    <video controls>
      <source src="myVideo.mp4" type="video/mp4" />
    </video>
  </div>
  );
}

export default App;
