import * as Preact from "preact"
import "./EditBox.scss";
import Accordion from "../../common/Accordion/Accordion.tsx";
import ContentSection from "./ContentSection.tsx";
import {useState} from "preact/hooks";
import {Palette, Pen} from "dazzle-icons/src";

interface InputSectionProps {
    onSubmit?: (input: string) => void;
}

const EditBox: Preact.FunctionalComponent<InputSectionProps> = ({ onSubmit }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const submitData = (input: string) => {
        if (onSubmit) onSubmit(input);
    }

    return (
        <div className={"inputSection card"}>
            <Accordion
                title="Content"
                icon={<Pen />   }
                maxHeight={900}
                isOpen={openIndex === 0}
                onToggle={() => handleToggle(0)}
            >
                <ContentSection onSubmit={submitData} />
            </Accordion>
            <Accordion
                title="Style"
                icon={<Palette />}
                maxHeight={300}
                isOpen={openIndex === 1}
                onToggle={() => handleToggle(1)}
            >
                <p>This is the content for Accordion 2.</p>
                <p>This is the content for Accordion 2.</p>
                <p>This is the content for Accordion 2.</p>
                <p>This is the content for Accordion 2.</p><p>This is the content for Accordion 2.</p><p>This is the
                content for Accordion 2.</p><p>This is the content for Accordion 2.</p>
                <p>This is the content for Accordion 2.</p>
                <p>This is the content for Accordion 2.</p><p>This is the content for Accordion 2.</p><p>This is the
                content for Accordion 2.</p><p>This is the content for Accordion 2.</p><p>This is the content for
                Accordion 2.</p>


            </Accordion>
        </div>
    );
}

export default EditBox;