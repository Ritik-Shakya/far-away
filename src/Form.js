import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setdescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(event) {
    event.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    onAddItems(newItem);
    console.log(newItem);

    setQuantity(1);
    setdescription("");
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select
        value={quantity}
        onChange={(e) => {
          setQuantity((prev) => {
            return Number(e.target.value);
          });
        }}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((x) => {
          return (
            <option value={x} key={x}>
              {x}
            </option>
          );
        })}
      </select>
      <input
        onChange={(e) => {
          setdescription(e.target.value);
        }}
        type="text"
        placeholder="Items..."
        value={description}
      />
      <button>Add</button>
    </form>
  );
}
