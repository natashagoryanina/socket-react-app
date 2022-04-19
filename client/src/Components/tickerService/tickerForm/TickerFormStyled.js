import styled from 'styled-components';

const TickerFormContainer = styled.div`
    .form {
        display: flex;
        flex-direction: column;

        &-label {
            margin-bottom: 20px;
            color: #fff;
            font-size: inherit; 
        }

        &-input {
            margin-left: 10px;
            font-family: inherit; 
            font-size: 400; 
            line-height: inherit;
            color: #2e0972;
            background-color: #eadfff;
            border: 1px solid #2e0972;
            border-radius: 0.4rem;
        }

        &-select {
            margin-left: 10px;
            font-family: inherit; 
            font-size: 400; 
            line-height: inherit;
            color: #2e0972;
            background-color: #eadfff;;
            border: 1px solid #2e0972;
            border-radius: 0.4rem;
        }
    }

    .submit-btn {
        padding: 0 12px;
        margin-bottom: 20px;
        background:#d0bafa;
        color: #2e0972;
        border: 0;
        border-radius: 12px;
        cursor: pointer;
        display: inline-block;
        font-family: 'Noto Sans', sans-serif;
        font-size: 13px;
        font-weight: 500;
        line-height: 2;
        outline: transparent;
        text-align: center;
        text-decoration: none;
        transition: box-shadow .2s ease-in-out;
    }

    .submit-btn:not([disabled]):hover {
        box-shadow: 0 0 .25rem rgba(0, 0, 0, 0.5), -.125rem -.125rem 1rem rgba(255, 255, 255, 0.5), .125rem .125rem 1rem rgba(255, 255, 255, 0.5);
    }
`;

export default TickerFormContainer;