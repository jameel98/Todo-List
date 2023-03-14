import React, { FC, useState } from "react";
import { Button, TextInput, Text, MantineProvider } from "@mantine/core";
import { Edit, Trash } from "tabler-icons-react";
import { List } from "@mantine/core";

import "./todo.css";

export type TodoType = {
  text: string;
  id: number;
};

export interface ITodoProps {
  todo: TodoType;
  onDelete: (id: number) => void;
  onUpdate: (id: number, text: string) => void;
}

const Todo: FC<ITodoProps> = (data: ITodoProps) => {
  const [inputText, setInputText] = useState(data.todo.text);
  const [editable, setEditable] = useState(false);

  const inputTextHandler = (e: any) => {
    setInputText(e.target.value);
  };

  const editHandler = () => {
    setEditable(!editable);
  };

  return (
    <MantineProvider
      theme={{
        colors: {
          red: ["#FF0000"],
          green: ["#008000"],
          white: ["#ffffff"],
          orange: ["#ff551b"],
        },
      }}
    >
      <div className="todo">
        <List.Item key={data.todo.id.toString()} className={"todo-item"}>
          <div className="flex-container">
            {editable ? (
              <>
                <TextInput
                  name="inputText"
                  placeholder="Your Task Text"
                  size={"md"}
                  onChange={inputTextHandler}
                  type="text"
                  className="todo-input"
                  value={inputText}
                />
                <Button
                  className="btn save-btn"
                  color={"green"}
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    data.onUpdate(data.todo.id, inputText);
                    editHandler();
                  }}
                >
                  Save
                </Button>
              </>
            ) : (
              <>
                <Text
                  className="text-todo"
                  placeholder="Your Task Text"
                  size={"md"}
                  color={"green"}
                >
                  {data.todo.text}
                </Text>
              </> //todo: design
            )}
            <Button
              rightIcon={<Edit />}
              onClick={editHandler}
              className={"btn"}
            >
              edit
            </Button>

            <Button
              color={"red"}
              rightIcon={<Trash />}
              onClick={() => data.onDelete(data.todo.id)}
              className="btn delete-btn"
            >
              delete
            </Button>
          </div>
        </List.Item>
      </div>
    </MantineProvider>
  );
};

export default Todo;
