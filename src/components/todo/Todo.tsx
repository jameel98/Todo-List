import { Button, TextInput } from "@mantine/core";
import React, { FC, useState } from "react";
import { Edit, Trash } from "tabler-icons-react";
import { List } from "@mantine/core";
import { DateInput } from "@mantine/dates";

import { Formik } from "formik";

export type todoType = {
  // date: Date;
  text: string;
  id: number;
  edit: boolean;
};

export interface TodoProps {
  todo: todoType;
  onDelete: Function;
  onEdit: Function;
  onUpdate: Function;
}

const Todo: FC<TodoProps> = (data: TodoProps) => {
  const [inputText, setInputText] = useState(data.todo.text);
  //const [date, setDate] = useState(data.todo.date);

  return (
    <Formik
      initialValues={{
        todo: {
          //        date: Date,
          text: "",
          id: 0,
          edit: false,
        },

        //   inputText: "",
        //    setInputText: Function,
        //      date: new Date(),
        //      setDate: new Date(),
      }}
      onSubmit={(values: any) => {
        const t = JSON.stringify(values);
        console.table(t);
        // setInputText(inputText);
        data.onUpdate(data.todo.id, values.inputText);
        //       setDate(values.date);
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <div className="todo">
          <List.Item key={data.todo.id.toString()} className={"todo-item"}>
            <label className="edit-label">
              {data.todo.edit === true ? (
                <>
                  <form className="form" action="">
                    <TextInput
                      name="inputText"
                      placeholder="Your Task Text"
                      radius={"xl"}
                      size={"md"}
                      onChange={handleChange}
                      type="text"
                      className="todo-input"
                    ></TextInput>
                    <Button
                      className="todo-btton"
                      type="submit"
                      onClick={(e: any) => {
                        e.preventDefault();
                        handleSubmit();
                      }}
                    >
                      Save
                    </Button>
                  </form>
                </>
              ) : (
                data.todo.text
                // + " " + values.todo.date
              )}
            </label>
          </List.Item>
          <Button
            rightIcon={<Edit />}
            onClick={() => data.onEdit(data.todo.id)}
            className={"edit-btn"}
          >
            edit
          </Button>

          <Button
            rightIcon={<Trash />}
            onClick={() => data.onDelete(data.todo.id)}
            className="trash-btn"
          >
            delete
          </Button>
        </div>
      )}
    </Formik>
  );
};

export default Todo;
/*
const Todo: FC<TodoProps> = (data: TodoProps) => {
  const [inputText, setInputText] = useState(data.todo.text);
  const [date, setDate] = useState(data.todo.date);

  const inputTextHandler = (e: any) => {
    setInputText(e.target.value);
  };

  const print = (e: any) => {
    e.preventDefault();
    setInputText(e.target.value);
  };
  return (
    <div className="todo">
      <List.Item key={data.todo.id.toString()} className={"todo-item"}>
        <label className="edit-label">
          {data.todo.edit === true ? (
            <>
              <form className="form" action="">
                <TextInput
                  placeholder="Your Task Text"
                  radius={"xl"}
                  size={"md"}
                  onChange={inputTextHandler}
                  type="text"
                  className="todo-input"
                ></TextInput>
                <Button
                  className="todo-btton"
                  type="submit"
                  onClick={(e: any) => {
                    print(e);
                    data.onUpdate(data.todo.id, inputText);
                  }}
                >
                  Save{" "}
                </Button>
              </form>
            </>
          ) : (
            data.todo.text + " " + data.todo.date
          )}
        </label>
      </List.Item>
      <Button
        rightIcon={<Edit />}
        onClick={() => data.onEdit(data.todo.id)}
        className={"edit-btn"}
      >
        edit
      </Button>

      <Button
        rightIcon={<Trash />}
        onClick={() => data.onDelete(data.todo.id)}
        className="trash-btn"
      >
        delete
      </Button>
    </div>
  );
};

export default Todo;
*/
