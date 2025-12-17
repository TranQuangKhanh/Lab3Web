import React from "react";

export default function Panel({ title, isActive, onShow, children }) {
  return (
    <div className={`panel ${isActive ? "active" : ""}`}>
      <h4>{title}</h4>
      {isActive ? (
        <div className="panel-body">
          {children}
          <button onClick={onShow}>Close</button>
        </div>
      ) : (
        <button onClick={onShow}>Show</button>
      )}
    </div>
  );
}
