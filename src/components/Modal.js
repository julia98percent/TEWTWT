import React from "react";

function Modal() {
  return (
    <>
      <button className="dimmer">
        <div className="modalContainer" onClick={(e) => e.stopPropagation()}>
          <div className="wrapper">냐~</div>
        </div>
      </button>
    </>
  );
}
export default Modal;
