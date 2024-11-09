export default function Item({ obj, onDeleteItem, onToggleItem }) {
  return (
    <li className="action">
      <input
        type="checkbox"
        checked={obj.packed}
        onChange={() => {
          onToggleItem(obj.id);
        }}
      />
      <span style={obj.packed ? { textDecoration: "line-through" } : {}}>
        {obj.quantity} {obj.description}
      </span>
      <button
        onClick={() => {
          onDeleteItem(obj.id);
        }}
      >
        ❌
      </button>
    </li>
  );
}
