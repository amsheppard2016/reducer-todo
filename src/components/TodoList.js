import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
    console.log("todolist", props);
    return (
        <div className="todo-list">
            {props.todoItems.map((item) => (
                <Todo
                    key={item.id}
                    item={item}
                    toggleCompleted={props.toggleCompleted}
                />
            ))}
            <button className="clear-btn" onClick={props.clearCompleted}>
                Clear Completed
            </button>
        </div>
    );
};

export default TodoList;