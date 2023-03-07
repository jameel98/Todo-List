import React from "react";
import Todo, { todoType } from "../../components/todo/Todo";
import { List } from "@mantine/core";
interface TodolistProps {
  todos: todoType[];
  setTodos: any;
}
const Todolist: React.FC<TodolistProps> = (props) => {
  const onDelete = (id: number) => {
    props.setTodos(props.todos.filter((todo) => todo.id !== id));
  };

  const onEdit = (id: number) => {
    props.setTodos(
      props.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            edit: !todo.edit,
          };
        }
        return todo;
      })
    );
  };

  const onUpdate = (id: number, value: "") => {
    props.setTodos(
      props.todos.map((todo) => {
        if (todo.id === id) {
          console.log(value);
          return {
            ...todo,
            text: value,
            edit: !todo.edit,
          };
        }
        return todo;
      })
    );
  };

  return (
    <div className="todo-container">
      <List className="todo-list" key="todoList">
        {props.todos.map((todo: todoType) => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              onDelete={onDelete}
              onEdit={onEdit}
              onUpdate={onUpdate}
            />
          );
        })}
      </List>
    </div>
  );
};

export default Todolist;
