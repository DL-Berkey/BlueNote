import { useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";

import {
    MenuContainer,
    MenuNav,
    Button,
    Hr,
    SearchBar,
    AssetContainer,
} from "@/style/component/menuStyle";

const Menu = () => {
    const [activate, setActivate] = useState(false);

    const onClickMenu = () => {
        setActivate((prev) => !prev);
    };

    return (
        <MenuContainer className={activate ? "activate" : ""}>
            <MenuNav>
                <Button onClick={onClickMenu}>
                    <MenuIcon />
                </Button>
                <Hr />
                <Button>
                    <SearchIcon />
                </Button>
            </MenuNav>
            <Button hidden={!activate}>
                <PersonIcon />
            </Button>
            <SearchBar className={activate ? "activate" : ""} />
            <AssetContainer className={activate ? "activate" : ""} />
        </MenuContainer>
    );
};

export default Menu;
