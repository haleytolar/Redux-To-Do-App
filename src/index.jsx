import { createRoot } from "react-dom/client";
import MainView from "./components/main-view/main-view";
import { createStore } from "redux";
import todos from "./reducers";
import { addTodo, toggleTodo, editTodo, deleteTodo } from "./actions";
import "./index.scss";

const store = createStore(todos);
//Log initial state
console.log("Initial State", store.getState());

store.dispatch(addTodo("Dispatch my first action"));
console.log("State after adding 1st todo", store.getState());

store.dispatch(addTodo("Buy coffee"));
console.log("State after adding 2nd todo", store.getState());

store.dispatch(addTodo("Take a walk"));
console.log("State after adding 3rd todo", store.getState());

store.dispatch(toggleTodo(0));
console.log("State after toggling 1st todo", store.getState());

store.dispatch(toggleTodo(1));
console.log("State after toggling 2nd todo", store.getState());

store.dispatch(toggleTodo(2));
console.log("State after toggling 3rd todo", store.getState());

store.dispatch(editTodo("Edit the first action", 0));
console.log("State after editing 1st todo", store.getState());

store.dispatch(editTodo("Buy milk and coffee", 1));
console.log("State after toggling 2nd todo", store.getState());

store.dispatch(addTodo("About to test delete function"));
console.log("Deleting last todo", store.getState());

store.dispatch(deleteTodo(3));
console.log("State after deleting last todo", store.getState());

store.dispatch(deleteTodo(0));
console.log("State after deleting 1st todo", store.getState());

function App() {
  return <MainView />;
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);
