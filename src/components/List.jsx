import React from "react";

export const List = (todo) => {
  const addTodo = () => {};
  return (
    <li key={todo.todo + "-" + todo.index}>
      <div>
        <p>{todo.todo}</p>
        <button>完了</button>
        <button>削除</button>
      </div>
    </li>
  );
};
