import { FunctionalComponent } from "preact";
import { useState } from "preact/hooks";
import CustomSlider from "../../common/sliders/CustomSlider.tsx";
import {TriangleExclamation} from "dazzle-icons/src";

export interface LogoState {
    url?: string;
    hideBackgroundDots: boolean;
    size: number;
    margin: number;
}

interface LogoSectionProps {
    onValueChange?: (logoState: LogoState) => void;
}

const LogoSection: FunctionalComponent<LogoSectionProps> = ({ onValueChange }) => {
    const [logoState, setLogoState] = useState<LogoState>({
        url: undefined,
        hideBackgroundDots: true,
        size: 0.5,
        margin: 7,
    });

    const handleFileChange = (event: Event) => {
        const input = event.target as HTMLInputElement;
        const file = input.files ? input.files[0] : null;

        if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {
                const dataUrl = reader.result as string;
                setLogoState((prevState) => ({
                    ...prevState,
                    url: dataUrl,
                }));

                if (onValueChange) onValueChange({
                    ...logoState,
                    url: dataUrl,
                });
            };

            reader.readAsDataURL(file);
        }
    };

    const updateLogo = (newState: LogoState) => {
        setLogoState(newState);
        if (onValueChange) onValueChange(newState);
    };

    return (
        <>
            <input
                type="file"
                onChange={handleFileChange}
                accept={"image/*"}
            />
            <div class="horizontalSliders">
                <label className={"shapePicker"}>
                    <span className={"label"}>Size</span>
                    <CustomSlider
                        defaultValue={logoState.size}
                        min={0}
                        max={1}
                        step={.1}
                        onUserInput={(value) => updateLogo({...logoState, size: value})}
                    />
                </label>
                <label className={"shapePicker"}>
                    <span className={"label"}>Margin</span>
                    <CustomSlider
                        defaultValue={logoState.margin}
                        min={0}
                        max={15}
                        step={1}
                        onUserInput={(value) => updateLogo({...logoState, margin: value})}
                    />
                </label>
            </div>
            {logoState.size > 0.5 && (
                <span className={"iconText"}>
                <TriangleExclamation />
                <span>When using a large logo, the QR code may become unreadable. Please ensure that the QR code is still scannable.</span>
            </span>
            )}
        </>
    );
};

export default LogoSection;