import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`
    html {
        font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 10px;
    }
    body {
        font-size: 1.5rem;
        line-height: 2;
    }
    p, li {
        letter-spacing: 0.5px;
    }
    h1, h2, h3, h4, h5, h6 {
        font-weight: normal;
        margin: 0;
    }
`;

export default Typography;
