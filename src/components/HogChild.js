import React, { useState } from "react";

export default function HogChild({ hogsInfo }) {
  const [details, setDetails] = useState(false);
//   console.log(details);
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
                  {
                      details ? "Hide Details" :"Show Details"
        }
        </button>
        {details ? (
          <div class="description">
            <div>specialty : {hogsInfo.specialty}</div>
            <div>weight : {hogsInfo.weight}</div>
                      <div>greased : {hogsInfo.greased ? "Greased" : "NonGreased"}</div>
                      <div>highest medal achieved : { hogsInfo['highest medal achieved']}</div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
