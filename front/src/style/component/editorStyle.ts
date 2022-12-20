import styled from "styled-components";
import { color, fontSize } from "../cssPalette";

export const EditorContainer = styled.div`
    width: 100%;
    height: 100%;
`;

export const ControlPanel = styled.div`
    width: 100%;
    height: 38px;

    border-radius: 5px;
`;

export const ControlButton = styled.button`
    width: calc((100% - 2px) / 3);
    height: 100%;

    font-size: ${fontSize.big};
    font-weight: bold;
    text-align: center;
    color: white;

    background-color: ${color.main};

    & ~ & {
        border-left: 1px solid white;
    }
`;

export const TitleInput = styled.input`
    width: 100%;
    height: 38px;

    font-size: ${fontSize.big};

    border: 2px solid ${color.main};
    border-radius: 5px 5px 0 0;

    outline: none;
`;

export const ContentInput = styled.textarea<{ enterCount?: number }>`
    width: 100%;
    height: 88%;

    font-size: ${fontSize.big};

    border: 2px solid ${color.main};
    border-radius: 0 0 5px 5px;
    border-top: none;

    overflow: visible;

    outline: none;
    resize: none;
`;
