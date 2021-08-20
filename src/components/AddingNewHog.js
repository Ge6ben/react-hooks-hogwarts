import React from "react";
export default function AddingNewHog({ onSubmit }) {
  const [state, setState] = React.useState({
    name: "",
    specialty: "",
    greased: false,
    weight: "",
    "highest medal achieved": "",
    image: "",
  });

  function handleChange(e) {
    let value = e.target.value;
    const key = e.target.name;
    if (key === "greased") value = Boolean(value);
    setState({
      ...state,
      [key]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(state);
    setState({
      name: "",
      specialty: "",
      greased: false,
      weight: "",
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
          name="name"
          onChange={handleChange}
          value={state.name}
        />
      </div>

      <div className="field inline">
        <input
          placeholder="Write specialty"
          name="specialty"
          value={state.specialty}
          onChange={handleChange}
        />
      </div>

      <div className="field inline">
        <input
          placeholder="Write weight"
          name="weight"
          value={state.weight}
          onChange={handleChange}
        />
      </div>

      <div className="field inline">
        <input
          placeholder="Write highest medal achieved"
          name="highest medal achieved"
          onChange={handleChange}
          value={state["highest medal achieved"]}
        />
      </div>

      <div className="field inline">
        <input
          placeholder="Write imgUrl"
          name="image"
          value={state.image}
          onChange={handleChange}
        />
      </div>

      <div className="field inline">
        <label> Greased</label>

        <input
          type="checkbox"
          class="ui checkbox"
          name="greased"
          value={state.greased}
          onChange={handleChange}
        />
      </div>

      <div class="field inline">
        <button className="ui button" type="submit" onClick={handleSubmit}>
          Add New Hog
        </button>
      </div>

      <hr />
    </form>
  );
}
