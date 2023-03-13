import React, { FC, useState } from "react";
import { Button, TextInput } from "@mantine/core";
import { Edit, Trash } from "tabler-icons-react";
import { List } from "@mantine/core";

//todo: capital letter 1 done
export type TodoType = {
  text: string;
  id: number;
};

//todo: remove form and formik 2 done

export interface ITodoProps {
  todo: TodoType;
  onDelete: (id: number) => void;
  onUpdate: (id: number, text: string) => void;
}

//todo: removed unused lines 3 done

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
    <div className="todo">
      <List.Item key={data.todo.id.toString()} className={"todo-item"}>
        <label className="edit-label">
          {editable ? (
            <>
              <form className="form" action="">
                <TextInput
                  name="inputText"
                  placeholder="Your Task Text"
                  radius={"xl"}
                  size={"md"}
                  onChange={inputTextHandler}
                  type="text"
                  className="todo-input"
                />
                <Button
                  className="todo-btton"
                  type="submit"
                  onClick={(
                    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
                  ) => {
                    e.preventDefault();
                    data.onUpdate(data.todo.id, inputText);
                    editHandler();
                  }}
                >
                  Save
                </Button>
              </form>
            </>
          ) : (
            <>
              <TextInput
                name="inputText"
                placeholder="Your Task Text"
                radius={"xl"}
                size={"md"}
                type="text"
                className="todo-input"
                value={data.todo.text}
              ></TextInput>
            </> //todo: design
          )}
        </label>
      </List.Item>
      <Button rightIcon={<Edit />} onClick={editHandler} className={"edit-btn"}>
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
