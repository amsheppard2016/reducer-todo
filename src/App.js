import React from "react";
//import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import "./components/Todo.css";

function App() {
    return (
        <div className="app">
            <div className="header">
                <h1>To Do App!</h1>
            </div>
            <TodoList />
        </div>
    );
}
export default App;
