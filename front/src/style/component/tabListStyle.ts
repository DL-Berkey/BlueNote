import styled from "styled-components";
import { color, fontSize } from "../cssPalette";

export const TabContainer = styled.div`
    grid-area: tablist;

    display: flex;

    width: 100%;
    height: 100%;

    padding-left: 40px;

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

    border-bottom: 2px solid ${({ active }) => (active ? color.sub : "none")};

    border-right: 2px solid ${color.main};

    & ~ & {
        margin-left: 10px;
    }
`;

export const TabTitle = styled.div<{ ellipsis?: boolean }>`
    width: 120px;
    height: 100%;

    padding-left: 5px;

    font-size: ${fontSize.medium};
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
    line-height: 21px;

    svg {
        width: 21px;
        height: 21px;
    }
`;
