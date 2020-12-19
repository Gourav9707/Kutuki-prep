import React, { useState, useEffect } from "react";
import "../App.css";

export default function Sidebar({ width, height, xPos, children }) {

  return (
    <>
      <div
        className="sidebar"
        style={{
          width: width,
          height: height,
          transform: `translate(${xPos}px)`
        }}
      >
        <div className="child">{children}</div>
      </div>
    </>
  );
}
