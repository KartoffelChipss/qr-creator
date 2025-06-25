import { FunctionalComponent } from 'preact';
import { useState } from 'preact/hooks';

import UrlInput from './inputs/UrlInput.tsx';
import TextInput from './inputs/TextInput.tsx';
import EMailInput from './inputs/EMailInput.tsx';
import SmsInput from './inputs/SmsInput.tsx';
import WiFiInput from './inputs/WiFiInput.tsx';
import VCardInput from './inputs/VCardInput.tsx';
import CalendarInput from './inputs/CalendarInput.tsx';
import GeoInput from './inputs/GeoInput.tsx';
import EpcInput from './inputs/EpcInput.tsx';

type ContentSectionType =
    | 'url'
    | 'text'
    | 'vcard'
    | 'email'
    | 'sms'
    | 'wifi'
    | 'calendar'
    | 'geo'
    | 'epc';

const sectionConfig: {
    key: ContentSectionType;
    label: string;
    Component: FunctionalComponent<{ onInput: (input: string) => void }>;
}[] = [
    { key: 'url', label: 'URL', Component: UrlInput },
    { key: 'text', label: 'Text', Component: TextInput },
    { key: 'wifi', label: 'WiFi', Component: WiFiInput },
    { key: 'vcard', label: 'vCard', Component: VCardInput },
    { key: 'calendar', label: 'Calendar Event', Component: CalendarInput },
    { key: 'email', label: 'Email', Component: EMailInput },
    { key: 'sms', label: 'SMS', Component: SmsInput },
    { key: 'geo', label: 'Geo Location', Component: GeoInput },
    { key: 'epc', label: 'EPC', Component: EpcInput },
];

const ContentSection: FunctionalComponent<{
    onSubmit?: (input: string) => void;
}> = ({ onSubmit }) => {
    const [activeSection, setActiveSection] =
        useState<ContentSectionType>('url');

    const handleInput = (input: string) => {
        if (onSubmit) onSubmit(input);
    };

    const { Component: ActiveComponent } = sectionConfig.find(
        (section) => section.key === activeSection
    )!;

    return (
        <>
            <nav>
                {sectionConfig.map(({ key, label }) => (
                    <button
                        key={key}
                        onClick={() => setActiveSection(key)}
                        className={key === activeSection ? 'active' : ''}
                    >
                        {label}
                    </button>
                ))}
            </nav>

            <ActiveComponent onInput={handleInput} />
        </>
    );
};

export default ContentSection;
