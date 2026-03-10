import { css, html, LitElement } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import styles from "./type-text.css.js";
import { unsafeStatic } from "lit/static-html.js";

export class TypeText extends LitElement {

    static properties = {
        text: { 
            type: String 
        },
        size: {
            type: String,
        },
        weight: {
            type: String,
        },
        tag: {
            type: String,
        },
        variant: {
            type: String,
        },
        forInput: {
            type: String,
        }
    };

    constructor() {
        super();
        this.text = "";
        this.size = "";
        this.weight = "";
        this.tag = "";
        this.variant = "";
        this.forInput = "";
    }

    _renderText() {
        const styles = [
            `size-${this.size}`,
            `weight-${this.weight}`,
            `variant-${this.variant}`
        ];
        const forInput = this.forInput ? `for="input${this.forInput}"` : "";
        return html`${unsafeHTML(`<${this.tag} class="${styles.join(" ")}"${forInput}>${this.text}</${this.tag}>`)}`;
    }

    static get styles() {
        return styles;
    }

    render() {
        return html`
            ${this._renderText()}
        `;
    }
}


customElements.define("type-text", TypeText);