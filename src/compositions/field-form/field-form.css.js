import { css } from "lit";

export default css`
    .field-form-container {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    input {
        padding: 1rem;
        font-size: 1.5rem;
        border-radius: 0.875rem;
        text-align: center;
    }

    type-text: nth-child(3) {
        --text-footer-align: center;
    }
    
`;