import { useContext } from "react";
import Counter from "./Counter";
import Logo from "./Logo";
import { ItemsContext } from "../Contexts/ItemsContextProvider";

export default function Header() {
  const { items } = useContext(ItemsContext);
  return (
    <header>
      <Logo />
      <Counter
        quantityOfPackedItems={items.filter((item) => item.packed).length}
        quantityOfAllItems={items.length}
      />
    </header>
  );
}
