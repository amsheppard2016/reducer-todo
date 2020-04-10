import React, { useState } from "react";

const TodoForm = (props) => {
    const [task, setTask] = useState({
        itemTask: "",
    });

    const handleChanges = (e) => {
        setTask({ itemTask: e.target.value });
    };

    const handleAddItem = (e) => {
        e.preventDefault();
        props.addItem(task.itemTask);
        setTask({ itemTask: "" });
    };

    return (
        <form onSubmit={handleAddItem}>
            <input
                type="text"
                name="item"
                value={task.itemTask}
                onChange={handleChanges}
            />
            <button>Add</button>
        </form>
    );
};
export default TodoForm;
