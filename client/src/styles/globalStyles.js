import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    body {
        padding: 30px 30px;
        background-image: linear-gradient(
            to right,
            #6b0279,
            #00095c,
            rgb(49, 0, 161)
        );
        font-family: 'Noto Sans', sans-serif;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
`; 

export default GlobalStyles;