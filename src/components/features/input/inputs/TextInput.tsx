import * as Preact from "preact";
import {CustomInputProps} from "./interfaces.ts";
import "./customInputs.scss";

const TextInput: Preact.FunctionalComponent<CustomInputProps> = ({ onInput }) => {
    return (
        <>
            <h3>Text QR-Code</h3>
            <p>Enter the text you want to encode in the QR-Code</p>
            <input type="text"
                   placeholder="Some text"
                   onInput={(e) => onInput ? onInput(e.currentTarget.value) : null}
            />
        </>
    );
}

export default TextInput;