import { MdDelete } from "react-icons/md";

function TodoItem({ todoName, todoDate, onDeleteClick }) {
  return (
    <>
      <div className="container">
        <div className="row container-row">
          <div className="col-4">{todoName}</div>
          <div className="col-2">{todoDate}</div>
          <div className="col-1">
            <button
              type="button"
              className="btn btn-danger action-btn"
              onClick={() => onDeleteClick(todoName)}
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
