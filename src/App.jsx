import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemContext } from "./store/todo-items-store";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const addNewItem = (itemName, itemDueDate) => {
    setTodoItems((currentValue) => [
      ...currentValue,
      { name: itemName, dueDate: itemDueDate },
    ]);
  };

  const deleteItem = (todoItemName) => {
    const newTodoItem = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItem);
  };

  return (
    <>
      <TodoItemContext.Provider value={{ todoItems, addNewItem, deleteItem }}>
        <center className="todo-container">
          <AppName />
          <AddTodo />
          <WelcomeMessage />
          <TodoItems />
        </center>
      </TodoItemContext.Provider>
    </>
  );
}

export default App;
