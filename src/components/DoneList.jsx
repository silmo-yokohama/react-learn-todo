import React from "react";

export const DoneList = (props) => {
  const { done, revertEvent } = props;

  return (
    <div className="todo-section done-area">
      <h1>Done</h1>

      <ul className="done-list todo-list">
        {done.map((todo, index) => {
          return (
            <li key={todo + "-" + index}>
              <div>
                <p>{todo}</p>
                <button onClick={() => revertEvent(index)}>戻す</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
