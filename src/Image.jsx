import paperResume from "./assets/paperResume.png";
import rainCloud from "./assets/rainCloud.png";

function Image({positionX, positionY, rotation}) {

    const illustrations = [paperResume, rainCloud];
    const randIllustration = Math.floor(Math.random() * illustrations.length);    

    const style = {
        position: "absolute",
        left: positionX,
        top: positionY,
        transform: `rotate(${rotation}deg)`,
    };

    return (
        <div className="image-component" style={style}>
            <img src={illustrations[randIllustration]} alt="Image" />
        </div>
    );
}

export default Image;
