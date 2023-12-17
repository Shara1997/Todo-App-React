import { useState } from "react";
import { MdAddBox } from "react-icons/md";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClick = () => {
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };
  return (
    <>
      <div className="container text-center">
        <div className="row todo-row">
          <div className="col-4">
            <input
              type="text"
              value={todoName}
              placeholder="Enter Todo here"
              onChange={handleNameChange}
            />
          </div>
          <div className="col-2">
            <input type="date" value={dueDate} onChange={handleDateChange} />
          </div>
          <div className="col-1">
            <button
              type="button"
              className="btn btn-success action-btn"
              onClick={handleAddButtonClick}
            >
              <MdAddBox />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddTodo;
