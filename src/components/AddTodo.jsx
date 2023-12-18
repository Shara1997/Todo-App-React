import { useContext, useRef } from "react";
import { MdAddBox } from "react-icons/md";
import { TodoItemContext } from "../store/todo-items-store";

function AddTodo() {
  const { addNewItem } = useContext(TodoItemContext);
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonClick = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    addNewItem(todoName, dueDate);
  };
  return (
    <>
      <div className="container text-center">
        <form className="row todo-row" onSubmit={handleAddButtonClick}>
          <div className="col-4">
            <input
              type="text"
              ref={todoNameElement}
              placeholder="Enter Todo here"
            />
          </div>
          <div className="col-2">
            <input type="date" ref={dueDateElement} />
          </div>
          <div className="col-1">
            <button
              className="btn btn-success action-btn"
              onClick={handleAddButtonClick}
            >
              <MdAddBox />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddTodo;
