export default function Item({ item }) {
  const { name, quantity, category } = item;
  return (
    <li className="flex items-center justify-between p-4 m-4 border border-slate-900 rounded-xl bg-slate-600 hover:border-slate-300 transition">
      <div>
        <h2 className="font-bold text-2xl capitalize">{name}</h2>
        <p className="text-md text-slate-300 capitalize">Category: {category}</p>
      </div>
      <p className="text-lg border p-1 rounded-lg">x {quantity}</p>
    </li>
  );
}
