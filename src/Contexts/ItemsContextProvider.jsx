import { createContext, useEffect, useState } from "react";
import { initialItems } from "../lib/constants";

export const ItemsContext = createContext();

export default function ItemsContextProvider({ children }) {
  const [items, setItems] = useState(
    () => JSON.parse(localStorage.getItem("items")) || initialItems
  );

  const handleAddItem = (newItemText) => {
    const newItem = {
      id: new Date().getTime(),
      name: newItemText,
      packed: false,
    };

    const newItems = [...items, newItem];

    setItems(newItems);
  };

  const handleRemoveAllItems = () => {
    setItems([]);
  };

  const handleResetToInitial = () => {
    setItems(initialItems);
  };

  const handleMarkAllAsComplete = () => {
    const newItems = items.map((item) => ({
      ...item,
      packed: true,
    }));

    setItems(newItems);
  };

  const handleMarkAllAsIncomplete = () => {
    const newItems = items.map((item) => ({
      ...item,
      packed: false,
    }));

    setItems(newItems);
  };

  const handleRemoveItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  const handleMarkItem = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          packed: !item.packed,
        };
      } else {
        return item;
      }
    });
    setItems(newItems);
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);
  return (
    <ItemsContext.Provider
      value={{
        items,
        handleAddItem,
        handleRemoveAllItems,
        handleResetToInitial,
        handleMarkAllAsComplete,
        handleMarkAllAsIncomplete,
        handleRemoveItem,
        handleMarkItem,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
}
