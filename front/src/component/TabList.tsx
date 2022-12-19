import { IoMdClose } from "react-icons/io";

import { TabContainer, Tab, TabTitle, TabCloseButton } from "@/style/component/tabListStyle";

const TabList = () => {
    return (
        <TabContainer>
            <Tab active={true}>
                <TabTitle>환생한 고대왕국</TabTitle>
                <TabCloseButton>
                    <IoMdClose />
                </TabCloseButton>
            </Tab>
            <Tab active={false}>
                <TabTitle>눈을 떠보니 내가 백만장자?</TabTitle>
                <TabCloseButton>X</TabCloseButton>
            </Tab>
            <Tab active={false}>
                <TabTitle>음 제목 뭘로하지?</TabTitle>
                <TabCloseButton>X</TabCloseButton>
            </Tab>
        </TabContainer>
    );
};

export default TabList;
