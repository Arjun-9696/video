import './App.css';
import React from 'react'
import VideoSample from "./images/sample.mp4";
function App() {
  const videoRef = React.useRef();
  const [play, setPlay] = React.useState(true);

  const playButton = () => {
    let pause_time = document.getElementById("pause_button_time");
    if (play) {
      videoRef.current.play();
      setPlay(false);
      setTimeout(() => {
        pause_time.style.color = "transparent";
      }, 5000)
    }
    else {
      videoRef.current.pause();
      pause_time.style.color = "white";
      setPlay(true)
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <video preload="yes" autoplay src={VideoSample} type="video/mp4" width="50%" height="50%" ref={videoRef}></video>
        <div onClick={playButton}>
          <video
            preload="auto" loop
            ref={videoRef}
            style={{
              width: "100%",
              height: "650px",
              objectFit: "cover",
              position: "absolute",
              left: 0,
            }} >
            <source src={VideoSample} />
          </video>
          <div id="pause_button_time" className="play_pause_button" onClick={playButton}>
            <h1 id="play_pause" style={{ position: "absolute" }}>
              {/* {play ? <Playbutton /> : <Pausebutton />} */}
              </h1></div>
        </div>
      </header>
    </div>
  );
}

export default App;
