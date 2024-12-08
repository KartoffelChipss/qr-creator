import "./ResultBox.scss";
import { FunctionalComponent } from "preact";
import { useEffect, useRef } from "preact/hooks";
import QRCodeStyling, { Options, DotType, CornerSquareType, CornerDotType, FileExtension } from "qr-code-styling";
import { ArrowNarrowBottomAlignment, Code } from "dazzle-icons/src";

interface ResultBoxProps {
    data: string;
    options?: Partial<Options>;
    logo?: string;
}

const ResultBox: FunctionalComponent<ResultBoxProps> = ({
                                                            data,
                                                            logo,
                                                            options = {},
                                                        }) => {
    const qrCodeRef = useRef<HTMLDivElement>(null);
    const qrCode = useRef<QRCodeStyling>();

    const defaultOptions: Partial<Options> = {
        width: 300,
        height: 300,
        margin: 15,
        type: "canvas",
        dotsOptions: {
            color: "#000000",
            type: "square" as DotType,
        },
        cornersSquareOptions: {
            color: "#000000",
            type: "square" as CornerSquareType,
        },
        cornersDotOptions: {
            color: "#000000",
            type: "square" as CornerDotType,
        },
        backgroundOptions: {
            color: "#ffffff",
        },
        imageOptions: {
            crossOrigin: "anonymous",
            margin: 5,
            hideBackgroundDots: true,
        }
    };

    const mergedOptions: Partial<Options> = { ...defaultOptions, ...options };

    useEffect(() => {
        if (!qrCode.current) {
            qrCode.current = new QRCodeStyling({
                ...mergedOptions,
                data,
                image: logo,
            });
        } else {
            qrCode.current.update({ data, ...mergedOptions });
        }

        if (qrCodeRef.current) {
            qrCodeRef.current.innerHTML = "";
            qrCode.current.append(qrCodeRef.current);
        }
    }, [data, options, logo]);

    const downloadImage = (format: FileExtension) => {
        if (qrCode.current) {
            qrCode.current.download({
                name: "qrcode",
                extension: format,
            });
        }
    };

    return (
        <div className="resultbox card">
            <div ref={qrCodeRef} className="qrCode"></div>

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