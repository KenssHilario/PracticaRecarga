import { LitElement } from "lit";
import styles from "./feature-recharge-phone.css.js";
import { RegisterPhone } from "./steps/register-phone/RegisterPhone.js";

export class FeatureRechargePhone extends LitElement {
    static get properties() {
        return {


            name: { 
                type: String, 
            },
        };
    }

    constructor() {
        super();
        this.name = "Cells";
    }

    static get styles() {
        return [
            styles,
        ];
    }

    render() {
        return html`
        <register-phone></register-phone>
        `;
    }
}