import { Button } from "@mantine/core";
import { Plus } from "tabler-icons-react";
import { TextInput } from "@mantine/core";
import { DateInput } from "@mantine/dates";

import "./form.css";

import React from "react";

export type FormProps = {
  setInputText: any;
  setTimeInput: any;
  todos: any;
  setTodos: any;
  inputText: any;
  timeInput: any;
};
const Form = ({
  setInputText,
  setTimeInput,
  todos,
  setTodos,
  inputText,
  timeInput,
}: FormProps) => {
  const inputTextHandler = (e: any) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e: any) => {
    e.preventDefault();
    if (inputText !== "") {
      setTodos([
        ...todos,
        {
          text: inputText,
          date: timeInput,
          completed: false,
          id: Math.random() * 1000,
        },
      ]);

      setInputText("");
    }
  };

  return (
    <form className="form" action="">
      <TextInput
        placeholder="Your Task Text"
        radius={"xl"}
        size={"md"}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
        required
      />
      <DateInput
        value={timeInput}
        onChange={setTimeInput}
        label="Date input"
        placeholder="Date input"
        maw={400}
        mx="auto"
      />

      <Button
        rightIcon={<Plus />}
        onClick={submitTodoHandler}
        className="todo-btton"
        type="submit"
      >
        Add{" "}
      </Button>
    </form>
  );
};

export default Form;
