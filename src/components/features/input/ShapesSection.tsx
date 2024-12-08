import { CornerDotType, CornerSquareType, DotType } from "qr-code-styling";
import { FunctionalComponent } from "preact";
import { useState } from "preact/hooks";
import Select from "react-select";
import CustomSlider from "../../common/sliders/CustomSlider.tsx";

export interface ShapesState {
    margin: number;
    dots: DotType;
    cornerSquare: CornerSquareType;
    cornerDot: CornerDotType;
}

interface ShapesSectionProps {
    onValueChange?: (shapes: ShapesState) => void;
}

const dotOptions: { value: DotType; label: string }[] = [
    { value: "square", label: "Square" },
    { value: "dots", label: "Dots" },
    { value: "rounded", label: "Rounded" },
    { value: "classy", label: "Classy" },
    { value: "classy-rounded", label: "Classy Rounded" },
    { value: "extra-rounded", label: "Extra Rounded" },
];

const cornerSquareOptions: { value: CornerSquareType; label: string }[] = [
    { value: "square", label: "Square" },
    { value: "dot", label: "Dot" },
    { value: "extra-rounded", label: "Extra Rounded" },
];

const cornerDotOptions: { value: CornerDotType; label: string }[] = [
    { value: "square", label: "Square" },
    { value: "dot", label: "Dot" },
];

const ShapesSection: FunctionalComponent<ShapesSectionProps> = ({ onValueChange }) => {
    const [shapes, setShapes] = useState<ShapesState>({
        margin: 15,
        dots: "square",
        cornerSquare: "square",
        cornerDot: "square",
    });

    const handleValueChange = (shapes: ShapesState) => {
        if (onValueChange) onValueChange(shapes);
    };

    const updateShapes = (newShapes: ShapesState) => {
        setShapes(newShapes);
        handleValueChange(newShapes);
    };

    return (
        <>
            <label className={"shapePicker"}>
                <span className={"label"}>Margin</span>
                <CustomSlider
                    defaultValue={shapes.margin}
                    min={0}
                    max={50}
                    step={1}
                    onUserInput={(value) => updateShapes({...shapes, margin: value})}
                />
            </label>
            <label className={"shapePicker"}>
                <span className={"label"}>Dots</span>
                <Select
                    className="basic-single"
                    classNamePrefix="custom-select"
                    value={dotOptions.find(option => option.value === shapes.dots)}
                    isDisabled={false}
                    isLoading={false}
                    isClearable={false}
                    isRtl={false}
                    isSearchable={false}
                    name="dots"
                    options={dotOptions}
                    onChange={(newShape) =>
                        updateShapes({...shapes, dots: (newShape as any).value as DotType})
                    }
                    styles={{
                        menu: (base) => ({
                            ...base,
                            zIndex: 1000,
                        }),
                        menuList: (base) => ({
                            ...base,
                            maxHeight: '250px',
                            overflowY: 'auto',
                        }),
                    }}
                />
            </label>

            <label className={"shapePicker"}>
                <span className={"label"}>Corner Square</span>
                <Select
                    className="basic-single"
                    classNamePrefix="custom-select"
                    value={cornerSquareOptions.find(option => option.value === shapes.cornerSquare)}
                    isDisabled={false}
                    isLoading={false}
                    isClearable={false}
                    isRtl={false}
                    isSearchable={false}
                    name="cornerSquares"
                    options={cornerSquareOptions}
                    onChange={(newShape) =>
                        updateShapes({...shapes, cornerSquare: (newShape as any).value as CornerSquareType})
                    }
                />
            </label>

            <label className={"shapePicker"}>
                <span className={"label"}>Corner Dot</span>
                <Select
                    className="basic-single"
                    classNamePrefix="custom-select"
                    value={cornerDotOptions.find(option => option.value === shapes.cornerDot)}
                    isDisabled={false}
                    isLoading={false}
                    isClearable={false}
                    isRtl={false}
                    isSearchable={false}
                    name="cornerDots"
                    options={cornerDotOptions}
                    onChange={(newShape) =>
                        updateShapes({...shapes, cornerDot: (newShape as any).value as CornerDotType})
                    }
                    menuPlacement={"top"}
                />
            </label>
        </>
    );
};

export default ShapesSection;