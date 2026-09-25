import NewItem from "./new-item"
import BackHome from "../components/backhome"

export default function Page() {
    return (
        <main>
            <div className="flex justify-center flex-col items-center">
                <NewItem className="flex-1" />
                <BackHome className="flex-1"/>
            </div>
        </main>

    )
}