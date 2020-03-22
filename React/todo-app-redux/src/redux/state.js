import { createStore, combineReducers} from "redux";

let todosState = {
    todo: {
        title: "Title",
        date: "2020-03-01",
        time: "00:00",
        status: "Incomplete"
    },
    todos: [
        {
            title: "First",
            date: "2020-03-16",
            time: "12:05",
            status: "Completed"
        },
        {
            title: "Second",
            date: "2020-03-16",
            time: "12:10",
            status: "Incomplete"
        },
        {
            title: "Third",
            date: "2020-03-16",
            time: "12:15",
            status: "Completed"
        },
        {
            title: "Fourth",
            date: "2020-03-16",
            time: "12:20",
            status: "Incomplete"
        },
    ],
    todosCopy: undefined,
    selectStatus: "All",
    edit: false,
    editIndex: ""
}

function todosReducer(state = todosState, action) {
    let stateCopy = JSON.parse(JSON.stringify(state));
    console.log("Actions here", action);
    console.log("state here", state);
    switch(action.type) {
        case "setTitle":
        stateCopy.todo.title = action.payload;
        return stateCopy;

        case "setDate":
        stateCopy.todo.date = action.payload;
        return stateCopy;

        case "setTime":
        stateCopy.todo.time = action.payload;
        return stateCopy;

        case "setStatus":
        stateCopy.todo.status = action.payload;
        return stateCopy;

        case "editTodo":
        console.log("Edit Index => " + action.payload);
        stateCopy.edit = true;
        stateCopy.editIndex = action.payload;
        let indexE = stateCopy.editIndex;
        stateCopy.todo.title = stateCopy.todos[indexE].title;
        stateCopy.todo.date = stateCopy.todos[indexE].date;
        stateCopy.todo.time = stateCopy.todos[indexE].time;
        stateCopy.todo.status = stateCopy.todos[indexE].status
        return stateCopy

        case "deleteTodo":
        console.log("Delete Index => "+ action.payload);
        let index = action.payload;
        stateCopy.todos.splice(index, 1);
        return stateCopy

        case "addTodos":
        let indexA = stateCopy.editIndex;
        if(stateCopy.edit === false){
            let todo = {}
            todo.title = stateCopy.todo.title;
            todo.date = stateCopy.todo.date;
            todo.time = stateCopy.todo.time;
            todo.status = stateCopy.todo.status
            stateCopy.todos.push(todo);
        } else if (stateCopy.edit === true){
            stateCopy.todos[indexA] = stateCopy.todo
            console.log("Update todo => "+stateCopy.todo);
        }
        stateCopy.edit = false;
        stateCopy.todosCopy = stateCopy.todos;
        return stateCopy

        case "Filter":
        let filteredTodos= [];
        stateCopy.selectStatus = action.payload;
        console.log("Type of filteredTodos => "+ (stateCopy.filteredTodos))
        if(stateCopy.todosCopy === undefined) {
            stateCopy.todosCopy = stateCopy.todos;
        } else {
            stateCopy.todos = stateCopy.todosCopy;
        }
            
        for (let i = 0; i < stateCopy.todos.length; i++){
            if(stateCopy.todos[i].status === stateCopy.selectStatus){
                filteredTodos.push(stateCopy.todos[i])
            } else if( stateCopy.selectStatus === "All"){
                filteredTodos = stateCopy.todosCopy;
            }
        }
        stateCopy.todos = filteredTodos
        return stateCopy

        default:
        return stateCopy
    }
    // return state;
}

const rootReducers = combineReducers({
    todos: todosReducer
});

const store = createStore(rootReducers);

export default store;