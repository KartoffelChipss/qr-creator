import {FunctionalComponent} from "preact";
import {CustomInputProps} from "./interfaces.ts";
import {useState} from "preact/hooks";
import {RefreshCcwAlt1} from "dazzle-icons";
import {LockAlt} from "dazzle-icons/src";

const WiFiInput: FunctionalComponent<CustomInputProps> = ({ onInput }) => {
    const [ssId, setSsId] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [security, setSecurity] = useState<"" | "WPA" | "WEP">("WPA");
    const [hidden, setHidden] = useState<boolean>(false);

    const generateWiFiString = () => {
        const escapeString = (str: string) => str.replace(/([;\\,])/g, '\\$1');

        let wifiString = `WIFI:T:${security};S:${escapeString(ssId)};P:${escapeString(password)};`;

        if (hidden) {
            wifiString += "H:true;";
        }

        wifiString += ";";

        return wifiString;
    };

    const handleSubmit = () => {
        if (onInput) onInput(generateWiFiString());
    }

    return (
        <>
            <h3>WiFi QR-Code</h3>
            <p>Generate a QR-Code that will connect to a WiFi network with the given SSID and Password.</p>

            <div className="horizontalInputs">
                <div className="inputBox grow-1">
                    <label>SSID</label>
                    <input
                        type="text"
                        onChange={e => setSsId(e.currentTarget.value)}
                        placeholder={"Network Name"}
                    />
                </div>

                <div className="inputBox checkbox">
                    <input
                        type="checkbox"
                        onChange={e => setHidden(e.currentTarget.checked)}
                        id={"hidden"}
                    />
                    <label for={"hidden"}>Hidden Network</label>
                </div>
            </div>

            <label>Password</label>
            <input
                type="text"
                onChange={e => setPassword(e.currentTarget.value)}
                placeholder={"Network Password"}
            />

            <label>Encryption</label>
            <div className="radioList">
                <div className="inputBox checkbox">
                    <input
                        type={"radio"}
                        name={"security"}
                        id={"encryption_none"}
                        value={"none"}
                        checked={security === ""}
                        onInput={() => setSecurity("")}
                    />
                    <label htmlFor={"encryption_none"}>None</label>
                </div>
                <div className="inputBox checkbox">
                    <input
                        type={"radio"}
                        name={"security"}
                        value={"WEP"}
                        id={"encryption_wep"}
                        checked={security === "WEP"}
                        onInput={() => setSecurity("WEP")}
                    />
                    <label htmlFor={"encryption_wep"}>WEP (Older networks)</label>
                </div>
                <div className="inputBox checkbox">
                    <input
                        type={"radio"}
                        name={"security"}
                        value={"WPA"}
                        id={"encryption_wpa"}
                        checked={security === "WPA"}
                        onInput={() => setSecurity("WPA")}
                    />
                    <label htmlFor={"encryption_wpa"}>WPA / WPA2 (Modern networks)</label>
                </div>
            </div>

            <div className="securityConcern">
                <LockAlt />
                <span>Your data isn't sent to any server. It's only used to generate the QR-Code.</span>
            </div>

            <div className="flex gap">
                <button
                    onClick={() => handleSubmit()}
                    className={"blue"}
                >
                    <RefreshCcwAlt1/>
                    Generate
                </button>
            </div>
        </>
    );
};

export default WiFiInput;