import { LitElement, nothing } from "lit";
import "../../components/type-text/TypeText.js";

import styles from "./field-form.css.js";

export class FieldForm extends LitElement {

    static properties = {
        label: {
            type: String,
        },
        placeholder: {
            type: String,
        },
        textFooter: {
            type: String,
        },
        idInput: {
            type: String
        },
        _countNumbers: {
            type: Number,
        },
        _phoneNumber: {
            type: String,
        },
        _hazLetters: {
            type: Boolean,
        }
    };

    constructor() {
        super();
        this.label = "";
        this.placeholder = "";
        this.type = "";
        this.textFooter = "";
        this.idInput = "";
        this.countNumbers = 0;
        this._phoneNumber = "";
        this._hazLetters = false;
    }

    static get styles() {
        return styles;
    }

    _handleInputChange(e) {
        const inputValue = e.target.value;
        this._hasLetters = /[a-zA-Z]/.test(inputValue);
        this._phoneNumber = inputValue.replace(/\D/g, "");
        this._countNumbers = this._phoneNumber.length;
        this.dispatchEvent(new CustomEvent("phone-number-change", {
            detail: {
                phoneNumber: this._phoneNumber
            }
        }));
    }

    render() {
        return html`
        <div class="field-form-container">
            <type-text 
                tag="label"
                forInput="input${this.idInput}"
                text="${this.label}"
                size="xs"
            ></type-text>
            <input 
                id="input${this.idInput}" 
                .type="${this.type}" 
                placeholder="${this.placeholder}"
                @input=${this._handleInputChange}
                maxlength="9"
                .value=${this._phoneNumber}
                @input=${this._handleInputChange}
            >
            <type-text 
                text="${this._countNumbers}/9 dígitos"
                size="xs"
                tag="span"
            ></type-text>
            <type-text 
                text="${this._countNumbers}/9 dígitos"
                size="xs"
                tag="span"
            ></type-text>
            ${
                this._hazLetters ? html`
                    <type-text 
                        text="El número no puede contener letras"
                        size="xs"
                        variant="error"
                        tag="span"
                    ></type-text>
                ` : nothing
            }
        </div>
        `;
    }
}