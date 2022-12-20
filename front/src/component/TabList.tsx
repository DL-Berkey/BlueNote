import { IoMdClose } from "react-icons/io";

import { TabContainer, Tab, TabTitle, TabCloseButton } from "@/style/component/tabListStyle";

const TabList = () => {
    return (
        <TabContainer>
            <Tab active={true}>
                <TabTitle ellipsis={"환생한 고대왕국".length > 8 ? true : false}>
                    환생한 고대왕국
                </TabTitle>
                <TabCloseButton>
                    <IoMdClose />
                </TabCloseButton>
            </Tab>
            <Tab active={false}>
                <TabTitle
                    ellipsis={
                        "하필 회귀로 돌아온 곳이 여왕님의 욕실이었다.대왕국".length > 8
                            ? true
                            : false
                    }
                >
                    하필 회귀로 돌아온 곳이 여왕님의 욕실이었다.
                </TabTitle>
                <TabCloseButton>
                    <IoMdClose />
                </TabCloseButton>
            </Tab>
            <Tab active={false}>
                <TabTitle
                    ellipsis={"100부터 0으로 떨어지는 이세계 라이프".length > 8 ? true : false}
                >
                    100부터 0으로 떨어지는 이세계 라이프
                </TabTitle>
                <TabCloseButton>
                    <IoMdClose />
                </TabCloseButton>
            </Tab>
        </TabContainer>
    );
};

export default TabList;
