import styled from "styled-components";
import { color } from "../cssPalette";

export const MenuContainer = styled.div`
    grid-area: menu;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 60px;
    height: 90px;

    border-radius: 0 0 25px 0;

    background-color: ${color.main};

    svg {
        width: 100%;
        height: calc((90px -3px) / 2);

        margin: 8px;

        font-size: 10px;

        fill: white;
    }
`;

export const Hr = styled.hr`
    width: 35px;
    height: 3px;

    background-color: white;

    border: 0;
`;
