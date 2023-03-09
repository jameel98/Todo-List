import { Button } from "@mantine/core";
import { Plus } from "tabler-icons-react";
import { TextInput } from "@mantine/core";
import { DateInput, DatePicker } from "@mantine/dates";
import { Formik, Form, useFormikContext, useField } from "formik";
import { todoType } from "../todo/Todo";
import "./form.css";

import React from "react";
/*
const MyDatePicker = ({ name = "" }) => {
  const [field, meta, helpers] = useField(name);

  const { value } = meta;
  const { setValue } = helpers;

  return (
    <DatePicker {...field} value={value} onChange={(date) => setValue(date)} />
  );
};
*/
export type FormProps = {
  setTimeInput: any;
  setInputText: any;
  todos: any;
  setTodos: any;
  inputText: any;
  timeInput: any;
};
const FFormik = ({
  setTimeInput,
  setInputText,
  todos,
  setTodos,
  inputText,
  timeInput,
}: FormProps) => {
  /*const inputTextHandler = (e: any) => {
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
*/

  return (
    <Formik
      initialValues={{
        setInputText: "",
        setTimeInput: "",
        todos: [],
        setTodos: [],
        inputText: "",
        timeInput: "",
        date: new Date(),
      }}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
        setInputText(values.inputText);
        setTimeInput(values.timeInput);

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
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <Form className="form" onSubmit={handleSubmit}>
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

export default FFormik;
