import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";
import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos, isActive, setTodos }) {
  return (
    <div>
      <h1>{isActive ? "Working.. 🔥" : "Done..! 🎉"}</h1>

      {todos
        .filter((item) => item.isDone === !isActive)
        .map((item) => {
          return (
            <>
              <Todo item={item} isActive={isActive} setTodos={setTodos} />
            </>
          );
        })}
    </div>
  );
}
