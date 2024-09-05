import { useContext } from "react";
import Button from "./Button";
import { ItemsContext } from "../Contexts/ItemsContextProvider";

export default function ButtonGroup() {
  const {
    handleMarkAllAsComplete,
    handleMarkAllAsIncomplete,
    handleResetToInitial,
    handleRemoveAllItems,
  } = useContext(ItemsContext);
  return (
    <section className="button-group">
      <Button buttonType="secondary" onClick={handleMarkAllAsComplete}>
        Отметить все
      </Button>
      <Button buttonType="secondary" onClick={handleMarkAllAsIncomplete}>
        Убрать все отметки
      </Button>
      <Button buttonType="secondary" onClick={handleResetToInitial}>
        По умолчанию
      </Button>
      <Button buttonType="secondary" onClick={handleRemoveAllItems}>
        Удалить всё
      </Button>
    </section>
  );
}
