import "./ResultBox.scss";
import { FunctionalComponent } from "preact";
import { useEffect, useRef } from "preact/hooks";
import QRCode from "qrcode";
import {ArrowNarrowBottomAlignment, Code} from "dazzle-icons/src";

interface ResultBoxProps {
    data: string;
}

const ResultBox: FunctionalComponent<ResultBoxProps> = ({ data }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (canvasRef.current) {
            const parentWidth = (canvasRef.current.parentElement?.offsetWidth || 200) - 30 * 2;
            canvasRef.current.width = parentWidth;

            QRCode.toCanvas(canvasRef.current, data, {
                width: parentWidth,
                margin: 2,
            }).catch(err => console.error("Error generating QR code:", err));
        }
    }, [data]);

    const downloadImage = (format: "png" | "svg") => {
        if (format === "png" && canvasRef.current) {
            const link = document.createElement("a");
            link.download = "qrcode.png";
            link.href = canvasRef.current.toDataURL("image/png");
            link.click();
        } else if (format === "svg") {
            QRCode.toString(data, { type: "svg" })
                .then(svgString => {
                    const blob = new Blob([svgString], { type: "image/svg+xml" });
                    const link = document.createElement("a");
                    link.download = "qrcode.svg";
                    link.href = URL.createObjectURL(blob);
                    link.click();
                })
                .catch(err => console.error("Error generating SVG:", err));
        }
    };

    return (
        <div className="resultbox card">
            <canvas ref={canvasRef} className="qrCode"></canvas>

            <span className={"resultString"}>{data}</span>

            <div className="btns">
                <button className={"blue"} onClick={() => downloadImage("png")}>
                    <ArrowNarrowBottomAlignment />
                    Download PNG
                </button>
                <button onClick={() => downloadImage("svg")}>
                    <Code />
                    Download SVG
                </button>
            </div>
        </div>
    );
};

export default ResultBox;