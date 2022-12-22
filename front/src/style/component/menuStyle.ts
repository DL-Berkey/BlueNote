import styled from "styled-components";
import { color } from "../cssPalette";

export const MenuContainer = styled.aside`
    position: fixed;

    width: 50px;
    height: 80px;

    border-radius: 0 0 25px 0;

    background-color: ${color.main};

    z-index: 1;

    box-shadow: 0.5px 0.5px 1px 0 gray;

    transition: all, 0.3s;

    &.activate {
        width: 250px;
        height: 93vh;

        padding: 0 3% 0 3%;
    }
`;

export const MenuNav = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 0;
    right: 0;

    width: 50px;
    height: 80px;

    svg {
        width: 50px;
        height: 23px;

        margin: 8px;

        font-size: 10px;

        fill: white;
    }
`;

export const Button = styled.button<{ hidden?: boolean }>`
    /* display: ${({ hidden }) => (hidden ? "none" : "inline")}; */

    visibility: ${({ hidden }) => hidden && "hidden"};

    width: 50px;
    height: 38.5px;

    text-align: center;
    line-height: 80%;

    svg {
        width: 80%;
        height: 80%;

        margin: 0;

        fill: white;
    }
`;

export const Hr = styled.hr`
    width: 35px;
    height: 3px;

    background-color: white;

    border: 0;
`;

export const SearchBar = styled.input`
    width: 0;
    height: 38.5px;

    margin-top: 3px;

    transition: all, 0.3s;
    &.activate {
        width: 190px;
    }
`;

export const AssetContainer = styled.section`
    display: none;

    width: 100%;
    height: 80vh;

    margin-top: 30px;

    border: 2px solid white;
    border-radius: 0 0 25px 0;

    &.activate {
        display: block;
    }
`;
