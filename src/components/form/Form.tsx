import { Button } from "@mantine/core";
import { Plus } from "tabler-icons-react";
import { TextInput } from "@mantine/core";
import { DateInput } from "@mantine/dates";

import "./form.css";

import React from "react";
import { Form, Formik } from "formik";

export type FormProps = {
  //  setTimeInput: any;
  setInputText: any;
  todos: any;
  setTodos: any;
  inputText: any;
  // timeInput: any;
};
const myForm = ({ setInputText, todos, setTodos, inputText }: FormProps) => {
  return (
    <Formik
      initialValues={{
        //  setTimeInput: "",
        todos: [],
        inputText: "",
        setInputText: "",
        //  timeInput: "",
        //   date: new Date(),
      }}
      onSubmit={(values) => {
        //  setTimeInput(values.timeInput);

        if (values.inputText !== "") {
          setTodos([
            ...todos,
            {
              edit: false,
              text: values.inputText,
              //    date: timeInput,
              id: Math.random() * 1000,
            },
          ]);

          setInputText("");
        }
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
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
          {/* <MyDatePicker name="date" />*/}

          {/* <DateInput
            id="timeInput"
            name="timeInput"
            value={timeInput}
            placeholder="Enter date"
            onChange={setTimeInput}
            maw={400}
            mx="auto"
          />
      */}
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
