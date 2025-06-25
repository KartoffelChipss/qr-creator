import { FunctionalComponent } from 'preact';
import { CustomInputProps } from './interfaces.ts';
import { useState } from 'preact/hooks';
import { RefreshCcwAlt1 } from 'dazzle-icons/src';
import MapPicker from '../../../common/MapPicker.tsx';
import './customInputs.scss';

const GeoInput: FunctionalComponent<CustomInputProps> = ({ onInput }) => {
    const [latitude, setLatitude] = useState<number>(37.2431);
    const [longitude, setLongitude] = useState<number>(-115.793);

    const handleSubmit = () => {
        if (onInput) onInput(`geo:${latitude},${longitude}`);
    };

    return (
        <>
            <h3>Location QR-Code</h3>
            <p>
                Generate a QR code that will open a map application at the
                specified coordinates.
            </p>

            <div className="coordsBox">
                <div className="inputBox">
                    <label>Latitude</label>
                    <input
                        value={latitude.toString()}
                        type="number"
                        placeholder="Latitude"
                        onInput={(e) =>
                            setLatitude(Number(e.currentTarget.value) || 0)
                        }
                    />
                </div>

                <div className="inputBox">
                    <label>Longitude</label>
                    <input
                        value={longitude.toString()}
                        type="number"
                        placeholder="Longitude"
                        onInput={(e) =>
                            setLongitude(Number(e.currentTarget.value) || 0)
                        }
                    />
                </div>
            </div>

            <MapPicker
                coords={
                    latitude && longitude
                        ? { lat: latitude, lng: longitude }
                        : undefined
                }
                onSelect={({ lat, lng }) => {
                    setLatitude(lat);
                    setLongitude(lng);
                }}
            />

            <button onClick={() => handleSubmit()} className={'blue'}>
                <RefreshCcwAlt1 />
                Generate
            </button>
        </>
    );
};

export default GeoInput;
