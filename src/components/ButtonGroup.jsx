// ButtonGroup.jsx
import { useItemsStore } from "../stores/itemsStore"; // make sure this matches your export
import Button from "./Button";

export default function ButtonGroup() {
  const markAllAsComplete = useItemsStore((state) => state.markAllAsComplete);
  const markAllAsIncomplete = useItemsStore(
    (state) => state.markAllAsIncomplete
  );
  const resetToInitial = useItemsStore((state) => state.resetToInitial);
  const removeAllItems = useItemsStore((state) => state.removeAllItems);

  const secondaryButtons = [
    {
      text: "Mark all as complete",
      onClick: markAllAsComplete,
    },
    {
      text: "Mark all as incomplete",
      onClick: markAllAsIncomplete,
    },
    {
      text: "Reset to initial",
      onClick: resetToInitial,
    },
    {
      text: "Remove all items",
      onClick: removeAllItems,
    },
  ];

  console.log("secondaryButtons:", secondaryButtons);

  return (
    <section className="button-group" aria-label="secondary action buttons">
      {secondaryButtons.map((button, idx) => (
        <Button
          key={button.text ?? idx}
          onClick={typeof button.onClick === "function" ? button.onClick : () => {}}
          buttonType="secondary"
        >
          {button.text}
        </Button>
      ))}
    </section>
  );
}
