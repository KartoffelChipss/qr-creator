import * as Preact from "preact"
import "./EditBox.scss";
import Accordion from "../../common/Accordion/Accordion.tsx";
import ContentSection from "./ContentSection.tsx";
import {useState} from "preact/hooks";
import {ImageSquare, Palette, Pen, Shapes} from "dazzle-icons/src";
import {Options} from "qr-code-styling";
import ColorsSection, {ColorState} from "./ColorsSection.tsx";
import ShapesSection, {ShapesState} from "./ShapesSection.tsx";

interface InputSectionProps {
    onDataSubmit?: (input: string) => void;
    onLogoSubmit?: (url: string) => void;
    onStyleSubmit?: (styles: Partial<Options>) => void;
}

const EditBox: Preact.FunctionalComponent<InputSectionProps> = ({ onDataSubmit, onStyleSubmit }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const [colors, setColors] = useState<ColorState>({
        background: "#ffffff",
        dots: "#000000",
        cornerSquare: "#000000",
        cornerDot: "#000000",
    });
    const [shapes, setShapes] = useState<ShapesState>({
        margin: 15,
        dots: "square",
        cornerSquare: "square",
        cornerDot: "square",
    });

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const submitData = (input: string) => {
        if (onDataSubmit) onDataSubmit(input);
    }

    const updateStyles = (updatedColors?: ColorState, updatedShapes?: ShapesState) => {
        const currentColors = updatedColors || colors;
        const currentShapes = updatedShapes || shapes;

        if (onStyleSubmit) onStyleSubmit({
            margin: currentShapes.margin,
            backgroundOptions: {
                color: currentColors.background,
            },
            dotsOptions: {
                color: currentColors.dots,
                type: currentShapes.dots,
            },
            cornersSquareOptions: {
                color: currentColors.cornerSquare,
                type: currentShapes.cornerSquare,
            },
            cornersDotOptions: {
                color: currentColors.cornerDot,
                type: currentShapes.cornerDot,
            },
        });
    };

    const submitColors = (newColors: ColorState) => {
        setColors(newColors);
        updateStyles(newColors, shapes);
    }

    const submitShapes = (newShapes: ShapesState) => {
        setShapes(newShapes);
        updateStyles(colors, newShapes);
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
                title="Colors"
                icon={<Palette />}
                maxHeight={600}
                isOpen={openIndex === 1}
                onToggle={() => handleToggle(1)}
            >
                <ColorsSection onValueChange={submitColors} />
            </Accordion>
            <Accordion
                title="Shapes"
                icon={<Shapes />}
                maxHeight={600}
                isOpen={openIndex === 2}
                onToggle={() => handleToggle(2)}
            >
                <ShapesSection onValueChange={submitShapes} />
            </Accordion>
            <Accordion
                title="Logo"
                icon={<ImageSquare />}
                maxHeight={300}
                isOpen={openIndex === 3}
                onToggle={() => handleToggle(3)}
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