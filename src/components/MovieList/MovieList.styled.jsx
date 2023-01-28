import styled from "@emotion/styled";
import { Link } from 'react-router-dom';

export const Title = styled.h1`
    margin-bottom: 25px;
`;

export const Item = styled.li`
    display: block;
    &:not(:last-child){
        margin-bottom: 10px;
    }
`;

export const LinkItem = styled(Link)`
    color: #888888;

 &:hover, :focus{
color: black;
    }

`;

export const List = styled.ul`
    padding: 0;
`