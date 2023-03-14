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

type FormValuesType = {
  inputText: string;
};

const initialValues: FormValuesType = {
  inputText: "",
};

const myForm = ({ setInputText, setTodos, todos }: FormProps) => {
  return (
    <Formik
      initialValues={initialValues}
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
            size={"md"}
            onChange={handleChange}
            type="text"
            className="todo-input"
            required
          />

          <Button
            className="btn"
            rightIcon={<Plus />}
            onClick={() => handleSubmit}
            title="Submit"
            type="submit"
          >
            Add task
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default myForm;
