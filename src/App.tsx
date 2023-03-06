import React, { useState, useEffect } from "react";
import "./App.css";

import { Formik } from "formik";
import Form from "./components/form/Form";
import Todolist from "./components/todolist/Todolist";
import { Button, Text } from "@mantine/core";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [timeInput, setTimeInput] = useState(new Date());

  useEffect(() => {
    console.log(timeInput);
  });
  return (
    <div className="App">
      <header>
        <Text> THIS IS A SIMPLE TODO-LIST</Text>
      </header>
      <Form
        timeInput={timeInput}
        setTimeInput={setTimeInput}
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <Todolist setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
