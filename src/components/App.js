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

	const showingCard = hogsInfo
		.filter((hog) => {
			if (!greased) return hog;
			return hog.greased === true;
		});
	  
	showingCard.sort((a, b) => {
		console.log(a,b)
      if (sortFilter === "weight") return a.weight - b.weight;
      return a.name.localeCompare(b.name);
	});
	
	// console.log(hogsInfo);
	// console.log(showingCard);

  function addNewHog(newHog) {
    setHogsInfo([...showingCard, newHog]);
  }
  return (
    <div className="App">
      <Nav />
      <AddingNewHog onSubmit={addNewHog} />
      <Filter
        setGreased={setGreased}
        greased={greased}
        sortFilter={sortFilter}
        setSortFilter={setSortFilter}
      />
      <HogsParent hogsInfo={showingCard} />
    </div>
  );
}

export default App;
