import { useState, useRef } from "react"
import StatusBar from "./StatusBar"
import Card from "./Card"
import Inbox from "./Inbox"
import LevelUp from "./LevelUp";
import pianoSound from "./audio/piano.mp3";

function App() {

  const piano = useRef(new Audio(pianoSound));

  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);
  const [username, setUsername] = useState('');
  const [lastItemSelected, setLastItemSelected] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState(null);

  const hue = 240;
  const hueOffset = 40;
  const s = 100;
  const l = 70;
  const levels = [{
    level: 0,
    totalCount: 5,
    color: `hsl(${hue + (hueOffset * 0)}, ${s}%, ${l}%)`
  },{
    level: 1,
    totalCount: 25,
    color: `hsl(${hue + (hueOffset * 1)}, ${s}%, ${l}%)`
  }, {
    level: 2,
    totalCount: 50,
    color: `hsl(${hue + (hueOffset * 2)}, ${s}%, ${l}%)`
  },{
    level: 3,
    totalCount: 100,
    color: `hsl(${hue + (hueOffset * 3)}, ${s}%, ${l}%)`
  },{
    level: 4,
    totalCount: 200,
    color: `hsl(${hue + (hueOffset * 4)}, ${s}%, ${l}%)`
  },{
    level: 5,
    totalCount: 500,
    color: `hsl(${hue + (hueOffset * 5)}, ${s}%, ${l}%)`
  }];

  const getUserLevel = (count) => {
    if (count >= 500) {
        return 5;
    } else if (count >= 200) {
        return 4;
    } else if (count >= 100) {
        return 3;
    } else if (count >= 50) {
        return 2;
    } else if (count >= 25) {
        return 1;
    } else if (count >= 5) {
        return 0;
    } else if (count < 5) {
      return '-'
    }
}

  const activeColor = levels.find((level) => count < level.totalCount)?.color || "black";
  // const activeColor = `hsl(${count * 10}, 80%, 60%)`

  const [showModal, setShowModal] = useState(false);

  const props = { 
    start,
    setStart,
    username,
    setUsername,
    count,
    setCount,
    lastItemSelected,
    setLastItemSelected,
    selectedEmail,
    setSelectedEmail,
    levels,
    activeColor,
    showModal,
    setShowModal,
    getUserLevel
  }

  const handleSetShowModal = (boolean) => {
    setShowModal(boolean)
  }

  const playAudio = (audio) => {
    audio.current.volume = 0.2;
    audio.current.loop = true;
    audio.current.play();
  }

  playAudio(piano);

  return (
    <>    
      <div className="card-container">
        <StatusBar start={start}/>


        <div className="card-inner-container">
          <Inbox {...props}
            handleSetShowModal={handleSetShowModal}
          />
          <Card {...props} />
        </div>
        
      </div>

      {levels.map((level, index) => (
        count === level.totalCount && showModal && (
            <LevelUp 
              key={index}
              handleSetShowModal={handleSetShowModal} 
              count={count}
              username={username}
              activeColor={activeColor}
              getUserLevel={getUserLevel}
            /> 
          )
      ))}
    </>
  )
}

export default App
