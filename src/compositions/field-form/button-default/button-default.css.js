import { css } from "lit";

export default css`

:host {
    --button-default-margin-top: 0;
}

.button-default-container {
    cursor: pointer;
    width: 100%;
    height: 4rem;
    background-color: #432dd7;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    border-radius: 1rem;
    margin-top: var(--button-default-margin-top);
}
`;