import React, { useState } from "react";
import "./styles.css";

import { InputTodo } from "./components/InputTodo";
import { DoingList } from "./components/DoingList";
import { DoneList } from "./components/DoneList";

export const App = () => {
  const [todoText, setTodoText] = useState("");

  const [doing, setDoing] = useState([]);

  const [done, setDone] = useState([]);

  const saveTodo = () => {
    if (todoText === "") return;

    const newTodoList = [...doing, todoText];

    setDoing(newTodoList);
    setTodoText("");
  };

  const deleteTodo = (index) => {
    const deletedTodo = [...doing];
    deletedTodo.splice(index, 1);
    setDoing(deletedTodo);
  };

  const completeTodo = (index) => {
    const doneItem = doing[index];
    deleteTodo(index);

    setDone([...done, doneItem]);
  };

  const revertDoing = (index) => {
    const revertItem = done[index];
    const revertedDone = [...done];
    revertedDone.splice(index, 1);

    setDone(revertedDone);
    setDoing([...doing, revertItem]);
  };

  return (
    <div id="wrapper">
      <InputTodo
        todoText={todoText}
        setter={setTodoText}
        clickEvent={saveTodo}
        todoLength={doing.length}
      />

      <DoingList
        doing={doing}
        completeEvent={completeTodo}
        deleteEvent={deleteTodo}
      />

      <DoneList done={done} revertEvent={revertDoing} />
    </div>
  );
};
