import React from "react";

const ToDoList = ({ toDos, deleteToDo, selectToDo }) => {
  /** */
  return (
    <div className="container__list">
      <h2 className="list__name">ToDo List</h2>
      <table className="table">
        <thead className="table__head">
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Is Completed</th>
            <th>Accion</th>
          </tr>
        </thead>
        <tbody className="table__body">
          {toDos.map((toDo) => (
            <tr key={toDo.id}>
              <td>{toDo.id}</td>
              <td>{toDo.title}</td>
              <td>{toDo.description}</td>
              <td>{toDo.isCompleted.toString()}</td>
              <td>
                <button onClick={() => selectToDo(toDo)} className="btn edit">
                  Edit
                </button>
                <button
                  onClick={() => deleteToDo(toDo.id)}
                  className="btn delete"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ToDoList;
