import styled from "styled-components";
import { color, fontSize } from "../cssPalette";

export const EditorContainer = styled.div`
    width: 100%;
    height: 100%;
`;

export const TitleInput = styled.input`
    width: 100%;
    height: 38px;

    font-size: ${fontSize.big};

    /* border: 1px solid ${color.main};
    border-radius: 5px 5px 0 0; */
    border: none;
    border-top: 2px solid ${color.main};

    outline: none;
`;

export const ControlPanel = styled.div`
    width: 100%;
    height: 26px;
`;

export const ControlButton = styled.button`
    width: calc((100% - 2px) / 3);
    height: 100%;

    font-size: ${fontSize.medium};
    font-weight: bold;
    text-align: center;
    color: white;

    background-color: ${color.main};

    & ~ & {
        border-left: 1px solid white;
    }
`;

export const ContentInput = styled.textarea<{ enterCount?: number }>`
    width: 100%;
    height: calc(95% - 64px);

    font-size: ${fontSize.big};

    /* border: 1px solid ${color.main}; */
    /* border-radius: 0 0 5px 5px; */
    border: none;

    overflow: visible;

    outline: none;
    resize: none;
`;
