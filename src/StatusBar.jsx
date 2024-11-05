import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignal, faWifi, faBattery2 } from '@fortawesome/free-solid-svg-icons'; // Solid icons


function StatusBar({ start }) {
    const currentTime = new Date();
    const hours = String(currentTime.getHours()).padStart(2, '0');
    const minutes = String(currentTime.getMinutes()).padStart(2, '0');
    
    return(
        <div className={`status-bar ${start ? 'slide-in' : ''}`}>
            
            <div className="time">
                {`${hours}:${minutes}`}
            </div>

            <div className="icons">
                <FontAwesomeIcon icon={faSignal} />
                <FontAwesomeIcon icon={faWifi} />
                <FontAwesomeIcon icon={faBattery2} />
            </div>
            
        </div>
    )
}

export default StatusBar;