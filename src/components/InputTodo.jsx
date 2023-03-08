import React from "react";

export const InputTodo = (props) => {
  const { todoText, setter, clickEvent, todoLength } = props;
  const isMax = todoLength >= 5;

  return (
    <div className="todo-section append-area">
      <input
        type="text"
        value={todoText}
        id="todo-title"
        onChange={(e) => setter(e.target.value)}
        disabled={isMax}
      />
      <button onClick={clickEvent} disabled={isMax}>
        追加
      </button>
      {isMax && <p>おわりです</p>}
    </div>
  );
};
