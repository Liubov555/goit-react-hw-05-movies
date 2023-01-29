import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';


export const Header = styled.header`
    display: flex;
    align-items: center;
    width: 100%;
    height: 70px;
    padding: 0 40px;
`;

export const Navigation = styled(NavLink)`
    display: flex;
    margin-bottom: 10px;
    font-weight: bolder;
    text-decoration: none;
    color: black;
`;