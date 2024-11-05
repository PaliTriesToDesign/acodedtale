import ReactDOM from "react-dom";
import { useState, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from "./Image";
import clickSound from "./audio/click-ui.mp3";

function Button({ 
    count, 
    setCount, 
    start, 
    setStart,
    buttonText, 
    className, 
    levels, 
    activeColor, 
    handleSetShowModal, 
    icon,
    showText = true,
    showIcon = false }) {

    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [components, setComponents] = useState([]);
    const audioRef = useRef(new Audio(clickSound));

    const handleSetIsHovered = () => {
        setIsHovered(!isHovered);
    }

    const handleSetIsClicked = () => {
        setIsClicked(!isClicked);

        setTimeout(() => setIsClicked(false), 200); // 200ms matches the animation duration
    }

    const handleImage = () => {        
        const randomX = Math.floor(Math.random() * window.innerWidth);
        const randomY = Math.floor(Math.random() * window.innerHeight);
        const randomRotation = Math.floor(Math.random() * 360);
        
        // Only increment if count is less than 50
        if (count < levels[levels.length - 1].totalCount) {        
            setComponents(prevComponents => {
                const newComponents = [
                    ...prevComponents,
                    <Image 
                        key={prevComponents.length} 
                        positionX={randomX}
                        positionY={randomY}
                        rotation={randomRotation}
                    />
                ];
                
                return newComponents;

            });
        }
    };

    const handleSetStart = () => {
        setStart(true);
    }

    const handleSetCount = () => {
        setCount(prevCount => prevCount + 1);
    }

    const playAudio = () => {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
    };

    const buttonStyles = {
        backgroundColor: start ? activeColor : '',
        opacity: isHovered ? '0.9' : '',
        animation: isClicked ? 'buttonClick 200ms var(--bouncy)' : ''
    }

    return (
        <>
            <button
                style={buttonStyles}
                className={className}
                onMouseEnter={handleSetIsHovered}
                onMouseLeave={handleSetIsHovered}
                
                onClick={() => {
                    playAudio();
                    handleSetIsClicked();

                    if(!icon) {
                        if(!start) {
                            handleSetStart();
                        }
    
                        if(start && count < levels[levels.length - 1].totalCount) {
                            handleSetCount();
                        }
    
                        if(start && count < 150) {
                            handleImage();
                        }
    
                        handleSetShowModal(true);
                    }                    
            }}>
                {showIcon && <FontAwesomeIcon icon={icon}/>}
                {showText && buttonText}
            </button>

            {/* Render each component in the document body using portals */}
            {components.map((component, index) => 
                ReactDOM.createPortal(
                    component,
                    document.getElementById("root") // Append directly to the body element
                )
            )}
        </>
    );
}

export default Button;