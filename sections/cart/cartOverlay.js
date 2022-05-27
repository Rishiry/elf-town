import {
    Box,
    Flex,
    Icon,
    Portal,
    Slide,
    useColorModeValue,
    Center,
    Spacer
} from "@chakra-ui/react"

import FreeDeliveryCard from "components/cards/freeDeliveryCard"
import {useElf} from "lib/elf"

import CartTable from "./cartTable"

export default function CartOverlay() {
    const elf = useElf()

    return (
        <Portal>
            <Slide
                direction='bottom'
                in={elf.session.cartOpen}
                style={{
                zIndex: 15
            }}
                unmountOnExit>
                <Box
                    overflowY="auto"
                    overflowX={"clip"}
                    background={useColorModeValue("linear-gradient(112.83deg, rgba(255, 255, 255, 0.82) 0%, rgba(255, 255, 255, 0.8" +
                        ") 110.84%)",
                "linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) " +
                        "110.84%)")}
                    border={useColorModeValue("1.5px solid #FFFFFF", "1.5px solid rgba(255, 255, 255, 0.31)")}
                    boxShadow={useColorModeValue("0px 7px 23px rgba(0, 0, 0, 0.05)", "none")}
                    filter={useColorModeValue("none", "drop-shadow(0px 7px 23px rgba(0, 0, 0, 0.05))")}
                    backdropFilter="blur(21px)"
                    height={'100vh'}>

                    <Center width={"100vw"} height={"100vh"}>

                        <Flex
                            direction={{
                            base: "column",
                            lg: "row"
                        }}
                            width={{
                            base: "95vw",
                            lg: "80vw"
                        }}
                            pt={{
                            base: "15vh",
                            md: 0
                        }}>
                            <Box
                                background={'white'}
                                border={useColorModeValue("1.5px solid #FFFFFF", "1.5px solid rgba(255, 255, 255, 0.31)")}
                                boxShadow={useColorModeValue("0px 7px 23px rgba(0, 0, 0, 0.05)", "none")}
                                filter={useColorModeValue("none", "drop-shadow(0px 7px 23px rgba(0, 0, 0, 0.05))")}
                                borderRadius="20px"
                                width={{
                                base: "95vw",
                                lg: "50vw"
                            }}
                                height={{
                                base: "fit-content",
                                lg: "70vh"
                            }}>
                                <CartTable/>
                            </Box>
                            <Spacer/>
                            <Box
                                width={{
                                base: "95vw",
                                md: "95vw",
                                lg: "25vw"
                            }}
                                height={{base: 'fit-content', lg: "70vh"}}>

                                <Flex width={'100%'} height="100%" flexDirection='column'>
                                    <Box bg={'black'} rounded="20px" width={'100%'} height="30vh" my={{base: '10vh', lg: "0"}}></Box>
                                    <Spacer/>
                                    <FreeDeliveryCard/>
                                </Flex>
                            </Box>

                        </Flex>

                    </Center>

                </Box>
            </Slide>
        </Portal>
    )
}