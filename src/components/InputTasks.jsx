import React from "react";

export const InputTasks = (props) => {
  const { taskInput, onChange, onClick } = props;
  const style = {
    backgroundColor: "#c1ffff",
    width: "400px",
    height: "30px",
    borderRadius: "8px",
    padding: "8px",
    margin: "auto"
  };
  return (
    <div style={style} className="input-area">
      <input placeholder="Add ToDo..." value={taskInput} onChange={onChange} />
      <button onClick={onClick}>追加</button>
    </div>
  );
};
