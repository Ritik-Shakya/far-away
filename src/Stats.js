export default function Stats({ items }) {
  if (items.length === 0)
    return (
      <footer className="stats">
        <em>Make a list and Start Packing💼</em>
      </footer>
    );
  const numitems = items.length;
  const packedItems = items.filter((i) => i.packed === true);
  const numpacked = packedItems.length;
  const percentager = (numpacked * 100) / numitems;
  return (
    <footer className="stats">
      <em>
        {percentager === 100
          ? "You are fully packed ✈️🌍."
          : `🎒You have  ${numitems} items on your list, and you have already packed ${numpacked} (${percentager}%)`}
        {/* You have {numitems} items on your list, and you already packed
          {numpacked} ({percentager}%) */}
      </em>
    </footer>
  );
}
