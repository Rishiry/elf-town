import {
    Button,
    Flex,
    HStack,
    useColorModeValue,
    Spacer,
    Text
} from "@chakra-ui/react";
import BounceWrapper from "components/bounceWrapper/bounceWrapper";
import { useElf } from "lib/elf";

export default function Checkout() {

    const elf = useElf()

    return (
        <Flex
            background={'white'}
            border={useColorModeValue("1.5px solid #FFFFFF", "1.5px solid rgba(255, 255, 255, 0.31)")}
            boxShadow={useColorModeValue("0px 7px 23px rgba(0, 0, 0, 0.05)", "none")}
            filter={useColorModeValue("none", "drop-shadow(0px 7px 23px rgba(0, 0, 0, 0.05))")}
            rounded="20px"
            width={'100%'}
            height="35vh"
            my="0"
            py="20%"
            alignItems={"center"}
            justifyContent="center"
            flexDirection={"column"}>
         
            <Spacer/>
            <BounceWrapper>
                <Button
                    variant="no-hover"
                    rounded={"20px"}
                    _focus={{
                    border: 'none'
                }}
                    p={"30px"}
                    bg="linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)"
                    h="50px"
                    color="#fff"
                    fontSize="md"
                    fontWeight="bold">
                    PROCEED TO CHECKOUT
                </Button>
            </BounceWrapper>
        </Flex>

    )
}