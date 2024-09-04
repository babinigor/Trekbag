export default function Counter({ quantityOfPackedItems, quantityOfAllItems }) {
  return (
    <p>
      Собрано вещей: <b>{quantityOfPackedItems}</b> / {quantityOfAllItems}
    </p>
  );
}
