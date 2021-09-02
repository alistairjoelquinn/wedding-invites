import styled from 'styled-components';

const HeaderStyles = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid black;
    padding: 2rem;
`;

const Header: React.FC = () => (
    <HeaderStyles>
        <h1>Project Header</h1>
    </HeaderStyles>
);

export default Header;
