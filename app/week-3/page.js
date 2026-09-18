import Home from "../home";
import Item from "./item";
export default function page(){
    return (
        <main>
            <Home/>
            <h1>Shopping List</h1>
            <ul>
                <Item/>
            </ul>
        </main>
    )
}