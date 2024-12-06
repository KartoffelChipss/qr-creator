import {FunctionalComponent} from "preact";
import {CustomInputProps} from "./interfaces.ts";
import {useState} from "preact/hooks";
import {RefreshCcwAlt1} from "dazzle-icons/src";

const SmsInput: FunctionalComponent<CustomInputProps> = ({ onInput }) => {
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const handleSubmit = () => {
        if (onInput) onInput(`sms:${phoneNumber}?body=${message}`);
    }

    return (
        <>
            <h3>SMS QR-Code</h3>
            <p>Generate a QR code that will open the SMS app with the phone number and message prefilled.</p>
            <label>Phone Number</label>
            <input
                type={"tel"}
                placeholder={"Phone Number"}
                onInput={(e) => setPhoneNumber(e.currentTarget.value)}
            />

            <label>Message</label>
            <textarea
                placeholder={"Message"}
                onInput={(e) => setMessage(e.currentTarget.value)}
            ></textarea>

            <button
                onClick={() => handleSubmit()}
                className={"blue"}
            >
                <RefreshCcwAlt1 />
                Generate
            </button>
        </>
    );
}

export default SmsInput;