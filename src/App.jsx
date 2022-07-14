import axios from "axios";
import { useEffect, useState } from "react";

import "./App.css";
import ToDoList from "./components/ToDoList";
import ToDosForm from "./components/ToDosForm";

function App() {
  /** */
  const [toDos, setToDos] = useState([]);
  const [toDoSelected, setToDoSelected] = useState(null);

  /** */
  useEffect(() => {
    axios
      .get("https://todo-app-academlo.herokuapp.com/todos/")
      .then((res) => setToDos(res.data));
  }, []);

  /** GET */
  const getToDos = () => {
    axios
      .get("https://todo-app-academlo.herokuapp.com/todos/")
      .then((res) => setToDos(res.data));
  };

  /** ADD */
  const addToDo = (newToDo) => {
    alert("Añadiendo");
    axios
      .post("https://todo-app-academlo.herokuapp.com/todos/", newToDo)
      .then(() => getToDos())
      .catch((error) => console.log(error.response));
  };

  /** NULL */
  const deselectToDo = () => setToDoSelected(null);

  //
  // console.log(toDoSelected);

  /** DELETE */
  const deleteToDo = (id) => {
    alert("Delete");

    axios
      .delete(`https://todo-app-academlo.herokuapp.com/todos/${id}/`)
      .then(() => getToDos())
      .catch((error) => console.log(error.response));
  };

  /** EDIT */
  const selectToDo = (toDo) => {
    setToDoSelected(toDo);
  };

  /** UPDATE */
  const updateToDo = (toDoUpdated) => {
    alert("Update");
    console.log(toDoUpdated);

    axios
      .put(
        `https://todo-app-academlo.herokuapp.com/todos/${toDoUpdated.id}/`,
        toDoUpdated
      )
      .then(() => getToDos())
      .catch((error) => console.log(error.response));
  };

  /** */
  return (
    <div className="App">
      <header className="App-header">
        <h2>CRUD ToDo</h2>
      </header>
      <main className="main">
        <ToDosForm
          addToDo={addToDo}
          toDoSelected={toDoSelected}
          deselectToDo={deselectToDo}
          updateToDo={updateToDo}
        />

        <ToDoList
          toDos={toDos}
          deleteToDo={deleteToDo}
          selectToDo={selectToDo}
        />
      </main>
    </div>
  );
}

export default App;
