import { useState } from "react";
import EmptyView from "./EmptyView";
import Select from "react-select";

const sortingOptions = [
  { value: "default", label: "По-умолчанию" },
  { value: "packed", label: "Сначала отмеченные" },
  { value: "unpacked", label: "Сначала неотмеченные" },
];

export default function ItemList({ items, handleRemoveItem, handleMarkItem }) {
  const [sortBy, setSortBy] = useState("default");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "packed") {
      return b.packed - a.packed;
    }
    if (sortBy === "unpacked") {
      return a.packed - b.packed;
    }
    return;
  });
  return (
    <ul className="item-list">
      {items.length === 0 && <EmptyView />}
      {items.length !== 0 && (
        <section className="sorting">
          <Select
            onChange={(option) => setSortBy(option.value)}
            defaultValue={sortingOptions[0]}
            placeholder="Сортировка"
            options={sortingOptions}
            isSearchable={false}
          />
        </section>
      )}
      {sortedItems.map((item) => (
        <Item
          key={item.id}
          item={item}
          onRemoveItem={handleRemoveItem}
          onMarkItem={handleMarkItem}
        />
      ))}
    </ul>
  );
}

function Item({ item, onRemoveItem, onMarkItem }) {
  return (
    <li className="item">
      <label>
        <input
          onChange={() => onMarkItem(item.id)}
          checked={item.packed}
          type="checkbox"
        />
        {item.name}
      </label>
      <button className="remove" onClick={() => onRemoveItem(item.id)}>
        ❌
      </button>
    </li>
  );
}
