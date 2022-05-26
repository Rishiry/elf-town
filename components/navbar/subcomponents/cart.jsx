import {
    Box,
    Flex,
    Image,
    SlideFade,
    Stack,
    Icon,
    useColorModeValue,
    VStack,
    Text,
    useDisclosure
} from "@chakra-ui/react";
import BounceWrapper from "components/bounceWrapper/bounceWrapper";

import {IoCart} from 'react-icons/io5'

export default function Cart() {
    return (
        <Flex
            height={"68px"}
            overflow='visable'
            width="max-content"
            mx="auto"
            onMouseLeave={null}>
            <VStack width={'100%'} spacing='0'>

                <BounceWrapper>
                    <Flex
                        display='flex'
                        background={useColorModeValue("linear-gradient(112.83deg, rgba(255, 255, 255, 0.82) 0%, rgba(255, 255, 255, 0.8" +
                            ") 110.84%)",
                    "linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) " +
                            "110.84%)")}
                        border={useColorModeValue("1.5px solid #FFFFFF", "1.5px solid rgba(255, 255, 255, 0.31)")}
                        boxShadow={useColorModeValue("0px 7px 23px rgba(0, 0, 0, 0.05)", "none")}
                        filter={useColorModeValue("none", "drop-shadow(0px 7px 23px rgba(0, 0, 0, 0.05))")}
                        backdropFilter="blur(21px)"
                        borderRadius="15px"
                        px="16px"
                        py="16px"
                        cursor={"pointer"}>
                        <Icon
                            as={IoCart}
                            color={useColorModeValue("gray.700", "gray.200")}
                            w="30px"
                            h="30px"
                            fontWeight="2000"/>
                    </Flex>
                </BounceWrapper>

            </VStack>

        </Flex>
    )
}