import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { shallow } from "zustand/shallow";
import { useStore } from "../store";
import Task from "./Task";
import "./column.css";

const Column = ({ state }) => {
	const [text, setText] = useState("");
	const [open, setOpen] = useState(false);
	const [drop, setDrop] = useState(false);

	const tasks = useStore((store) => store.tasks.filter((task) => task.state === state), shallow);
	const addTask = useStore((store) => store.addTask);
	const setDraggedTask = useStore((store) => store.setDraggedTask);
	const draggedTask = useStore((store) => store.draggedTask);
	const moveTask = useStore((store) => store.moveTask);

	return (
		<div
			className={classNames("column", { drop: drop })}
			onDragOver={(e) => {
				setDrop(true);
				e.preventDefault();
			}}
			onDragLeave={(e) => {
				setDrop(false);
				e.preventDefault();
			}}
			onDrop={(e) => {
				setDrop(false);
				moveTask(draggedTask, state);
				setDraggedTask(null);
			}}>
			<div className="titleWrapper">
				<p>{state}</p>
				<button onClick={() => setOpen(true)}>Add</button>
			</div>
			{tasks.map((task) => (
				<Task title={task.title} key={task.title} />
			))}
			{open && (
				<div className="Modal">
					<div className="modalContent">
						<input onChange={(e) => setText(e.target.value)} value={text} />
						<button
							onClick={() => {
								addTask(text, state);
								setText("");
								setOpen(false);
							}}>
							Submit
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Column;
