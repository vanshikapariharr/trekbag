// Button.jsx
export default function Button({ onClick, buttonType, children, text }) {
  const label = children ?? text ?? "Button";
  return (
    <button
      onClick={onClick}
      className={`btn ${buttonType === "secondary" ? "btn--secondary" : ""}`}
      type="button"
    >
      {label}
    </button>
  );
}
