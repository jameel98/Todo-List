import { Button, TextInput } from "@mantine/core";
import React, { FC, useState } from "react";
import { Check, Edit, Trash } from "tabler-icons-react";
import { List } from "@mantine/core";

export type todoType = {
  date: Date;
  text: string;
  id: number;
  edit: boolean;
};

export interface TodoProps {
  todo: todoType;
  onDelete: Function;
  onEdit: Function;
  setInputText: any;
}

const Todo: FC<TodoProps> = (data: TodoProps) => {
  const [inputText, setInputText] = useState("");

  const inputTextHandler = (e: any) => {
    setInputText(e.target.value);
  };

  return (
    <div className="todo">
      <List.Item key={data.todo.id.toString()} className={"todo-item"}>
        <label className="edit-label">
          {data.todo.edit === true ? (
            <>
              <TextInput
                placeholder="Your Task Text"
                radius={"xl"}
                size={"md"}
                type="text"
                className="edit-input"
                onChange={inputTextHandler}
                value={inputText}
              ></TextInput>
              <Button
                onClick={() => {
                  data.onEdit(data.todo.id);
                }}
                className={"save-btn"}
              >
                Save
              </Button>
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
