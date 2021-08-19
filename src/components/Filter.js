import React  from "react";

export default function Filter({ setGreased, greased  , sortFilter, setSortFilter}) {
	function handleSelect(e) {
		setSortFilter(e.target.value);
	}
	console.log(sortFilter)
	return (
    <div >
      <button className="ui button" onClick={() => setGreased(!greased)}>
        {" "}
        {greased ? "Clear Filter" : "Filter by greased"}
      </button>

      <select class="ui selection dropdown"  onChange={(e)=>setSortFilter(e.target.value)}>
        <option className="item">weight</option>
        <option className="item">name</option>
      </select>
      <br />
      <br />
    </div>
  );
}
