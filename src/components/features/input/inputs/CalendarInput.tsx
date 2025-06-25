import { FunctionalComponent } from 'preact';
import { CustomInputProps } from './interfaces.ts';
import { useState } from 'preact/hooks';
import { RefreshCcw } from 'lucide-preact';

const formatToICalDate = (localDate: string): string => {
    const date = new Date(localDate);
    return date
        .toISOString()
        .replace(/[-:]/g, '')
        .replace(/\.\d{3}Z$/, 'Z');
};

const CalendarInput: FunctionalComponent<CustomInputProps> = ({ onInput }) => {
    const [summary, setSummary] = useState<string>('');
    const [dtStart, setDTStart] = useState<string>('');
    const [dtEnd, setDTEnd] = useState<string>('');
    const [location, setLocation] = useState<string>('');

    const handleSubmit = () => {
        if (onInput)
            onInput(
                `BEGIN:VEVENT\nSUMMARY:${summary}\nDTSTART:${dtStart}\nDTEND:${dtEnd}\nLOCATION:${location}\nEND:VEVENT`
            );
    };

    return (
        <>
            <h3>Calendar Event</h3>
            <p>
                Generate a QR-Code that will add a calendar event with the given
                details to the user's calendar.
            </p>
            <label>Summary</label>
            <input
                type={'text'}
                onInput={(e) => setSummary(e.currentTarget.value)}
                placeholder={'This is a calendar event'}
            />

            <label>Start Date & Time</label>
            <input
                type="datetime-local"
                onInput={(e) =>
                    setDTStart(formatToICalDate(e.currentTarget.value))
                }
            />

            <label>End Date & Time</label>
            <input
                type="datetime-local"
                onInput={(e) =>
                    setDTEnd(formatToICalDate(e.currentTarget.value))
                }
            />

            <label>Location</label>
            <input
                type={'text'}
                onInput={(e) => setLocation(e.currentTarget.value)}
                placeholder={'Office, Conference Room 1'}
            />

            <button onClick={() => handleSubmit()} className={'blue'}>
                <RefreshCcw />
                Generate
            </button>
        </>
    );
};

export default CalendarInput;
