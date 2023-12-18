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

  const handleAddButtonClick = (event) => {
    event.preventDefault();
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };
  return (
    <>
      <div className="container text-center">
        <form className="row todo-row" onSubmit={handleAddButtonClick}>
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
