import * as Preact from 'preact';
import './EditBox.scss';
import Accordion from '../../common/Accordion/Accordion.tsx';
import ContentSection from './ContentSection.tsx';
import { useState } from 'preact/hooks';
import { Options } from 'qr-code-styling';
import ColorsSection, { ColorState } from './ColorsSection.tsx';
import ShapesSection, { ShapesState } from './ShapesSection.tsx';
import LogoSection, { LogoState } from './LogoSection.tsx';
import { Image, Paintbrush, Pencil, ShapesIcon } from 'lucide-preact';

interface InputSectionProps {
    onDataSubmit?: (input: string) => void;
    onLogoSubmit?: (url: string) => void;
    onStyleSubmit?: (styles: Partial<Options>) => void;
}

const EditBox: Preact.FunctionalComponent<InputSectionProps> = ({
    onDataSubmit,
    onStyleSubmit,
}) => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const [colors, setColors] = useState<ColorState>({
        background: '#ffffff',
        dots: '#000000',
        cornerSquare: '#000000',
        cornerDot: '#000000',
    });
    const [shapes, setShapes] = useState<ShapesState>({
        margin: 15,
        dots: 'square',
        cornerSquare: 'square',
        cornerDot: 'square',
    });
    const [logo, setLogo] = useState<LogoState>({
        url: undefined,
        hideBackgroundDots: true,
        size: 0.5,
        margin: 7,
    });

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const submitData = (input: string) => {
        if (onDataSubmit) onDataSubmit(input);
    };

    const updateStyles = (
        updatedColors?: ColorState,
        updatedShapes?: ShapesState,
        updatedLogo?: LogoState
    ) => {
        const currentColors = updatedColors || colors;
        const currentShapes = updatedShapes || shapes;
        const currentLogo = updatedLogo || logo;

        if (onStyleSubmit)
            onStyleSubmit({
                image: currentLogo.size <= 0 ? undefined : currentLogo.url,
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
                imageOptions: {
                    margin: currentLogo.margin,
                    imageSize: currentLogo.size,
                    hideBackgroundDots: currentLogo.hideBackgroundDots,
                    crossOrigin: 'anonymous',
                    saveAsBlob: true,
                },
            });
    };

    const submitColors = (newColors: ColorState) => {
        setColors(newColors);
        updateStyles(newColors, shapes, logo);
    };

    const submitShapes = (newShapes: ShapesState) => {
        setShapes(newShapes);
        updateStyles(colors, newShapes, logo);
    };

    const submitLogo = (newLogo: LogoState) => {
        setLogo(newLogo);
        updateStyles(colors, shapes, newLogo);
    };

    return (
        <div className={'inputSection card'}>
            <Accordion
                title="Content"
                icon={<Pencil />}
                maxHeight={1100}
                isOpen={openIndex === 0}
                onToggle={() => handleToggle(0)}
            >
                <ContentSection onSubmit={submitData} />
            </Accordion>
            <Accordion
                title="Colors"
                icon={<Paintbrush />}
                maxHeight={900}
                isOpen={openIndex === 1}
                onToggle={() => handleToggle(1)}
            >
                <ColorsSection onValueChange={submitColors} />
            </Accordion>
            <Accordion
                title="Shapes"
                icon={<ShapesIcon />}
                maxHeight={450}
                isOpen={openIndex === 2}
                onToggle={() => handleToggle(2)}
            >
                <ShapesSection onValueChange={submitShapes} />
            </Accordion>
            <Accordion
                title="Logo"
                icon={<Image />}
                maxHeight={200}
                isOpen={openIndex === 3}
                onToggle={() => handleToggle(3)}
            >
                <LogoSection onValueChange={submitLogo} />
            </Accordion>
        </div>
    );
};

export default EditBox;
