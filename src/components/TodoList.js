import React, { useState, useReducer } from "react";
import { todoReducer, initialTodoState } from "../reducers/todoReducer";

const TodoList = () => {
    const [todoState, dispatch] = useReducer(todoReducer, initialTodoState);
    //console.log("todoState", todoState);
    // const [todoItems, setTodoItems] = useState([]);
    const [task, setTask] = useState("");

    const handleChanges = (e) => {
        setTask(e.target.value);
    };
    return (
        <div className="to-do-list">
            <form>
                <input
                    type="text"
                    name="newTask"
                    value={task}
                    onChange={handleChanges}
                />
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        dispatch({ type: "ADD_TODO", payload: task });
                    }}
                >
                    Add
                </button>
            </form>
            <div className="todo-list">
                {todoState.todoItems.map((item) => {
                    //console.log("item", item);
                    return (
                        <div
                            key={item.id}
                            className={`item${
                                item.completed ? " completed" : ""
                            }`}
                            onClick={(e) =>
                                dispatch({
                                    type: "TOGGLE_COMPLETED",
                                    payload: item.id,
                                })
                            }
                        >
                            <p>{item.task}</p>
                        </div>
                    );
                })}
                <button
                    className="clear-btn"
                    onClick={() => dispatch({ type: "CLEAR_COMPLETED" })}
                >
                    Clear Completed
                </button>
            </div>
        </div>
    );
};

export default TodoList;
