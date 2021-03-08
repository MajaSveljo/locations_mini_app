import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        @font-face {
        font-family: 'Lato';
        src: local('Lato'), local('Lato'),
        url(../Assets/fonts/Lato-Regular) format('ttf'),
        font-weight: 400;
        font-style: normal;
    }
        color: #001122;
    }
`;

export default GlobalStyles;
