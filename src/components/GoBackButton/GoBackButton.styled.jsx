import styled from "@emotion/styled";

export const Container = styled.div`
    margin-bottom: 10px;
`;

export const Link = styled.link`
    display: inline-flex;
    align-items: center;
    padding: 3px 10px;
    background-color: lightblue;
    font-size: 14px;
    color: white;

    border-radius: 5px;
    border: 1px solid lightcoral;

    &:hover, :focus{
        color: yellow;
    }
`;


