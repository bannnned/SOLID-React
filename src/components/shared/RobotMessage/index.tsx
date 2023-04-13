import robotIMG from "../../../assets/robot.png";
import messageIMG from "../../../assets/message.png";

import "./index.scss";

const RobotMessage = ({
  positionX,
  positionY,
  text = "",
  scale = "normal"
}) => {
  return (
    <div className={`robot scale-${scale}`}>
      <img src={robotIMG} alt="robot" className="robot__robot" />
      <div
        className={`robot__message-container container-${positionX}-${positionY}`}
      >
        <img
          src={messageIMG}
          alt="message"
          className={`robot__message ${positionX}-${positionY}`}
        />
        {Array.isArray(text) ? (
          <ul className="robot__message-text">
            {text.map((el) => {
              return <li>{el}</li>;
            })}
          </ul>
        ) : (
          <p className="robot__message-text">{text}</p>
        )}
      </div>
    </div>
  );
};

export { RobotMessage };
