import Counter from "./Counter";
import Logo from "./Logo";

export default function Header({ quantityOfPackedItems, quantityOfAllItems }) {
  return (
    <header>
      <Logo />
      <Counter
        quantityOfPackedItems={quantityOfPackedItems}
        quantityOfAllItems={quantityOfAllItems}
      />
    </header>
  );
}
