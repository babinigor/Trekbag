import { useItemsStore } from "../stores/itemsStore";
import Button from "./Button";

export default function ButtonGroup() {
  const markAllAsComplete = useItemsStore((state) => state.markAllAsComplete);
  const markAllAsIncomplete = useItemsStore(
    (state) => state.markAllAsIncomplete
  );
  const resetToInitial = useItemsStore((state) => state.resetToInitial);
  const removeAllItems = useItemsStore((state) => state.removeAllItems);

  return (
    <section className="button-group">
      <Button buttonType="secondary" onClick={markAllAsComplete}>
        Отметить все
      </Button>
      <Button buttonType="secondary" onClick={markAllAsIncomplete}>
        Убрать все отметки
      </Button>
      <Button buttonType="secondary" onClick={resetToInitial}>
        По умолчанию
      </Button>
      <Button buttonType="secondary" onClick={removeAllItems}>
        Удалить всё
      </Button>
    </section>
  );
}
