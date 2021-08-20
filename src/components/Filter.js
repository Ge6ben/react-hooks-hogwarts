import React from "react";

export default function Filter({ setGreased, greased, setSortFilter }) {
  return (
    <div>
      <button className="ui button" onClick={() => setGreased(!greased)}>
        {greased ? "Clear Filter By greased" : "Sort By greased"}
      </button>

      <select
        class="ui selection dropdown "
        onChange={(e) => setSortFilter(e.target.value)}
      >
        <option className="ui item" value="weight">
          {" "}
          Sort by weight
        </option>
        <option className="ui item" value="name">
          Sort by name
        </option>
      </select>
      <br />
      <br />
    </div>
  );
}
