import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [color, setColor] = useState("yellow");

	return (
		<div className="luzDeTrafico">
			<div
				onClick={() => setColor("red")}
				className={
					"light red" + (color === "red" ? " glow" : "")
				}></div>
			<div
				onClick={() => setColor("yellow")}
				className={
					"light yellow" + (color === "yellow" ? " glow" : "")
				}></div>
			<div
				onClick={() => setColor("green")}
				className={
					"light green" + (color === "green" ? " glow" : "")
				}></div>
		</div>
	);
};

export default Home;
