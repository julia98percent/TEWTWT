import React, { useState } from "react";
import Picker from "emoji-picker-react";

function Modal() {
  const App = () => {
    const [chosenEmoji, setChosenEmoji] = useState(null);

    const onEmojiClick = (event, emojiObject) => {
      setChosenEmoji(emojiObject);
    };

    return (
      <div>
        {chosenEmoji ? (
          <span id="content">{chosenEmoji.emoji}</span>
        ) : (
          <span></span>
        )}
        <Picker
          disableSkinTonePicker="false"
          onEmojiClick={onEmojiClick}
          pickerStyle={
            {
              // zIndex: "221",
              // margin: "120px",
              // width: "50%",
            }
          }
        />
      </div>
    );
  };

  return (
    <>
      <div className="dimmer">
        <div className="modalContainer" onClick={(e) => e.stopPropagation()}>
          <div className="wrapper">
            <App />
          </div>
        </div>
      </div>
    </>
  );
}
export default Modal;
