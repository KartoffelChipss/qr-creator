import Header from "../../layout/Header/Header.tsx";
import "./Main.scss";
import ResultBox from "../../features/result/ResultBox.tsx";
import {useState} from "preact/hooks";
import EditBox from "../../features/input/EditBox.tsx";

const Main = () => {
    const [displayString, setDisplayString] = useState<string>("https://j4n.net/");

    const handleInput = (input: string) => {
        setDisplayString(input);
    }

    return (
        <>
            <Header />
            <main class="main">
                <EditBox onSubmit={handleInput} />
                <ResultBox data={displayString} />
            </main>
        </>
    );
}

export default Main;