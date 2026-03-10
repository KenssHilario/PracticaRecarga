import { LitElement, html } from "lit";
import "../../../components/type-text/TypeText.js";
import styles from "./separator-footer.css.js";

export class SeparatorFooter extends LitElement {

    static properties = {
        text: { type: String },
    };

    constructor() {
        super();
        this.text = "";
    }

    static get styles() {
        return styles;
    }

    render() {
        return html`
            <footer class="separator-footer">
                <hr />
                <type-text 
                    text=${this.text} 
                    size="small"
                    tag="footer">
                </type-text>
            </footer>
        `;
    }
}

customElements.define("separator-footer", SeparatorFooter);