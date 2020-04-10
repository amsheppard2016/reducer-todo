import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import "./components/Todo.css";

function App() {
    const [todoItems, setTodoItems] = useState([
        {
            task: "Organize Garage",
            id: 1528817077241,
            completed: false,
        },
        {
            task: "Bake Cookies",
            id: 1528817084342,
            completed: false,
        },
        {
            task: "Cook Dinner",
            id: 1528817084343,
            completed: false,
        },
        {
            task: "Do Laundry",
            id: 1528817084344,
            completed: false,
        },
    ]);

    const toggleCompleted = (itemId) => {
        console.log("itemId", itemId);
        setTodoItems(
            todoItems.map((item) => {
                if (item.id === itemId) {
                    return {
                        ...item,
                        completed: !item.completed,
                    };
                }
                return item;
            })
        );
    };

    const addItem = (itemTask) => {
        setTodoItems(todoItems, {
            task: itemTask,
            completed: false,
            id: Math.random(),
        });
    };

    const clearCompleted = () => {
        console.log("clearCompleted");
        setTodoItems(
            todoItems.filter((item) => {
                return !item.completed;
            })
        );
    };

    return (
        <div className="app">
            <div className="header">
                <h1>To Do App!</h1>
                <TodoForm addItem={addItem} />
            </div>
            <TodoList
                todoItems={todoItems}
                toggleCompleted={toggleCompleted}
                clearCompleted={clearCompleted}
            />
        </div>
    );
}
export default App;
