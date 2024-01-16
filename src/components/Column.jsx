import React from "react";
import Task from "./Task";
import "./column.css";
import { useStore } from "../store";

const Column = ({ state }) => {
	const tasks = useStore((store) => store.tasks.filter((task) => task.state === state));

	return (
		<div className="column">
			<p>{state}</p>
			<Task title={"Todo"} />
		</div>
	);
};

export default Column;
