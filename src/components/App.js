import React, { useState } from "react";
import Nav from "./Nav";
import HogsParent from "../components/HogsParent";
import hogs from "../porkers_data";

function App() {
  const [hogsInfo, setHogsInfo] = useState(hogs);
  const [greased, setGreased] = useState(false);

  const fillterGreased = hogsInfo.filter((hog) => {
    if (!greased) return hog;
    return hog.greased === true;
  });

  console.log(fillterGreased);
  return (
    <div className="App">
      <Nav setGreased={setGreased} greased={greased} />
      <HogsParent hogsInfo={fillterGreased} />
    </div>
  );
}

export default App;
