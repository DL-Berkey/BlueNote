import styled from "styled-components";
import { color } from "../cssPalette";

export const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: fixed;

    width: 50px;
    height: 80px;

    border-radius: 0 0 25px 0;

    background-color: ${color.main};

    z-index: 1;

    box-shadow: 0.5px 0.5px 1px 0 gray;

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
