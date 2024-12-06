import * as Preact from "preact";
import {CustomInputProps} from "./interfaces.ts";
import "./customInputs.scss";

const UrlInput: Preact.FunctionalComponent<CustomInputProps> = ({ onInput }) => {
    return (
        <>
            <h3>URL QR-Code</h3>
            <p>Redirect to a website by scanning the QR-Code.</p>
            <input type="url"
                   placeholder="https://example.com"
                   onInput={(e) => onInput ? onInput(e.currentTarget.value) : null}
            />
        </>
    );
}

export default UrlInput;