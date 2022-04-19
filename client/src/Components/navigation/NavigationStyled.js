import styled from 'styled-components';

const NavigationContainer = styled.nav `
    .nav-list {
        display: flex;
        margin: 20px 0px;

        &_item {
            &:not(:last-child) {
                margin-right: 10px;
            }
        }
    }

    .nav-link {
        font-size: 17px;
        font-weight: 400;
        color: #d0bafa;
        outline: none;
        text-decoration: none;

        &:hover {
            color: #ffffff;
            text-shadow: 1px 1px 20px #fff, -1px -1px 20px #fff;
        }
    }
`;

export default NavigationContainer;