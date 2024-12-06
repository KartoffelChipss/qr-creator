import {FunctionalComponent} from "preact";
import UrlInput from "./inputs/UrlInput.tsx";
import TextInput from "./inputs/TextInput.tsx";
import EMailInput from "./inputs/EMailInput.tsx";
import SmsInput from "./inputs/SmsInput.tsx";
import WiFiInput from "./inputs/WiFiInput.tsx";
import {useState} from "preact/hooks";
import VCardInput from "./inputs/VCardInput.tsx";

type ContentSection = "url" | "text" | "vcard" | "email" | "sms" | "wifi";

const ContentSection: FunctionalComponent<{ onSubmit?: (input: string) => void }> = ({ onSubmit }) => {
    const [section, setSection] = useState<ContentSection>("url");

    const submitData = (input: string) => {
        if (onSubmit) onSubmit(input);
    }

    return (
        <>
            <nav>
                <button
                    onClick={() => setSection("url")}
                    className={section === "url" ? "active" : ""}
                >
                    URL
                </button>
                <button
                    onClick={() => setSection("text")}
                    className={section === "text" ? "active" : ""}
                >
                    Text
                </button>
                <button
                    onClick={() => setSection("vcard")}
                    className={section === "vcard" ? "active" : ""}
                >
                    vCard
                </button>
                <button
                    onClick={() => setSection("email")}
                    className={section === "email" ? "active" : ""}
                >
                    Email
                </button>
                <button
                    onClick={() => setSection("sms")}
                    className={section === "sms" ? "active" : ""}
                >
                    SMS
                </button>
                <button
                    onClick={() => setSection("wifi")}
                    className={section === "wifi" ? "active" : ""}
                >
                    WiFi
                </button>
            </nav>

            {
                section === "url" && (
                    <UrlInput
                        onInput={(input) => submitData(input)}
                    />
                )
            }

            {
                section === "text" && (
                    <TextInput
                        onInput={(input) => submitData(input)}
                    />
                )
            }

            {
                section === "vcard" && (
                    <VCardInput
                        onInput={(input) => submitData(input)}
                    />
                )
            }

            {
                section === "email" && (
                    <EMailInput
                        onInput={(input) => submitData(input)}
                    />
                )
            }

            {
                section === "sms" && (
                    <SmsInput
                        onInput={(input) => submitData(input)}
                    />
                )
            }

            {
                section === "wifi" && (
                    <WiFiInput
                        onInput={(input) => submitData(input)}
                    />
                )
            }
        </>
    )
}

export default ContentSection;