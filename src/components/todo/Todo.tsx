import { Button, TextInput } from "@mantine/core";
import React, { FC } from "react";
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
}

const Todo: FC<TodoProps> = (data: TodoProps) => {
  return (
    <div className="todo">
      <List.Item
        key={data.todo.id.toString()}
        className={`todo-item ${data.todo.completed ? "completed" : ""}`}
      >
        {data.todo.text + data.todo.date}
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
