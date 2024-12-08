import {FunctionalComponent} from "preact";
import {useState} from "preact/hooks";
import "./CustomSlider.scss";

interface CustomSliderProps {
    defaultValue: number;
    onUserInput?: (value: number) => void;
    min: number;
    max: number;
    step?: number;
}

const CustomSlider: FunctionalComponent<CustomSliderProps> = ({ defaultValue, onUserInput, min, max, step }) => {
    const [value, setValue] = useState(defaultValue);

    const handleValueChange = (newValue: number) => {
        if (onUserInput) onUserInput(newValue);
        setValue(newValue);
    }

    return (
        <div className={"customSlider"}>
            <input
                type="range"
                min={min}
                max={max}
                defaultValue={defaultValue}
                onChange={(e) => handleValueChange(parseInt(e.currentTarget.value))}
                step={step}
            />
            <div class="value">
                {value}
            </div>
        </div>
    );
};

export default CustomSlider;