import React from "react";

export const DoingList = (props) => {
  const { doing, completeEvent, deleteEvent } = props;

  return (
    <div className="todo-section doing-area">
      <h1>Doing</h1>

      <ul className="doing-list todo-list">
        {doing.map((todo, index) => {
          return (
            <li key={todo + "-" + index}>
              <div>
                <p>{todo}</p>
                <button onClick={() => completeEvent(index)}>完了</button>
                <button onClick={() => deleteEvent(index)}>削除</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
