import {
    Flex,
    Icon,
    useColorModeValue,
    Text,
    VStack,
    Box,
    Image,
    Spacer,
    SlideFade,
    useDisclosure
} from "@chakra-ui/react";
import BounceWrapper from "components/bounceWrapper/bounceWrapper";
import {constructImageURL} from "lib/helper";
import Link from "next/link";

function MenuItem({text}) {
    return (
            <BounceWrapper>
                <Link href={`/`}>
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
                        cursor={'pointer'}
                        alignItems="center"
                        px={{
                        base: "30px",
                        md: "22px",
                        lg: "44px"
                    }}
                        py="22px">
                        <Text
                            mx={"4px"}
                            fontSize="sm"
                            mt="3px"
                            fontWeight="bold"
                            display="flex"
                            lineHeight="100%"
                            justifyContent="center"
                            alignItems="center"
                            casing={"capitalize"}
                            color={useColorModeValue("gray.700", "gray.200")}>
                            {text}
                        </Text>

                    </Flex>
                </Link>

            </BounceWrapper>
    )
}

function Menu() {
    return (
        <Box display={{
            base: 'none',
            lg: 'flex'
        }}>
            <MenuItem text="Careers"/>
            <MenuItem text="Influencers"/>
            <MenuItem text="Dropshipping"/>
        </Box>
    )
}

function Main({listTrigger}) {

    return (
        <Box height={"100%"}>
            <BounceWrapper>
                <Link href={`/`}>
                    <Flex
                        px="16px"
                        background={useColorModeValue("linear-gradient(112.83deg, rgba(255, 255, 255, 0.82) 0%, rgba(255, 255, 255, 0.8" +
                            ") 110.84%)",
                    "linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) " +
                            "110.84%)")}
                        border={useColorModeValue("1.5px solid #FFFFFF", "1.5px solid rgba(255, 255, 255, 0.31)")}
                        boxShadow={useColorModeValue("0px 7px 23px rgba(0, 0, 0, 0.05)", "none")}
                        filter={useColorModeValue("none", "drop-shadow(0px 7px 23px rgba(0, 0, 0, 0.05))")}
                        backdropFilter="blur(21px)"
                        borderRadius="15px"
                        cursor={'pointer'}
                        alignItems="center"
                        height={"65px"}
                        onMouseEnter={listTrigger.onOpen}>
                

                    </Flex>
                </Link>

            </BounceWrapper>
        </Box>

    )

}

export default function Logo() {

    const {isOpen, onOpen, onClose} = useDisclosure()

    return (
        <Flex
            height={"100%"}
            overflow='visable'
            width="max-content"
            mx="auto"
            onMouseLeave={onClose}>
            <VStack width={'100%'} spacing='0'>

                <Main
                    listTrigger={{
                    isOpen,
                    onOpen,
                    onClose
                }}/>

                <SlideFade
                    in={isOpen}
                    unmountOnExit
                    display={{
                    base: 'none',
                    lg: 'flex'
                }}>

                    <Menu/>
                </SlideFade>

            </VStack>

        </Flex>
    )
}