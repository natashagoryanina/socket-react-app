import styled from 'styled-components';

const HeaderContainer = styled.header `
    border-bottom: 1px solid #fff;

    .header-link {
        font-size: 20px;
        font-weight: 700;
        color: #d0bafa;;
        outline: none;
        text-decoration: none;

        &:hover {
            color: #ffffff;
            text-shadow: 1px 1px 20px #fff, -1px -1px 20px #fff;
        }
    }
`;

export default HeaderContainer;