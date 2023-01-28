import styled from "@emotion/styled";
import { Link } from 'react-router-dom';


export const Container = styled.div`
    margin-bottom: 10px;
`;

export const LinkItem = styled(Link)`
    display: inline-flex;
    align-items: center;
    padding: 3px 10px;
    background-color: blue;
    font-size: 14px;
    color: white;

    border-radius: 5px;
    border: 1px solid lightcoral;

    &:hover, :focus{
        color: yellow;
    }
`;


