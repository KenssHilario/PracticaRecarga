import { html, LitElement } from "lit";
import "../../components/type-icon/TypeIcon.js";
import "../../components/type-text/TypeText.js";
import "../../compositions/field-form/FieldForm.js";
import "../../compositions/field-form/button-default/ButtonDefault.js";
import "../../compositions/field-form/separator-footer/SeparatorFooter.js";


import styles from "./register-phone.css.js";

export class RegisterPhone extends LitElement {

    static properties = {
        _phoneNumber: {
            type: String,
        }
    };

    constructor() {
        super();
        this._phoneNumber = "";
    }

    static get styles() {
        return styles;
    }

    _handlePhoneNumberChange(e) {
        this._phoneNumber = e.detail.phoneNumber;
    }

    render() {
        return html`
            <div class="register-phone-container">
                <div> class="register-phone-header">
                    <type-icon icon="smartphone"></type-icon>
                    <type-text 
                        text="Recarga tu celular" 
                        size="m" 
                        weight="bold"
                        tag="h1"
                    ></type-text>
                    <type-text 
                        text="Ingresa el número al que deseas recargar." 
                        size="s" 
                        tag="span"
                    ></type-text>
                </div>
                <field-form 
                    aria-label="Ingresar número de teléfono"
                    label="Número de teléfono"
                    placeholder="000 000 000"
                    type="text"
                    idInput="phone"
                    textFooter="0/9 dígitos"
                    @phone-number-change=${this._handlePhoneNumberChange}
                ></field-form>
                <button-default>
                    text="Continuar"
                    @click=${() => alert(`Número de teléfono ingresado: ${this._phoneNumber}`)}
                </button-default>
                <separator-footer 
                    text="Las recargas se procesan de inmediato. Asegurate de ingresar el número correcto">
                </separator-footer>
            </div>
        `;
    }

}

customElements.define("register-phone", RegisterPhone);