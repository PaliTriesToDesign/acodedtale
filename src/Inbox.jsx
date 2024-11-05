import Button from "./Button";
import Carousel from "./Carousel";
import EmailList from "./EmailList";

function Inbox({start, setStart, username, setUsername, count, setCount, lastItemSelected, setLastItemSelected, setSelectedEmail, levels, activeColor, setShowModal, handleSetShowModal, getUserLevel}) {

    const buttonText = start ? "Apply" : "Start";

    const handleSelectEmail = (email) => {
        setSelectedEmail(email);
    }
    
    return(
        <div className="inbox-container">
            
            {!start && <Carousel 
                            username={username}
                            setUsername={setUsername}
                            lastItemSelected={lastItemSelected}
                            setLastItemSelected={setLastItemSelected}
                        />}

            {start && <EmailList 
                        count={count} 
                        username={username}
                        onEmailClick={setSelectedEmail}
                        activeColor={activeColor}
                        getUserLevel={getUserLevel}
                        />}
            
            <Button
                className={`inbox-button ${lastItemSelected ? 'slide-in' : ''} ${start ? 'apply' : ''}`}   
                buttonText={buttonText} 
                start={start} 
                setStart={setStart} 
                count={count}
                setCount={setCount}
                levels={levels}
                activeColor={activeColor}
                setShowModal={setShowModal}
                handleSetShowModal={handleSetShowModal}
            />

        </div>
    )
}

export default Inbox;