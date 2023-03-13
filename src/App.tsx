import React, { useState, useEffect } from "react";
import "./App.css";

import Form from "./components/form/Form";
import Todolist from "./components/todolist/Todolist";
import { Text } from "@mantine/core";
import { TodoType } from "./components/todo/Todo";
function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState<TodoType[]>([]);

  // useEffect(() => {
  //   console.log(timeInput);
  // });
  return (
    <div className="App">
      <header>
        <Text> THIS IS A SIMPLE TODO-LIST</Text>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
      />
      <Todolist setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
