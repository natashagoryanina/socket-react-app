import styled from 'styled-components';

const HomeContainer = styled.section`
    color: #fff;

    .home {
        &-header {
            margin: 20px 0px;
        }

        &-text {
            :not(:last-child) {
                margin-bottom: 15px;
            }
        }
    }
`;

export default HomeContainer;