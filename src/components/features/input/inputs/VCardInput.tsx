import { FunctionalComponent } from 'preact';
import { CustomInputProps } from './interfaces.ts';
import { useState } from 'preact/hooks';
import { RefreshCcw } from 'lucide-preact';

const VCardInput: FunctionalComponent<CustomInputProps> = ({ onInput }) => {
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [mobile, setMobile] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [fax, setFax] = useState<string>('');
    const [street, setStreet] = useState<string>('');
    const [city, setCity] = useState<string>('');
    const [postalCode, setPostalCode] = useState<string>('');
    const [state, setState] = useState<string>('');
    const [country, setCountry] = useState<string>('');
    const [website, setWebsite] = useState<string>('');

    const generateVCardString = (): string => {
        let vCard = `BEGIN:VCARD
VERSION:3.0
FN:${firstName} ${lastName}`;

        if (mobile) vCard += `\nTEL;TYPE=cell:${mobile}`;
        if (phone) vCard += `\nTEL;TYPE=voice:${phone}`;
        if (fax) vCard += `\nTEL;TYPE=fax:${fax}`;
        if (street || city || state || postalCode || country) {
            vCard += `\nADR;TYPE=home:;;${street};${city};${state};${postalCode};${country}`;
        }
        if (website) vCard += `\nURL:${website}`;

        vCard += `\nEND:VCARD`;

        return vCard;
    };

    const handleSubmit = () => {
        if (onInput) onInput(generateVCardString());
    };

    return (
        <>
            <h3>vCard QR-Code</h3>
            <p>
                Generate a QR-Code that will open the default contact app with
                the given contact information
            </p>

            <div className="horizontalInputs">
                <div className="inputBox grow-1">
                    <label>First Name</label>
                    <input
                        type="text"
                        onChange={(e) => setFirstName(e.currentTarget.value)}
                        placeholder={'John'}
                    />
                </div>

                <div className="inputBox grow-1">
                    <label>Last Name</label>
                    <input
                        type="text"
                        onChange={(e) => setLastName(e.currentTarget.value)}
                        placeholder={'Doe'}
                    />
                </div>
            </div>

            <div className="space"></div>

            <label>Mobile number</label>
            <input
                type="text"
                onChange={(e) => setMobile(e.currentTarget.value)}
                placeholder={'Mobile number'}
            />

            <div className="horizontalInputs">
                <div className="inputBox grow-1">
                    <label>Phone number</label>
                    <input
                        type="text"
                        onChange={(e) => setPhone(e.currentTarget.value)}
                        placeholder={'Phone number'}
                    />
                </div>

                <div className="inputBox grow-1">
                    <label>Fax number</label>
                    <input
                        type="text"
                        onChange={(e) => setFax(e.currentTarget.value)}
                        placeholder={'Fax number'}
                    />
                </div>
            </div>

            <div className="space"></div>

            <label>Street</label>
            <input
                type="text"
                onChange={(e) => setStreet(e.currentTarget.value)}
                placeholder={'Street'}
            />

            <div className="horizontalInputs">
                <div className="inputBox grow-1">
                    <label>City</label>
                    <input
                        type="text"
                        onChange={(e) => setCity(e.currentTarget.value)}
                        placeholder={'City'}
                    />
                </div>

                <div className="inputBox grow-1">
                    <label>Postal code</label>
                    <input
                        type="text"
                        onChange={(e) => setPostalCode(e.currentTarget.value)}
                        placeholder={'Postal code'}
                    />
                </div>
            </div>

            <div className="horizontalInputs">
                <div className="inputBox grow-1">
                    <label>State</label>
                    <input
                        type="text"
                        onChange={(e) => setState(e.currentTarget.value)}
                        placeholder={'State'}
                    />
                </div>

                <div className="inputBox grow-1">
                    <label>Country</label>
                    <input
                        type="text"
                        onChange={(e) => setCountry(e.currentTarget.value)}
                        placeholder={'Country'}
                    />
                </div>
            </div>

            <div className="space"></div>

            <label>Website</label>
            <input
                type="text"
                onChange={(e) => setWebsite(e.currentTarget.value)}
                placeholder={'https://example.com'}
            />

            <div className="space"></div>

            <button onClick={() => handleSubmit()} className={'blue'}>
                <RefreshCcw />
                Generate
            </button>
        </>
    );
};

export default VCardInput;
