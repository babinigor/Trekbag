import Button from "./Button";

export default function ButtonGroup({
  handleRemoveAllItems,
  handleResetToInitial,
  handleMarkAllAsComplete,
  handleMarkAllAsIncomplete,
}) {
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
