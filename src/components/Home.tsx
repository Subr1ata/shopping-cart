import { Box, Button, Heading, Text, Flex, Spacer } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { LuListTodo } from "react-icons/lu";
import { CiShoppingCart } from "react-icons/ci";
import { FcAbout } from "react-icons/fc";
import { RiContactsBook2Line } from "react-icons/ri";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Box
      maxW="xl"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={4}
      m={4}
    >
      <Heading as="h1" size="lg" mb={4}>
        Welcome to the React Application
      </Heading>
      <Text mb={4}>
        This is a simple React application with a to-do list, shopping cart, and
        API integration.
      </Text>
      <Flex>
        <Button
          colorScheme="blue"
          gap={1}
          onClick={() => navigate("/todo")}
          mr={4}
        >
          <LuListTodo /> Todo List
        </Button>
        <Button
          colorScheme="blue"
          gap={1}
          onClick={() => navigate("/cart")}
          mr={4}
        >
          <CiShoppingCart /> Shopping Cart
        </Button>
        <Spacer />
        <Button
          colorScheme="blue"
          gap={1}
          onClick={() => navigate("/about")}
          mr={4}
        >
          <FcAbout /> About
        </Button>
        <Button colorScheme="blue" gap={1} onClick={() => navigate("/contact")}>
          <RiContactsBook2Line /> Contact
        </Button>
      </Flex>
    </Box>
  );
};

export default Home;
