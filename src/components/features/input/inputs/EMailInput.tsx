import { FunctionalComponent } from 'preact';
import { CustomInputProps } from './interfaces.ts';
import { useState } from 'preact/hooks';
import { RefreshCcw } from 'lucide-preact';

const EMailInput: FunctionalComponent<CustomInputProps> = ({ onInput }) => {
    const [email, setEmail] = useState<string>('');
    const [subject, setSubject] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const handleSubmit = () => {
        if (onInput)
            onInput(`mailto:${email}?subject=${subject}&body=${message}`);
    };

    return (
        <>
            <h3>E-Mail QR-Code</h3>
            <p>
                Generate a QR-Code that will open the default mail client with
                the given E-Mail, Subject and Message
            </p>
            <label>E-Mail</label>
            <input
                type={'email'}
                onInput={(e) => setEmail(e.currentTarget.value)}
                placeholder={'john.doe@mail.com'}
            />

            <label>Subject</label>
            <input
                type={'text'}
                onInput={(e) => setSubject(e.currentTarget.value)}
                placeholder={'Subject'}
            />

            <label>Message</label>
            <textarea
                onInput={(e) => setMessage(e.currentTarget.value)}
                placeholder={'Message'}
            ></textarea>

            <button onClick={() => handleSubmit()} className={'blue'}>
                <RefreshCcw />
                Generate
            </button>
        </>
    );
};

export default EMailInput;
