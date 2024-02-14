import React, { useState } from "react";
import { items } from "./accodionApi";//variable of array of object
import Myaccodio from "./Myaccodio";
import "./accodion.css";
const Accodion = () => {
  const [item, setItem] = useState(items);

  return (
    <>
      <div className="mainDiv">
        {item.map((cElement) => {
          return (
            <Myaccodio
              que={cElement.Question}
              key={cElement.id}
              ans={cElement.Answers}
            />
          );
        })}
      </div>
    </>
  );
};

export default Accodion;
