import React , {useState} from "react";
import Nav from "./Nav";
import HogsParent from "../components/HogsParent"
import hogs from "../porkers_data";

function App() {

	const [hogsInfo, setHogsInfo] = useState(hogs)
	console.log(hogsInfo)
	return (
		<div className="App">
			<Nav />
			<HogsParent hogsInfo={hogsInfo} />
		</div>
	);
}

export default App;
