import React, { useState } from "react";
import Nav from "./Nav";
import HogsParent from "../components/HogsParent";
import hogs from "../porkers_data";
import Filter from "../components/Filter";
import AddingNewHog from "./AddingNewHog";

function App() {
  const [hogsInfo, setHogsInfo] = useState(hogs);
  const [greased, setGreased] = useState(false);
  // true for sort by weight  | false for sort by name
  const [sortFilter, setSortFilter] = useState("name");
  const showHogs = hogsInfo.filter((hog) => {
    if (!greased) return hog;
    return hog.greased === true;
  });

  showHogs.sort((a, b) => {
    if (sortFilter === "weight") return a.weight - b.weight;
    return a.name.localeCompare(b.name);
  });

  function onSubmit(addNewHog) {
    setHogsInfo([...showHogs, addNewHog]);
  }

  return (
    <div className="App">
      <Nav />
      <AddingNewHog onSubmit={onSubmit} />
      <Filter
        setGreased={setGreased}
        greased={greased}
        setSortFilter={setSortFilter}
      />
      <HogsParent hogsInfo={showHogs} />
    </div>
  );
}

export default App;
