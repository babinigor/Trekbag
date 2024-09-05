import { useContext, useMemo, useState } from "react";
import EmptyView from "./EmptyView";
import Select from "react-select";
import { ItemsContext } from "../Contexts/ItemsContextProvider";

const sortingOptions = [
  { value: "default", label: "По-умолчанию" },
  { value: "packed", label: "Сначала отмеченные" },
  { value: "unpacked", label: "Сначала неотмеченные" },
  { value: "name", label: "По имени" },
  { value: "only-packed", label: "Только отмеченные" },
  { value: "only-unpacked", label: "Только неотмеченные" },
];

export default function ItemList() {
  const [sortBy, setSortBy] = useState("default");
  const { items, handleMarkItem, handleRemoveItem } = useContext(ItemsContext);

  const sortedItems = useMemo(
    () =>
      [...items].sort((a, b) => {
        if (sortBy === "packed") {
          return b.packed - a.packed;
        }
        if (sortBy === "unpacked") {
          return a.packed - b.packed;
        }
        if (sortBy === "name") {
          return a.name.localeCompare(b.name);
        }
        return;
      }),
    [items, sortBy]
  );

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
      {sortedItems.map((item) => {
        if (sortBy === "only-packed") {
          if (!item.packed) {
            return;
          }
        }
        if (sortBy === "only-unpacked") {
          if (item.packed) {
            return;
          }
        }
        return (
          <Item
            key={item.id}
            item={item}
            onRemoveItem={handleRemoveItem}
            onMarkItem={handleMarkItem}
          />
        );
      })}
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
