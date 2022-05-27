import {Flex, Icon, useColorModeValue} from "@chakra-ui/react";
import BounceWrapper from "components/bounceWrapper/bounceWrapper";
import {useElf} from "lib/elf";
import { IoClose } from "react-icons/io5";

export default function CloseButton() {

    const elf = useElf()
    return (
        <Flex
            ml="auto"
            position={'fixed'}
            top="16px"
            left="50%"
            transform="translate(-50%, 0px)"
            width="1200px"
            maxW={{
            base: "90%",
            lg: "80%"
        }}
            height={"65px"}
            flexDirection={"row-reverse"}>
            <BounceWrapper>
                <Flex
                    display='flex'
                    background={'white'}
                    border={useColorModeValue("1.5px solid #FFFFFF", "1.5px solid rgba(255, 255, 255, 0.31)")}
                    boxShadow={useColorModeValue("0px 7px 23px rgba(0, 0, 0, 0.05)", "none")}
                    filter={useColorModeValue("none", "drop-shadow(0px 7px 23px rgba(0, 0, 0, 0.05))")}
                    borderRadius="15px"
                    px="16px"
                    py="16px"
                    cursor={"pointer"}
                    onClick={() => elf.session.setCartOpen(false)}>
                    <Icon
                        as={IoClose}
                        color={useColorModeValue("gray.700", "gray.200")}
                        w="30px"
                        h="30px"
                        fontWeight="2000"/>
                </Flex>
            </BounceWrapper>
        </Flex>

    )
}