import styled from "styled-components";
import { color, fontSize } from "../cssPalette";

export const TabContainer = styled.div`
    grid-area: tablist;

    display: flex;

    width: 100%;
    height: 100%;

    overflow-y: hidden;
    overflow-x: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const Tab = styled.div<{ active?: boolean }>`
    display: flex;
    align-items: center;

    height: 100%;

    border-bottom: 2px solid ${({ active }) => (active ? "#CE7777" : "none")};

    border-right: 2px solid ${color.main};

    & ~ & {
        margin-left: 10px;
    }
`;

export const TabTitle = styled.div<{ ellipsis?: boolean }>`
    width: 150px;
    height: 100%;

    padding-left: 5px;

    font-size: ${fontSize.big};
    text-align: center;
    font-weight: bold;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ${({ ellipsis }) => (ellipsis ? "ellipsis" : "")};
`;

export const TabCloseButton = styled.button`
    width: 31px;
    height: 100%;

    text-align: center;
    vertical-align: middle;

    svg {
        width: 21px;
        height: 21px;
    }
`;
