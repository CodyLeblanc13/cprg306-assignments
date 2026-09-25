import ItemList from "./item-list";

export default function Page() {
    return(
        <main className="mx-auto min-h-screen bg-rose-950 bg-blend-saturation p-4 border-2 rounded-3xl">
            <h1 className="text-center m-6 font-serif text-2xl text-amber-500">Shopping List</h1>
            <ItemList/>
        </main>
    )
}