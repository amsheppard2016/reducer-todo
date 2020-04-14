export const initialTodoState = {
    todoItems: [
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
            completed: true,
        },
        {
            task: "Do Laundry",
            id: 1528817084344,
            completed: false,
        },
    ],
};

export const todoReducer = (state = initialTodoState, action) => {
    switch (action.type) {
        case "TOGGLE_COMPLETED":
            //console.log("state.todo", state.todoItems);
            return {
                ...state,
                todoItems: state.todoItems.map((item) => {
                    if (item.id === action.payload) {
                        return {
                            ...item,
                            completed: !item.completed,
                        };
                    }
                    return item;
                }),
            };
        case "ADD_TODO":
            return {
                ...state,
                todoItems: [
                    ...state.todoItems,
                    {
                        task: action.payload,
                        id: Math.random(),
                        completed: false,
                    },
                ],
            };
        case "CLEAR_COMPLETED":
            return {
                ...state,
                todoItems: state.todoItems.filter((todoItems) => {
                    return !todoItems.completed;
                }),
            };
        default:
            return state;
    }
};
