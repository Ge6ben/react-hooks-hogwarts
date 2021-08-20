import React from "react";
import HogChild from "../components/HogChild";
export default function HogsParent({ hogsInfo }) {
  return (
    <div className="ui cards">
      {hogsInfo.map((hog) => (
        <HogChild key={hog.key} hogsInfo={hog} />
      ))}
    </div>
  );
}
