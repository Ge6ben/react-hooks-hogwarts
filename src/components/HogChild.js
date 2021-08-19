import React, { useState } from "react";

export default function HogChild({ hogsInfo }) {
  const [details, setDetails] = useState(false);
  console.log(hogsInfo.name);
  return (
    <div className="card">
      <div className="ui image">
        <img
          src={hogsInfo.image}
          alt={hogsInfo.name}
          style={{ height: "150px" }}
        />
      </div>

      <div className="content">
        <div className="ui header">{hogsInfo.name}</div>
        <button
          className="ui button"
          onClick={() => setDetails((details) => !details)}
        >
          Details{" "}
        </button>
        {details ? (
          <div class="description">
            <div>specialty : {hogsInfo.specialty}</div>
            <div>weight : {hogsInfo.weight}</div>
            <div>greased : {hogsInfo.greased}</div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
