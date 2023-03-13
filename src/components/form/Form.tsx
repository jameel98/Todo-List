import React from "react";

import { Button, TextInput } from "@mantine/core";
import { Plus } from "tabler-icons-react";

import { Form, Formik } from "formik";
import { TodoType } from "../todo/Todo";
import "./form.css";

export type FormProps = {
  setInputText: (text: string) => void;
  setTodos: (todos: TodoType[]) => void;
  todos: TodoType[];
  inputText: string;
};

const myForm = ({ setInputText, setTodos, todos }: FormProps) => {
  return (
    <Formik
      initialValues={{
        todos: [],
        inputText: "",
      }}
      onSubmit={(values) => {
        console.table(values);
        if (values.inputText !== "") {
          setTodos([
            ...todos,
            {
              text: values.inputText,
              id: Math.random() * 1000,
            },
          ]);
          setInputText("");
        }
      }}
    >
      {({ handleChange, handleSubmit }) => (
        <Form className="form">
          <TextInput
            name="inputText"
            placeholder="Your Task Text"
            radius={"xl"}
            size={"md"}
            onChange={handleChange}
            type="text"
            className="todo-input"
            required
          />

          <Button
            rightIcon={<Plus />}
            onClick={() => handleSubmit}
            title="Submit"
            type="submit"
          ></Button>
        </Form>
      )}
    </Formik>
  );
};

export default myForm;

/*
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
*/
