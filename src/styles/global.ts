import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body, input, textarea, button {
        font-family: 'Poppins', 'Montserrat', sans-serif;
        font-weight: 500;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 700;
    }

    li {
        font-weight: 600;
    }

    :root {
        --orange: #FA4A0C;
        
        --text-title: #252B42;
        --text: #737373;
        --text-white: #F6F6F6;
    }
`;
