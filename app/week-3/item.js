export default function Item({ item }) {
  const { name, quantity, category } = item;
  return (
    <li className="bg-slate-800 p-3 m-3 flex flex-col">
      <h2 className="text-2xl font-bold ">{name}</h2>
      <p>
        Buy {quantity} in {category}
      </p>
    </li>
  );
}
