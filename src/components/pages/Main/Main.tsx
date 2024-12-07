import Header from "../../layout/Header/Header.tsx";
import "./Main.scss";
import ResultBox from "../../features/result/ResultBox.tsx";
import {useState} from "preact/hooks";
import EditBox from "../../features/input/EditBox.tsx";
import {Options} from "qr-code-styling";

const Main = () => {
    const [displayString, setDisplayString] = useState<string>("https://j4n.net/");
    const [styles, setStyles] = useState<Partial<Options>>({});

    return (
        <>
            <Header />
            <main class="main">
                <EditBox
                    onDataSubmit={setDisplayString}
                    onStyleSubmit={setStyles}
                />
                <ResultBox
                    data={displayString}
                    options={styles}
                />
            </main>
        </>
    );
}

export default Main;