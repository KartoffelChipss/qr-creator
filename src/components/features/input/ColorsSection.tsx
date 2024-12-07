import {FunctionalComponent} from "preact";
import {useState} from "preact/hooks";
import {HexAlphaColorPicker, HexColorInput} from "react-colorful";
import {useDebouncyEffect} from "use-debouncy";

export interface ColorState {
    background: string;
    dots: string;
    cornerSquare: string;
    cornerDot: string;
}

interface ColorsSectionProps {
    onValueChange?: (colors: ColorState) => void;
}

const ColorsSection: FunctionalComponent<ColorsSectionProps> = ({ onValueChange }) => {
    const [colors, setColors] = useState<ColorState>({
        background: "#ffffff",
        dots: "#000000",
        cornerSquare: "#000000",
        cornerDot: "#000000",
    });

    const handleValueChange = (colors: ColorState) => {
        if (onValueChange) onValueChange(colors);
    }

    useDebouncyEffect(() => handleValueChange(colors), 1, [colors])

    return (
        <div>
            <div class="pickers">
                <label className={"colorPicker"}>
                    <span className={"label"}>Background</span>
                    <span className="picker">
                    <HexAlphaColorPicker color={colors.background}
                                    onChange={(c) => setColors({...colors, background: c})}/>
                    <HexColorInput color={colors.background}
                                   onChange={(c) => setColors({...colors, background: c})}/>
                </span>
                </label>
                <label className={"colorPicker"}>
                    <span className={"label"}>Dots</span>
                    <span className="picker">
                    <HexAlphaColorPicker color={colors.dots}
                                    onChange={(c) => setColors({...colors, dots: c})}/>
                    <HexColorInput color={colors.dots}
                                   onChange={(c) => setColors({...colors, dots: c})}/>
                </span>
                </label>
            </div>

            <div class="pickers">
                <label className={"colorPicker"}>
                    <span className={"label"}>Corner Square</span>
                    <span className="picker">
                    <HexAlphaColorPicker color={colors.cornerSquare}
                                    onChange={(c) => setColors({...colors, cornerSquare: c})}/>
                    <HexColorInput color={colors.cornerSquare}
                                   onChange={(c) => setColors({...colors, cornerSquare: c})}/>
                </span>
                </label>
                <label className={"colorPicker"}>
                    <span className={"label"}>Corner Dots</span>
                    <span className="picker">
                    <HexAlphaColorPicker color={colors.cornerDot}
                                    onChange={(c) => setColors({...colors, cornerDot: c})}/>
                    <HexColorInput color={colors.cornerDot}
                                   onChange={(c) => setColors({...colors, cornerDot: c})}/>
                </span>
                </label>
            </div>
        </div>
    );
}

export default ColorsSection;