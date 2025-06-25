import { FunctionalComponent } from 'preact';
import { CustomInputProps } from './interfaces.ts';
import { useState } from 'preact/hooks';
import { RefreshCcwAlt1 } from 'dazzle-icons/src';

const EpcInput: FunctionalComponent<CustomInputProps> = ({ onInput }) => {
    const [bic, setBic] = useState<string>('');
    const [beneficiary, setBeneficiary] = useState<string>('');
    const [iban, setIban] = useState<string>('');
    const [amount, setAmount] = useState<string>('');
    const [remittance, setRemittance] = useState<string>('');
    const [purposeCode, setPurposeCode] = useState<string>('');
    const [beneficiaryToOriginator, setBeneficiaryToOriginator] =
        useState<string>('');

    const handleSubmit = () => {
        if (onInput)
            onInput(
                `BCD\n001\n1\nSCT\n${bic}\n${beneficiary}\n${iban}\nEUR${amount}\n${remittance}\n${purposeCode}\n${beneficiaryToOriginator}`
            );
    };

    return (
        <>
            <h3>EPC QR-Code</h3>
            <p>
                Generate a QR code for a European Payment Code (EPC)
                transaction.
            </p>

            <label>BIC/SWIFT</label>
            <input
                type={'text'}
                value={bic}
                placeholder={'DEKKBBBBBBBBCCCCCCCCCC'}
                onInput={(e) => setBic(e.currentTarget.value)}
            />

            <label>Beneficiary Name</label>
            <input
                type={'text'}
                value={beneficiary}
                placeholder={'John Doe'}
                onInput={(e) => setBeneficiary(e.currentTarget.value)}
            />

            <label>IBAN</label>
            <input
                type={'text'}
                value={iban}
                placeholder={'DE89370400440532013000'}
                onInput={(e) => setIban(e.currentTarget.value)}
            />

            <label>Amount (EUR)</label>
            <input
                type={'text'}
                value={amount}
                placeholder={'100.00'}
                onInput={(e) => setAmount(e.currentTarget.value)}
            />

            <label>Remittance Information</label>
            <input
                type={'text'}
                value={remittance}
                placeholder={'Invoice 12345'}
                onInput={(e) => setRemittance(e.currentTarget.value)}
            />

            <label>
                Purpose Code <span>(Optional)</span>
            </label>
            <input
                type={'text'}
                placeholder={'SALA'}
                value={purposeCode}
                maxLength={4}
                onInput={(e) => setPurposeCode(e.currentTarget.value)}
            />

            <label>
                Beneficiary to Originator Information <span>(Optional)</span>
            </label>
            <input
                type={'text'}
                placeholder={'John Doe, Invoice 12345'}
                value={beneficiaryToOriginator}
                onInput={(e) =>
                    setBeneficiaryToOriginator(e.currentTarget.value)
                }
            />

            <button onClick={() => handleSubmit()} className={'blue'}>
                <RefreshCcwAlt1 />
                Generate
            </button>
        </>
    );
};

export default EpcInput;
