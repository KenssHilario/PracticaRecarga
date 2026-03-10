import { css } from "lit";

export default css`
    .separator-footer {
        possition: absolute;
        bottom: 0;
        hr {
            width: 100%;
            border: none;
            border-top: 1px solid #ccc;
            margin: 16px 0;
        }
        text-align: center;
    }
`;