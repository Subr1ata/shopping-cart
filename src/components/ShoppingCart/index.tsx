// ShoppingCart.js
import { useState, useContext } from "react";
import { Box, Flex, Input, Button, Text, VStack } from "@chakra-ui/react";
import { ShoppingCartContext } from "./ShoppingCartContext";
import { useNavigate } from "react-router";
import { ArrowBackIcon } from "@chakra-ui/icons";

const ShoppingCart = () => {
  const { items, addItem, removeItem } = useContext(ShoppingCartContext);
  const [newItem, setNewItem] = useState("");
  const navigation = useNavigate();

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    if (newItem.trim() !== "") {
      addItem(newItem);
      setNewItem("");
    }
  };

  return (
    <Box p={4} bg="gray.50" borderRadius="md" shadow="md">
      <Button colorScheme="gray" size="sm" onClick={() => navigation(-1)}>
        <ArrowBackIcon />
      </Button>
      <Flex justify="space-between" align="center" mb={4}>
        <Text fontSize="lg" fontWeight="bold">
          Shopping Cart
        </Text>
        <Button colorScheme="teal" size="sm" onClick={handleSubmit}>
          Add
        </Button>
      </Flex>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Add new item"
          size="sm"
          variant="filled"
          mb={2}
        />
      </form>
      <VStack align="stretch" spacing={2}>
        {items.map((item, index) => (
          <Flex key={index} justify="space-between" align="center" py={2}>
            <Text fontSize="sm">{item}</Text>
            <Button
              colorScheme="red"
              size="sm"
              onClick={() => removeItem(index)}
            >
              Remove
            </Button>
          </Flex>
        ))}
      </VStack>
      <Text fontSize="sm" mt={2}>
        Total items: {items.length} | Subtotal: ${items.length * 10}
      </Text>
    </Box>
  );
};

export default ShoppingCart;
