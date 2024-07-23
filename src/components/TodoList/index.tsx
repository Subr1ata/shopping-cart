// TodoList.js
import { useState, useContext } from "react";
import {
  Box,
  Flex,
  Input,
  Button,
  Checkbox,
  Text,
  VStack,
} from "@chakra-ui/react";
import { TodoContext } from "./TodoContext";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router";

const TodoList = () => {
  const { todos, addTodo, removeTodo, markCompleted } = useContext(TodoContext);
  const [newTodo, setNewTodo] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    if (newTodo.trim() !== "") {
      addTodo(newTodo);
      setNewTodo("");
    }
  };

  return (
    <Box p={4} bg="gray.50" borderRadius="md" shadow="md">
      <Button size={"sm"} onClick={() => navigate(-1)}>
        <ArrowBackIcon />
      </Button>
      <Flex justify="space-between" align="center" mb={4}>
        <Text fontSize="lg" fontWeight="bold">
          Todo List
        </Text>
        <Button colorScheme="teal" size="sm" onClick={handleSubmit}>
          Add
        </Button>
      </Flex>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add new task"
          size="sm"
          variant="filled"
          mb={2}
        />
      </form>
      <VStack align="stretch" spacing={2}>
        {todos.map((todo, index) => (
          <Flex key={index} justify="space-between" align="center" py={2}>
            <Checkbox
              isChecked={todo.completed}
              onChange={() => markCompleted(index)}
              size="sm"
            />
            <Text
              fontSize="sm"
              textDecoration={todo.completed ? "line-through" : "none"}
            >
              {todo.task}
            </Text>
            <Button
              colorScheme="red"
              size="sm"
              onClick={() => removeTodo(index)}
            >
              Remove
            </Button>
          </Flex>
        ))}
      </VStack>
      <Text fontSize="sm" mt={2}>
        Total tasks: {todos.length} | Completed tasks:{" "}
        {todos.filter((todo) => todo.completed).length}
      </Text>
    </Box>
  );
};

export default TodoList;
