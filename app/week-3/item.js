export default function Item({ item }) {
  const { name, quantity, category } = item;
  return (
    <ul className="my-4 w-full rounded-xl border border-indigo-300/15 bg-slate-900/60 p-4 shadow-lg shadow-slate-950/20">
      <li className="text-2xl font-bold text-white">{name}</li>
      <li className="mt-1 text-lg text-slate-300">
        Buy {quantity} in {category}
      </li>
    </ul>
  );
}
