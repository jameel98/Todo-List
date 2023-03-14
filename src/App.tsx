import React, { useState } from "react";
import "./App.css";

import Form from "./components/form/Form";
import Todolist from "./components/todolist/Todolist";
import { TodoType } from "./components/todo/Todo";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState<TodoType[]>([]);

  return (
    <div className="App">
      <header>
        <Form
          inputText={inputText}
          todos={todos}
          setTodos={setTodos}
          setInputText={setInputText}
        />
      </header>
      <body>
        <Todolist setTodos={setTodos} todos={todos} />
      </body>
    </div>
  );
}

export default App;
