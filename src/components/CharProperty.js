import React from "react";

const CharProperty = props => {
  let { label, value } = props.char;
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="char-label col-4">
          <span className="">{label}</span>
        </div>
        <div className="char-value col-8">
          <span className="">{value}</span>
        </div>
      </div>
    </li>
  );
};
export default CharProperty;
