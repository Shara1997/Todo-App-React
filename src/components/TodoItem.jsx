import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { TodoItemContext } from "../store/todo-items-store";

const { deleteItem } = useContext(TodoItemContext);

function TodoItem({ todoName, todoDate, onDeleteClick }) {
  return (
    <>
      <div className="container">
        <div className="row container-row">
          <div className="col-6 nameContainer">{todoName}</div>
          <div className="col-4">{todoDate}</div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-danger action-btn"
              onClick={() => deleteItem(todoName)}
            >
              <MdDelete />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoItem;
