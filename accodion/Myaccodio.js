import React, { useState } from "react";

const Myaccodio = (props) => {
  const [show, setShow] = useState(false);

  return (
    
    <div className="set">
      <div className="que">
        <h1>
          <span
            onClick={() => {
              setShow(!show);
            }}
          >
            +
          </span>
          {props.que}
        </h1>
      </div>

      {show && ( // show true hoga toh ye dikhao nhi toh kuch mttt kro
        <div className="ans">
          <p>{props.ans}</p>
        </div>
      )}
    </div>
  );
};
export default Myaccodio;
