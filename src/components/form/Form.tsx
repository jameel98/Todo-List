import { Button } from "@mantine/core";
import { Plus } from "tabler-icons-react";
import { TextInput } from "@mantine/core";
import { DateInput, DatePicker, TimeInput } from "@mantine/dates";

import "./form.css";

import React from "react";
import { time } from "console";

export type FormProps = {
  setInputText: any;
  setTimeInput: any;
  todos: any;
  setTodos: any;
  inputText: any;
  timeInput: any;

  setStatus: any;
};
const Form = ({
  setInputText,
  setTimeInput,
  todos,
  setTodos,
  inputText,
  timeInput,
  setStatus,
}: FormProps) => {
  const inputTextHandler = (e: any) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };
  const inputDateHandler = (e: any) => {
    console.table(e);
    console.log(e.target.value);
    setTimeInput(e.target.value);
  };

  const submitTodoHandler = (e: any) => {
    e.preventDefault();
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
  };

  const statusHandler = (e: any) => {
    setStatus(e.target.value);
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
