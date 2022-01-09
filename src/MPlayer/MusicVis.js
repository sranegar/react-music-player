import React, { useState, useEffect, useRef } from "react";

export default function MusicVis(props) {
  return (
    <div>
      <svg>
        <circle r={props.size} cx="100" cy="100" fill="#f7d45e" />

        <circle
          r={props.progress * props.size}
          cx="100"
          cy="100"
          fill="#c15ef7"
        />
      </svg>
    </div>
  );
}
