import { useState, useRef } from "react";
import keySound from "./audio/key-sound.mp3";
import clickSound from "./audio/click-ui.mp3";

function Carousel({ 
    username, 
    setUsername, 
    setLastItemSelected }) {

    const key = useRef(new Audio(keySound));
    const click = useRef(new Audio(clickSound));

    const playAudio = (audio) => {
        audio.current.currentTime = 0;
        audio.current.play();
    };
    
    const handleSetUsername = (e) => {
            setUsername(e.target.value)
      }
    
    const carouselPhrases = [
        <div className="user-name-container">
            <p>What's your name?</p> 

            <div className="user-input-container">
                <input 
                    className="user-name-input" 
                    type="text" 
                    placeholder="Type your name"
                    onChange={(e) => {
                        handleSetUsername(e);
                        playAudio(key);
                    }}
                />
            </div>
        </div>,
        `Hi, ${username}. Job hunting can feel like an uphill battle, can't it?`,
        "This project is a playful yet personal take on the journey so many of us go through.",
        "Let’s see how far you can make it. Will you reach the top? Or hit the job search fatigue wall first?"
    ];
    const [selectedPhrase, setSelectedPhrase] = useState(0);

    const handleSelectedPhrase = (index) => {
        setSelectedPhrase(index);

        if (index === carouselPhrases.length - 1) {
            handleSetLastItemSelected();
        }
    };

    const handleSetLastItemSelected = () => {
        setLastItemSelected(true);
    };

    return (
        <div className={`carousel-container`}>
            <div className="carousel-inner-container">
                <div className="carousel-phrase">                 
                    {carouselPhrases[selectedPhrase]}
                </div>

                <div className={`carousel-circles ${username ? 'slide-in' : ''}`}>
                    {carouselPhrases.map((_, index) => (
                        <div
                            className={`carousel-circle ${index === selectedPhrase ? 'active' : ''}`}
                            key={index}
                            onClick={() => {
                                username && handleSelectedPhrase(index);
                                playAudio(click);
                            }}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Carousel;
