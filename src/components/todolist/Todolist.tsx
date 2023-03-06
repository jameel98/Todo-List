import React from "react";
import Todo, { todoType } from "../../components/todo/Todo";
import { List, TextInput } from "@mantine/core";
interface TodolistProps {
  todos: todoType[];
  setTodos: any;
}
const Todolist: React.FC<TodolistProps> = (props) => {
  const onDelete = (id: number) => {
    props.setTodos(props.todos.filter((todo) => todo.id !== id));
  };
  const onComplete = (id: number) => {
    props.setTodos(
      props.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
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
  return (
    <div className="todo-container">
      <List className="todo-list" key="todoList">
        {props.todos.map((todo: todoType) => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              onComplete={onComplete}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          );
        })}
      </List>
    </div>
  );
};

export default Todolist;
