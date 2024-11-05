import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons'; // Solid icons
import { useRef } from "react";
import levelUp from "./audio/level-up2.mp3";

function LevelUp({ 
    count, 
    username, 
    handleSetShowModal, 
    activeColor,
    getUserLevel }) {

    const levelMessages = [
        // Level 0: 5 applications
        "Some people say the more you apply, the better your chances of landing a job. Others say you should be selective and take time with each application. What's your strategy?",
      
        // Level 1: 25 applications
        "25 applications? Wow, you're really getting into the swing of things. So, have any of them even opened your resume yet? Don't worry, you'll hear back...eventually.",
      
        // Level 2: 50 applications
        "50 applications in and still waiting, huh? At this rate, you're collecting 'thanks, but no thanks' emails like it's a hobby. Keep up the hustle!",
      
        // Level 3: 100 applications
        "100 applications! That’s like sending your resume into a black hole 100 times. Maybe the universe is testing your patience. Or maybe... the job market’s broken. But hey, you're halfway to 200!",
      
        // Level 4: 200 applications
        "200 applications? You’ve officially applied to more jobs than anyone should ever have to. The good news? You're a seasoned pro at rejection. The bad news? They’re still ghosting you.",
      
        // Level 5: 500 applications
        "500 applications? You’ve ascended to the final level: Job Hunt Purgatory. At this point, you’ve applied to every company, startup, and maybe even a few fictional ones. Don’t lose hope—someone out there has to respond eventually...right?"
    ];

    const audioRef = useRef(new Audio(levelUp));
    const playAudio = () => {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
    }

    playAudio();

    return(
        <div className="level-up-modal" >

            <div className="modal-container">
                
                <div className="modal"
                    onClick={e => e.stopPropagation()}>
                    <div 
                        className="close-button"
                        onClick={() => handleSetShowModal(false)}
                    >
                        <FontAwesomeIcon icon={faClose} size='xl'/>
                    </div>

                    <div className="modal-inner-container">
                        <div className="modal-inner">
                            <h1>Congrats, {username}!</h1>
                            <p>{levelMessages[getUserLevel(count)]}</p>
                        </div>
                    </div>
                </div>
                
                <div className="modal-top-container">
                    <div className="modal level" style={{backgroundColor: activeColor}}>
                        <p>Level:</p>
                        <h2>{getUserLevel(count)}</h2>
                    </div>
                    <div className="modal modal-count">
                        <p>Applied:</p>
                        <h2>{count}</h2>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default LevelUp;