import {
    Box,
    Center,
    Flex,
    FormControl,
    Image,
    Input,
    Spacer,
    Text
} from "@chakra-ui/react";

import {useState} from "react";

import Navbar from "components/navbar/navbar";
import {constructImageURL} from "lib/helper";
import BounceWrapper from "components/bounceWrapper/bounceWrapper";
import GiftNote from "components/giftNote/giftNote";
import UserForm from "components/checkout/userForm";

export default function Checkout() {

    const [loading,
        setLoading] = useState('')

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

                    <UserForm/>

                    <Spacer/>

                    <Flex
                        direction={{
                        lg: "column",
                        base: "row"
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
                                    justifyContent={"center"}
                                    onClick={()=>setLoading(!loading)}>
                                    {loading
                                        ? <Image
                                                src={constructImageURL('8e6c684b-efc7-4994-82d8-2891605c1856')}
                                                className="rotate"
                                                width="17.5vh"/>
                                        : <><Text textAlign="center" wordBreak={"break-word"} height="2.5vh">Proceed to Payment</Text> < Image
                                    src = {
                                        constructImageURL('32da8d75-14c4-43ec-a6ab-1ac366bb37f0')
                                    }
                                    height = "15vh" /></>}

                                </Flex>
                            </BounceWrapper>
                        </Center>
                    </Flex>
                </Flex>

            </Center>

        </Box>
    )
}
