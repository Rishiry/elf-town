import {
    Button,
    Flex,
    HStack,
    useColorModeValue,
    Spacer,
    Text,
    Input,
    Box,
    Center
} from "@chakra-ui/react";
import BounceWrapper from "components/bounceWrapper/bounceWrapper";
import { useElf } from "lib/elf";
import { useState } from "react";

export default function Checkout() {

    const elf = useElf()
    
    const [email, setEmail] = useState()


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
            py="15%"
            alignItems={"center"}
            justifyContent="center"
            flexDirection={"column"}>
         
         <Flex width="100%" align={"center"} justifyContent="center" direction={"column"} gap="0.5vh">
         <Text color={"gray.400"} fontSize="sm" fontWeight="medium" fontStyle={"italic"}>
                        Your Email Address:
                    </Text>
         <Input
                onChange={(e) => {setEmail(e.target.value)}}
                textAlign={"center"}
                fontWeight="bold"
                bg={'white'}
                rounded={"20px"}
                borderColor="gray.200"
                h="50px"
                w="70%"
                p={"30px"}
                type="email"
                placeholder={'Irriel@Elf.Town'}
                _focus={{
                    borderColor: "gray.200"
                }}
                _hover={{
                    borderColor: "gray.200"
                }}
                />
            </Flex>
            <Spacer />
            <Center width="100%">
            <BounceWrapper>
                <Center
                    cursor={"pointer"}
                    variant="no-hover"
                    rounded={"20px"}
                    _focus={{
                    border: 'none'
                }}
                    bg="linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)"
                    h="50px"
                    w="100%"
                    p={"30px"}
                    color="#fff"
                    fontSize="md"
                    fontWeight="bold">
                    PROCEED TO CHECKOUT
                </Center>
            </BounceWrapper>
            </Center>
        </Flex>

    )
}