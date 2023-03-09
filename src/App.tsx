import React, { useState, useEffect } from "react";
import "./App.css";

import { Formik } from "formik";
import Form from "./components/form/Form";
import FFormik from "./components/form/FFormik";
import Todolist from "./components/todolist/Todolist";
import { Text } from "@mantine/core";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [timeInput, setTimeInput] = useState(new Date());

  useEffect(() => {
    console.log(timeInput);
  });
  return (
    <div className="App">
      <header>
        <Text> THIS IS A SIMPLE TODO-LIST</Text>
      </header>
      <FFormik
        timeInput={timeInput}
        setTimeInput={setTimeInput}
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
