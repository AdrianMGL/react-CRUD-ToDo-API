import React, { useEffect, useState } from "react";
import "/src/assets/styles/ToDos.css";

const ToDosForm = ({ addToDo, toDoSelected, deselectToDo, updateToDo }) => {
  /** */
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    //
    if (toDoSelected !== null) {
      setTitle(toDoSelected.title);
      setDescription(toDoSelected.description);
      setIsCompleted(toDoSelected.isCompleted);
    } else {
      reset();
    }
  }, [toDoSelected]);

  /**  */
  const submit = (e) => {
    e.preventDefault();
    //
    const toDo = {
      title,
      description,
      isCompleted,
    };
    //
    if (toDoSelected !== null) {
      // actualizar
      console.log(toDoSelected);
      toDo.id = toDoSelected.id;
      updateToDo(toDo);
      deselectToDo();
    } else {
      toDo.id = Date.now();
      addToDo(toDo);
      reset();
    }
  };

  /** RESET */
  const reset = () => {
    setTitle("");
    setDescription("");
    setIsCompleted(false);
  };

  /** */
  return (
    <div className="formulario">
      <h2 className="form__name">Add toDos </h2>
      <form onSubmit={submit}>
        <div className="input">
          <label htmlFor="title" className="title">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>

        <div className="input">
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            cols="30"
            rows="10"
          ></textarea>
        </div>

        <div className="input__checked">
          <label htmlFor="isCompleted">Is Completed</label>
          <input
            type="checkbox"
            name="isCompleted"
            id="isCompleted"
            onChange={(e) => setIsCompleted(e.target.checked)}
            checked={isCompleted}
            className="checked"
          />
        </div>
        <button className="btn success">
          {toDoSelected !== null ? "Update" : "Create"}
        </button>

        {toDoSelected !== null && (
          <button onClick={deselectToDo} type="button" className="btn clear ">
            Clear
          </button>
        )}
      </form>
    </div>
  );
};

export default ToDosForm;
