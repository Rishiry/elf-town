import {
    Box,
    Center,
    Flex,
    FormControl,
    Image,
    Input,
    Spacer,
    Text,
} from "@chakra-ui/react";

import {useState} from "react";

import Navbar from "components/navbar/navbar";
import {constructImageURL} from "lib/helper";
import BounceWrapper from "components/bounceWrapper/bounceWrapper";
import GiftNote from "components/giftNote/giftNote";
import UserForm from "components/checkout/userForm";




export default function Checkout() {

    const [input,
        setInput] = useState('')

    const handleInputChange = (e) => setInput(e.target.value)

    return (
        <Box w="100%">
            <Navbar/>
            <Center height={"100vh"}>
                <Flex
                    width={{
                    lg: "50vw",
                    md: "70vw",
                    base: "90vw"
                }}
                    direction={{
                    lg: "row",
                    base: "column"
                }}
                    gap="1.5vw"
                    height={"max-content"}>
                 
                 
                    <UserForm />


                    <Spacer/>

                    <Flex
                        direction={{
                        lg: "column",
                        base: "row-reverse"
                    }}
                        height={{
                        lg: 'maxz'
                    }}
                        width={{
                        lg: "30%",
                        base: "100%"
                    }}
                        gap="1.5vw">

                        <GiftNote/>

                        <Spacer/>

                        <Center
                            height={"100%"}
                            width={{
                            lg: "100%",
                            base: "50%"
                        }}>
                            <BounceWrapper height="100%">
                                <Flex
                                    py={{
                                    base: "5vh",
                                    lg: 0
                                }}
                                    bg={"gray.50"}
                                    rounded={"20px"}
                                    fontWeight="bold"
                                    cursor={"pointer"}
                                    height="100%"
                                    width={"100%"}
                                    flexDirection="column"
                                    alignItems="center"
                                    justifyContent={"center"}>
                                    <Text textAlign="center" wordBreak={"break-word"}>Proceed to Payment</Text>
                                    <Image
                                        src={constructImageURL('32da8d75-14c4-43ec-a6ab-1ac366bb37f0')}
                                        height="125px"/>

                                </Flex>
                            </BounceWrapper>
                        </Center>
                    </Flex>
                </Flex>

            </Center>

        </Box>
    )
}
