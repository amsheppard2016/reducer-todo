import React, { useState } from "react";

const TodoForm = (props) => {
    const [itemTask, setItemTask] = useState({
        itemTask: "",
    });

    const handleChanges = (e) => {
        setItemTask({ ...itemTask, itemTask: e.target.value });
    };

    const handleAddItem = (e) => {
        e.preventDefault();
        props.addItem(itemTask);
        setItemTask({ itemTask: "" });
    };

    return (
        <form onSubmit={handleAddItem}>
            <input
                type="text"
                name="item"
                value={itemTask}
                onChange={handleChanges}
            />
            <button>Add</button>
        </form>
    );
};
export default TodoForm;
