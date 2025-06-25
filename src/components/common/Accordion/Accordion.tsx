import { FunctionalComponent, VNode } from 'preact';
import './Accordion.scss';
import { ChevronDown } from 'lucide-preact';

interface AccordionProps {
    title: string;
    icon?: VNode;
    maxHeight?: number;
    children: preact.ComponentChildren;
    isOpen: boolean;
    onToggle: () => void;
}

const Accordion: FunctionalComponent<AccordionProps> = ({
    title,
    icon,
    maxHeight = 400,
    children,
    isOpen,
    onToggle,
}) => {
    return (
        <div className="accordion">
            <button className="accordion__header" onClick={onToggle}>
                <span class="iconText">
                    {icon}
                    <span>{title}</span>
                </span>
                <span className={`accordion__icon ${isOpen ? 'open' : ''}`}>
                    <ChevronDown />
                </span>
            </button>
            <div
                className={`accordion__content ${isOpen ? 'open' : ''}`}
                style={{ maxHeight: isOpen ? `${maxHeight}px` : '0' }}
            >
                <div className="accordion__body">{children}</div>
            </div>
        </div>
    );
};

export default Accordion;
