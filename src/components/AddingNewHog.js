import React, { useState } from "react";

export default function AddingNewHog({ onSubmit }) {
  const [state, setState] = React.useState({
    name: "",
    specialty: "",
    greased: "",
    weight: "",
    "highest medal achieved": "",
    image: "",
  });

  function handleChange(e) {
    let value = e.target.value;
    const key = e.target.name;
    if (key === "greased") {
      value = Boolean(value);
    }
    setState({
      ...state,
      [key]: value,
    });
    console.log(e.target.value);
  }

  console.log(state);

  function handleClick(e) {
    e.preventDefault();
    onSubmit(state);
    setState({
      name: "",
      specialty: "",
      greased: false,
      weight: 0,
      "highest medal achieved": "",
      image: "",
    });
  }

  return (
    <form className="ui form inline ">
      <h1> Add new Card</h1>

      <div className="field inline">
        <input
          placeholder="Write name"
          value={state.name}
          onChange={handleChange}
          name="name"
        />
      </div>

      <div className="field inline">
        <input
          placeholder="Write specialty"
          value={state.specialty}
          onChange={handleChange}
          name="specialty"
        />
      </div>

      <div className="field inline">
        <input
          placeholder="Write weight"
          value={state.weight}
          onChange={handleChange}
          name="weight"
        />
      </div>

      <div className="field inline">
        <input
          placeholder="Write highest medal achieved"
          value={state["highest medal achieved"]}
          onChange={handleChange}
          name="highest medal achieved"
        />
      </div>

      <div className="field inline">
        <input
          placeholder="Write imgUrl"
          value={state.image}
          onChange={handleChange}
          name="image"
        />
      </div>

      <label> Greased</label>
      <div className="field inline">
        <input
          type="checkbox"
          class="ui checkbox"
          value={state.greased}
          onChange={handleChange}
          name="greased"
        />
        {/* <option className="item"  value="yes">Yes</option>
          <option className="item"  value="">No</option> */}
        {/* </input> */}
      </div>

      <div class="field inline">
        <button className="ui button" type="submit" onClick={handleClick}>
          Add New Hog
        </button>
      </div>

      <br />
    </form>
  );
}
// name:
//     specialty:,
//     greased: ,
//     weight: ,
//     "highest medal achieved": ,
//     image:

{
  /* <div class="field">
<div class="ui radio checkbox">
  <input
    type="radio"
    name="example2"
    value={state.greased}
    onChange={handleChange}
  />
  <label>Yes</label>
</div>
</div> */
}
{
  /* <div class="field">
<div class="ui radio checkbox">
  <input
    type="radio"
    name="example2"
    value={state.greased}
    onChange={handleChange}
  />
</div>
  </div> */
}
