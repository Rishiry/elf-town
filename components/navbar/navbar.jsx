import {Flex} from "@chakra-ui/react";
import NewLogo from "./subcomponents/newLogo";
import Cart from "./subcomponents/cart";
import Logo from "./subcomponents/logo";
import MainNav from "./subcomponents/main";
import RegionSwitch from "./subcomponents/regionSwitch";
import Search from "./subcomponents/search";


export default function Navbar() {

    return (
        <Flex
            zIndex={99}
            position={'fixed'}
            top="16px"
            left="50%"
            transform="translate(-50%, 0px)"
            width="1200px"
            maxW={{base: "90%", lg: "80%"}}
            height={"65px"}>

        <NewLogo />
        <MainNav />
        <Search />
        <RegionSwitch />
        <Cart />

        </Flex>

    );
}
