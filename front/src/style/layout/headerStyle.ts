import styled from "styled-components";
import { color } from "../cssPalette";

export const HeaderContainer = styled.header`
    display: flex;
    flex-direction: column;
    align-items: end;

    width: 100%;
`;

export const Blue = styled.h1`
    display: inline-block;

    margin: 0 0 15px 0;

    color: ${color.main};
`;

export const Note = styled.h1`
    display: inline-block;

    margin: 0 10px 15px 0;

    color: ${color.sub};
`;
