import TabList from "@/component/TabList";

import { HeaderContainer, Blue, Note } from "@/style/layout/headerStyle";

const Header = () => {
    return (
        <HeaderContainer>
            <div>
                <Blue>Blue</Blue>
                <Note>Note</Note>
            </div>
            <TabList />
        </HeaderContainer>
    );
};

export default Header;
