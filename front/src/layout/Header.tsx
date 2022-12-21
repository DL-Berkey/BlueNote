import TabList from "@/component/TabList";

import { HeaderContainer, Logo } from "@/style/layout/headerStyle";

const Header = () => {
    return (
        <HeaderContainer>
            <Logo>
                <span>Blue</span>
                <span>Note</span>
            </Logo>
            <TabList />
        </HeaderContainer>
    );
};

export default Header;
