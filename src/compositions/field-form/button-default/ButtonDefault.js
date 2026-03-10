import { LitElement } from "lit";
import "../../components/type-text/TypeText.js";
import "../../../components/type-icon/TypeIcon";
import styles from "./button-default.css.js";

export class ButtonDefault extends LitElement {

    static properties = {
        text: { type: String },
    };

    constructor() {
        super();
        this.text = "Button";
    }

    static get styles() {
        return styles;
    }

    render() {
        return html`
            <button class="button-default-container">
                <type-text variant="alt" text="${this.text}" size="s" weight="bold" tag="span"></type-text>
                <type-icon name="arrow-right" size="s"></type-icon>
            </button>
        `;
    }

    
}

customElements.define("button-default", ButtonDefault);