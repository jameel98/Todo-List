import React, { useCallback } from "react";
import Todo, { TodoType } from "../../components/todo/Todo";
import { List } from "@mantine/core";

interface TodolistProps {
  todos: TodoType[];
  setTodos: (todos: TodoType[]) => void;
}
const Todolist: React.FC<TodolistProps> = (props: TodolistProps) => {
  const onDelete = useCallback(
    (id: number) => {
      props.setTodos(props.todos.filter((todo) => todo.id !== id));
    },
    [props]
  );

  const onUpdate = useCallback(
    (id: number, text: string) => {
      const newTodos = props.todos;
      const index = props.todos.findIndex((x: TodoType) => {
        return x.id === id;
      });
      newTodos[index] = { id, text };
      onDelete(index);
    },
    [props, onDelete]
  );

  return (
    <div className="todo-container">
      <List className="todo-list" key="todoList" listStyleType={"none"}>
        {props.todos.map((todo: TodoType) => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              onDelete={onDelete}
              onUpdate={onUpdate}
            />
          );
        })}
      </List>
    </div>
  );
};

export default Todolist;
