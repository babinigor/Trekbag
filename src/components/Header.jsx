import { useItemsStore } from "../stores/itemsStore";
import Counter from "./Counter";
import Logo from "./Logo";

export default function Header() {
  const items = useItemsStore((state) => state.items);

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
