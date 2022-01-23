import React from "react";

export const CompleteTasks = (props) => {
  const { tasks, onClickBack } = props;
  const style = {
    backgroundColor: "#ffffe0",
    width: "400px",
    minHeight: "200px",
    padding: "8px",
    margin: "7px auto",
    borderRadius: "8px"
  };

  return (
    <div style={style} class="complete-area">
      <p class="title">Done</p>
      <ul>
        {tasks.map((tasks, index) => {
          return (
            <div key={tasks} className="list-row">
              <li>{tasks}</li>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
