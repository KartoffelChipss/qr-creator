import { FunctionalComponent, JSX } from 'preact';
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
import {
    Calendar,
    Globe,
    IdCard,
    Landmark,
    Mail,
    MapPin,
    MessageCircle,
    Type,
    Wifi,
} from 'lucide-preact';
import './inputs/customInputs.scss';

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
    icon?: JSX.Element;
    Component: FunctionalComponent<{ onInput: (input: string) => void }>;
}[] = [
    {
        key: 'url',
        label: 'URL',
        Component: UrlInput,
        icon: <Globe />,
    },
    { key: 'text', label: 'Text', Component: TextInput, icon: <Type /> },
    { key: 'wifi', label: 'WiFi', Component: WiFiInput, icon: <Wifi /> },
    { key: 'vcard', label: 'vCard', Component: VCardInput, icon: <IdCard /> },
    {
        key: 'calendar',
        label: 'Calendar Event',
        Component: CalendarInput,
        icon: <Calendar />,
    },
    { key: 'email', label: 'Email', Component: EMailInput, icon: <Mail /> },
    { key: 'sms', label: 'SMS', Component: SmsInput, icon: <MessageCircle /> },
    {
        key: 'geo',
        label: 'Geo Location',
        Component: GeoInput,
        icon: <MapPin />,
    },
    { key: 'epc', label: 'EPC', Component: EpcInput, icon: <Landmark /> },
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
                {sectionConfig.map(({ key, label, icon }) => (
                    <button
                        key={key}
                        onClick={() => setActiveSection(key)}
                        className={
                            'sectionBtn ' +
                            (key === activeSection ? 'active' : '')
                        }
                    >
                        {icon}
                        {label}
                    </button>
                ))}
            </nav>

            <ActiveComponent onInput={handleInput} />
        </>
    );
};

export default ContentSection;
