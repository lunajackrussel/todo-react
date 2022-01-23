import React, { useState } from "react";
import "./styles.css";
import { InputTasks } from "./components/InputTasks";
import { IncompleteTasks } from "./components/IncompleteTasks";
import { CompleteTasks } from "./components/CompleteTasks";

export const App = () => {
  const [taskInput, setTaskInput] = useState("");
  const [incompleteTasks, setIncompleteTasks] = useState([]);
  const [completeTasks, setCompleteTasks] = useState([]);
  const onChangeTaskInput = (event) => setTaskInput(event.target.value);
  const onClickAdd = () => {
    if (taskInput === "") return;
    const newTasks = [...incompleteTasks, taskInput];
    setIncompleteTasks(newTasks);
    setTaskInput("");
  };
  const onClickDlete = (index) => {
    const newTasks = [...incompleteTasks];
    newTasks.splice(index, 1);
    setIncompleteTasks(newTasks);
  };
  const onClickComplete = (index) => {
    const newIncompleteTasks = [...incompleteTasks];
    newIncompleteTasks.splice(index, 1);

    const newCompleteTasks = [...completeTasks, incompleteTasks[index]];
    setIncompleteTasks(newIncompleteTasks);
    setCompleteTasks(newCompleteTasks);
  };
  const onClickBack = (index) => {
    const newCompleteTasks = [...completeTasks];
    newCompleteTasks.splice(index, 1);

    const newIncompleteTasks = [...incompleteTasks, completeTasks[index]];
    setCompleteTasks(newCompleteTasks);
    setIncompleteTasks(newIncompleteTasks);
  };

  return (
    <>
      <header>
        <h2>ToDo List</h2>
      </header>
      <InputTasks
        taskInput={taskInput}
        onChange={onChangeTaskInput}
        onClick={onClickAdd}
      />
      <IncompleteTasks
        tasks={incompleteTasks}
        onClickComplete={onClickComplete}
        onClickDlete={onClickDlete}
      />
      <CompleteTasks tasks={completeTasks} onClickBack={onClickBack} />
    </>
  );
};
