import {
    EditorContainer,
    ControlPanel,
    ControlButton,
    TitleInput,
    ContentInput,
} from "@/style/component/editorStyle";

const Editor = () => {
    return (
        <EditorContainer>
            <TitleInput />
            <ControlPanel>
                <ControlButton>블럭</ControlButton>
                <ControlButton>링크</ControlButton>
                <ControlButton>저장</ControlButton>
            </ControlPanel>
            <ContentInput />
        </EditorContainer>
    );
};

export default Editor;
