import { Button, TextInput } from "@mantine/core";
import React, { FC, useState } from "react";
import { Check, Edit, Trash } from "tabler-icons-react";
import { List } from "@mantine/core";
import { DateInput } from "@mantine/dates";

export type todoType = {
  date: Date;
  text: string;
  completed: boolean;
  id: number;
  edit: boolean;
};

export interface TodoProps {
  todo: todoType;
  onComplete: Function;
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
      <List.Item
        key={data.todo.id.toString()}
        className={`todo-item ${data.todo.completed ? "completed" : ""}`}
      >
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
                value={data.todo.text + " " + data.todo.date}
              ></TextInput>
              <Button
                onClick={() => data.onEdit(data.todo.id)}
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
        rightIcon={<Check />}
        onClick={() => data.onComplete(data.todo)}
        className="complete-btn"
      >
        completed
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
