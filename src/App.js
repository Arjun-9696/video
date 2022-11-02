import './App.css';
import VideoSample from "./images/sample.mp4";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <video preload="yes" autoplay src={VideoSample} type="video/mp4" width="50%" height="50%" controls></video>
      </header>
    </div>
  );
}

export default App;
