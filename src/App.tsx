import { useState, useEffect } from "react";
import {
  Box,
  Container,
  VStack,
  Heading,
  Divider,
  Spinner,
  Center,
} from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TodoList from "./components/TodoList";
import ShoppingCart from "./components/ShoppingCart";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { TodoProvider } from "./components/TodoList/TodoContext";
import { ShoppingCartProvider } from "./components/ShoppingCart/ShoppingCartContext";
import fetchData from "./API";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchData().then((data) => {
      setData(data);
      setLoading(false);
    });
  }, []);

  return (
    <Router>
      <TodoProvider>
        <ShoppingCartProvider>
          <Container maxW="container.md" p={4} mt={8}>
            <VStack spacing={4} align="stretch">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/todo" element={<TodoList />} />
                <Route path="/cart" element={<ShoppingCart />} />
              </Routes>
              {loading ? (
                <Center p={4} mt={8}>
                  <Spinner size="xl" />
                </Center>
              ) : (
                data && (
                  <Box p={4} mt={8}>
                    <Heading as="h2" size="lg" mb={4}>
                      API Data
                    </Heading>
                    <Divider mb={4} />
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                  </Box>
                )
              )}
            </VStack>
          </Container>
        </ShoppingCartProvider>
      </TodoProvider>
    </Router>
  );
};

export default App;
