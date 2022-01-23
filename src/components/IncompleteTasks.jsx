import React from "react";

export const IncompleteTasks = (props) => {
  const { tasks, onClickComplete, onClickDlete } = props;
  const style = {
    backgroundColor: "#ffff",
    width: "400px",
    minHeight: "200px",
    padding: "8px",
    margin: "7px auto",
    borderRadius: "8px"
  };
  return (
    <div style={style} class="incomplete-area">
      <p class="title">Done</p>
      <ul>
        {tasks.map((tasks, index) => {
          return (
            <div key={tasks} className="list-row">
              <li>{tasks}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDlete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
