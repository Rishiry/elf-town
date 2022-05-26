import {
    Stack,
    Text,
    Icon,
    Menu,
    MenuList,
    Flex,
    Box,
    HStack,
    useColorModeValue,
    Link,
    useDisclosure
} from "@chakra-ui/react";

import {GoChevronDown} from "react-icons/go";

function Item() {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Stack
            direction="row"
            spacing="4px"
            align="center"
            color="#fff"
            fontWeight="bold"
            onMouseEnter={onOpen}
            onMouseLeave={onClose}
            cursor="pointer"
            position="relative">
            <Text fontSize="sm" color={useColorModeValue("gray.700", "gray.200")}>
                Item
            </Text>
            <Icon
                as={GoChevronDown}
                color={useColorModeValue("gray.700", "gray.200")}
                w="14px"
                h="14px"
                fontWeight="2000"/>
            <Menu isOpen={isOpen}>
                <MenuList
                    p="22px"
                    minW="50px"
                    cursor="default"
                    borderRadius="15px"
                    position="absolute"
                    top="30px"
                    left="-10px"></MenuList>
            </Menu>
        </Stack>
    )
}

export default function MainNav() {
    return (
        <Flex
            background={useColorModeValue("linear-gradient(112.83deg, rgba(255, 255, 255, 0.82) 0%, rgba(255, 255, 255, 0.8" +
                ") 110.84%)",
        "linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) " +
                "110.84%)")}
            border={useColorModeValue("1.5px solid #FFFFFF", "1.5px solid rgba(255, 255, 255, 0.31)")}
            boxShadow={useColorModeValue("0px 7px 23px rgba(0, 0, 0, 0.05)", "none")}
            filter={useColorModeValue("none", "drop-shadow(0px 7px 23px rgba(0, 0, 0, 0.05))")}
            backdropFilter="blur(21px)"
            borderRadius="15px"
            px="44px"
            py="22px"
            mx="auto"
            alignItems="center"
            display={{base: "none", md: "none", lg: "none", xl: "flex"}}
            height={"100%"}
>
            <Flex
                w="100%"
                justifyContent={{
                base: "start",
                lg: "space-between"
            }}>
                <Box
                    ms={{
                    base: "auto",
                    lg: "0px"
                }}
                    display={{
                    lg: "none"
                }}></Box>
                <HStack
                    display={{
                    base: "none",
                    lg: "flex"
                }}
                    spacing="12px">

                    <Item/>
                    <Item/>
                    <Item/>

                </HStack>
            </Flex>
        </Flex>
    )
}