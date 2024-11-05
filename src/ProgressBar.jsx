function ProgressBar({ count, levels, activeColor }) {

    // const progressBarColor = count === 50 ? "hsl(148, 100%, 60%)" : "";
    // const progressBarColor = levels.find(level => count <= level.totalCount)?.color || "black";
    
    return (
        <div className="progress">
            <div className="progress-bar">
                <div 
                    className="progress-inner"
                    style={{width: `${(count / levels[levels.length - 1].totalCount) * 100}%`,
                            backgroundColor: activeColor}}>
                
                </div>
            </div>
            <div className="count">{count}</div>
        </div>
    );
}

export default ProgressBar;
