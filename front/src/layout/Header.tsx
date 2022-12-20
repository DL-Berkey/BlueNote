import TabList from "@/component/TabList";

import { HeaderContainer, Logo } from "@/style/layout/headerStyle";

const Header = () => {
    return (
        <HeaderContainer>
            <Logo>BlueNote</Logo>
            <TabList />
        </HeaderContainer>
    );
};

export default Header;
