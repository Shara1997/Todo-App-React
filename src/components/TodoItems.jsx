import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
import { TodoItemContext } from "../store/todo-items-store";
import { useContext } from "react";

const TodoItems = () => {
  const { todoItems, deleteItem } = useContext(TodoItemContext);

  return (
    <>
      <div className={styles.todoContainer}>
        {todoItems.map((item) => (
          <TodoItem
            key={item.name}
            todoName={item.name}
            todoDate={item.dueDate}
            onDeleteClick={deleteItem}
          />
        ))}
      </div>
    </>
  );
};

export default TodoItems;
