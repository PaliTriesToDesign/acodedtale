import { useState, useRef } from "react";
import pop from "./audio/pop.mp3";

function Email({companyName, emailSubject, activeColor, onClick, getUserLevel, count}) {
    
    const [openEmail, setOpenEmail] = useState(false);    
    const handleSetOpenEmail = () => {
        setOpenEmail(true);
    }
    const audioRef = useRef(new Audio(pop));

    const playAudio = () => {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
    };

    const styles = {
        backgroundColor: 'white',
        border: '2px solid black'
    }
    
    return(
        <div className="email-container" onClick={() => {
            playAudio();
            handleSetOpenEmail();
            onClick();
        }}>
            <div className="email-icon" style={styles}>
                { !openEmail && <div className="notification">
                </div> }

                <p>{getUserLevel(count)}</p>
            </div>

            <div className="email-text">
                <h3>{companyName}</h3>
                <p>{emailSubject}</p>
            </div>
        </div>
    )
}

export default Email;