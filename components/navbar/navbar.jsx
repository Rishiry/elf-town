import {Flex} from "@chakra-ui/react";
import Cart from "./subcomponents/cart";
import MainNav from "./subcomponents/main";
import RegionSwitch from "./subcomponents/regionSwitch";
import Search from "./subcomponents/search";


export default function Navbar() {

    return (
        <Flex
            position={'fixed'}
            top="16px"
            left="50%"
            transform="translate(-50%, 0px)"
            width="1200px"
            maxW="90%">

        <MainNav />
        <Search />
        <RegionSwitch />
        <Cart />

        </Flex>

    );
}
