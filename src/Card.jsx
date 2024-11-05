import ProgressBar from "./ProgressBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReply, faEllipsisV, faUser } from '@fortawesome/free-solid-svg-icons'; // Solid icons

function Card({ start, count, username, selectedEmail, levels, activeColor }) {
    return (
        <div className={`card ${!start ? 'disabled' : ''}`}>
            <ProgressBar count={count} levels={levels} activeColor={activeColor}/>

            {/* Handle all the conditional logic together */}
            {!start && count === 0 ? (
                <div className="card-text">
                    <p>You have not <strong>started</strong> the game.</p>
                </div>
            ) : start && count > 0 && !selectedEmail ? (
                <div className="card-text">
                    <p><strong>Open</strong> an email.</p>
                </div>
            ) : start && count > 0 && selectedEmail ? (
                <div className="card-text full-email">
                    <div className="open-email">

                        <div className="company-info">
                            <div className="user">
                                <FontAwesomeIcon icon={faUser}/>
                            </div>

                            <div className="info-inner">
                                <p>{selectedEmail.companyName}</p>
                                <p>{`<hiring@${selectedEmail.companyName.replace(/[.\s]/g, '').toLowerCase()}.com>`}</p>
                            </div>
                        </div>

                        <div className="reply-icons">
                            <FontAwesomeIcon icon={faReply}/>
                            <FontAwesomeIcon icon={faEllipsisV}/>
                        </div>
                    </div>

                    <div className="email-body">
                        <h2>{selectedEmail.emailTitle}</h2>
                        <p>{selectedEmail.emailBody}</p>
                    </div>
                </div>
            ) : (
                <div className="card-text">
                    <p>You have not <strong>applied</strong> to any job.</p>
                </div>
            )}
        </div>
    );
}

export default Card;
