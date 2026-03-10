import { LitElement, html } from "lit";
import { ICONS_PATH } from "../../utils.js";
import styles from "./type-icon.css.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

export class TypeIcon extends LitElement {

    static properties = {
        icon: { 
            type: String 
        },
    };

    constructor() {
        super();
        this.icon = "";
    }

    static get styles() {
        return styles;
    }

    _renderIcon() {
        const styles = [
            this.icon === "smartphone" ? "smartphone-icon" : "",
        ];
        return html`
            <img class="${styles.join(' ')}" src="${ICONS_PATH}/${this.icon}.svg" alt="${this.icon}">
        `;
    }

    update(changedProps) {
        super.update(changedProps);
        if (changedProps.has("icon")) {
            fetch(`../../assets/icons/${this.icon}.svg`)
                .then(r => r.text())
                .then(svg => { this._svgContent = svg; });
        }
    }

    render() {
        return html`
            ${this._renderIcon()}
        `;
    }

    /*render() {
        return html`
            <div class=${this.icon}>
                ${unsafeHTML(this._svgContent)}
            </div>`;
    }*/
}

customElements.define("type-icon", TypeIcon);