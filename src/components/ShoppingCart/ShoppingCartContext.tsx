import { createContext, useState } from "react";

const ShoppingCartContext = createContext<{
  items: string[];
  addItem: (item: string) => void;
  removeItem: (index: number) => void;
}>({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  // markCompleted: () => {},
});

const ShoppingCartProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<string[]>([]);

  const addItem = (item: string) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  const removeItem = (index: number) => {
    setItems((prevItems) => prevItems.filter((_item, i) => i !== index));
  };

  return (
    <ShoppingCartContext.Provider value={{ items, addItem, removeItem }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export { ShoppingCartProvider, ShoppingCartContext };
