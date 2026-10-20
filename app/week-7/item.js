export default function Item({ name, quantity, category }) {
    return (
        <li className="mb-2 flex items-center justify-between gap-4 rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 shadow">
            <span className="flex-1 text-left font-medium text-white">
                {name}
            </span>
            <span className="rounded-md bg-pink-950 px-2 py-1 text-sm font-semibold text-pink-300">
                Qty: {quantity}
            </span>
            <span className="rounded-md bg-purple-950 px-2 py-1 text-xs font-medium capitalize text-purple-300">
                {category}
            </span>
        </li>
    );
}
