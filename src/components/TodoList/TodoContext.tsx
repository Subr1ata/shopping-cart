import { createContext, useState } from "react";

const TodoContext = createContext<{
  todos: { task: string; completed: boolean }[];
  addTodo: (task: string) => void;
  removeTodo: (index: number) => void;
  markCompleted: (index: number) => void;
}>({
  todos: [],
  addTodo: () => {},
  removeTodo: () => {},
  markCompleted: () => {},
});

const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [todos, setTodos] = useState([
    { task: "Task 1", completed: false },
    { task: "Task 2", completed: false },
  ]);

  const addTodo = (task: string) => {
    setTodos((prevTodos) => [...prevTodos, { task, completed: false }]);
  };

  const removeTodo = (index: number) => {
    setTodos((prevTodos) => prevTodos.filter((_todo, i) => i !== index));
  };

  const markCompleted = (index: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo, i) => {
        if (i === index) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, removeTodo, markCompleted }}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoProvider, TodoContext };
