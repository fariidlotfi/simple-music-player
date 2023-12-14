import "./App.css";
import { useEffect, useState } from "react";
import { CiPlay1, CiPause1, CiVolume, CiVolumeHigh } from "react-icons/ci";
import PlayerCard from "./Components/Music Playe Card/PlayerCard";
import Equalizer from "./Components/Equalizer/Equalizer.jsx";

const App = () => {
  const [audio] = useState(
    new Audio("src/assets/Eagles - Hotel California (320).mp3")
  );

  const [isPlaying, setIsPlaying] = useState(false);
  const max = 20;
  const [current, setCurrent] = useState();
  const [duration, setDuration] = useState();

  useEffect(() => setDuration(audio.duration), [audio]);

  const handlePlay = () => {
    setIsPlaying(true);
    audio.play();
  };

  const handlePause = () => {
    setIsPlaying(false);
    audio.pause();
  };

  setInterval(() => {
    setCurrent(audio.currentTime);
  });

  return (
    <div className="container">
      <PlayerCard>
        {isPlaying && <Equalizer />}
        <p>Eagles - Hotel California</p>
        <input
          type="range"
          value={current}
          min={0}
          max={duration ? duration : 100}
          onChange={(e) => {
            audio.currentTime = e.target.value;
            setDuration(audio.duration);
          }}
        />
        {isPlaying ? (
          <button className="button-style" onClick={handlePause}>
            <CiPause1 />
          </button>
        ) : (
          <button className="button-style" onClick={handlePlay}>
            <CiPlay1 />
          </button>
        )}
        <div className="volume-area">
          <CiVolume />

          <input
            type="range"
            min={0.0}
            max={max}
            onChange={(e) => {
              audio.volume = e.target.value / max;
            }}
          />

          <CiVolumeHigh />
        </div>
      </PlayerCard>
    </div>
  );
};

export default App;
