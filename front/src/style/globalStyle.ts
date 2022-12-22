import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-family: 'Noto Sans KR', sans-serif;

        color: #333;
    }

    button {
        all: unset;

        &:hover{
            cursor: pointer;
        }
    }

    input {
        outline: none;
        border: none;

        &:hover{
            cursor: pointer;
        }
    }
`;

export default GlobalStyle;
