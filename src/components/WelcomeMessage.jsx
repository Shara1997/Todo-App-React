import styles from "./WelcomeMessage.module.css";
import { useContext } from "react";
import { TodoItemContext } from "../store/todo-items-store";

const WelcomeMessage = () => {
  const { todoItems } = useContext(TodoItemContext);
  return (
    todoItems.length === 0 && <p className={styles.welcome}>Have a good day!</p>
  );
};

export default WelcomeMessage;
