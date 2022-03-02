import React, { useState } from "react";
import PropTypes, { element } from "prop-types";

//create your first component
const Home = () => {
	const [list, setList] = useState(["eat", "sleep"]);
	const [element, setElement] = useState("");

	return (
		<div className="container py-4">
			<div className="row text-center">
				<h1>{"todos"}</h1>
			</div>
			<input
				className="form-control px-4"
				type={"text"}
				placeholder="What needs to be done?"
				value={element}
				onChange={(e) => {
					setElement(e.target.value);
				}}
				onKeyDown={(e) => {
					if (e.key === "Enter") {
						console.log("enter fue presionado");
						setList((currentList) => [...currentList, element]);
						setElement("");
					}
				}}></input>
			<ul>
				{list.map((element, index) => {
					return (
						<li key={index}>
							{element}
							<span
								className="close"
								onClick={(e) => {
									setList(
										list.filter((task, i) => {
											if (index == i) {
												return false;
											} else {
												return true;
											}
										})
									);
								}}>
								x
							</span>
						</li>
					);
				})}
			</ul>
			<div className="counter">
				{list.length == 0
					? "No tasks, add a task"
					: list.length + " item left"}
			</div>
			<div className="bottom-page-1"></div>
			<div className="bottom-page-2"></div>
		</div>
	);
};
export default Home;
