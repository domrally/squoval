import { SquovalElement } from '../modules/squoval-element.js';
export declare class SquovalButton extends SquovalElement implements HTMLButtonElement {
    constructor();
    get button(): HTMLButtonElement;
    get disabled(): boolean;
    get form(): HTMLFormElement | null;
    get formAction(): string;
    get formEnctype(): string;
    get formMethod(): string;
    get formNoValidate(): boolean;
    get formTarget(): string;
    get name(): string;
    get type(): string;
    get validationMessage(): string;
    get validity(): ValidityState;
    get willValidate(): boolean;
    get labels(): NodeListOf<HTMLLabelElement>;
    get value(): string;
    checkValidity(): boolean;
    reportValidity(): boolean;
    setCustomValidity(error: string): void;
}
