import styled from "styled-components";
import { color } from "../cssPalette";

export const HeaderContainer = styled.header`
    display: flex;
    flex-direction: column;
    align-items: end;

    width: 100%;
`;

export const Logo = styled.h1`
    margin: 0 10px 15px 0;

    color: ${color.main};

    span + span {
        color: ${color.sub};
    }
`;
