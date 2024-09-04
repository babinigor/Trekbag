import { useState } from "react";
import Button from "./Button";

export default function AddItemForm({ onAddItem }) {
  const [itemText, setItemText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // basic validation
    if (!itemText) {
      alert("Please enter an item");
      return;
    }

    onAddItem(itemText);
    setItemText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Добавить вещь</h2>
      <input
        value={itemText}
        placeholder="Зубная щетка..."
        onChange={(e) => setItemText(e.target.value)}
        autoFocus
      />
      <Button>Добавить в список</Button>
    </form>
  );
}
