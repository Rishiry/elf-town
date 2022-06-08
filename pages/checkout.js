import {
    Box,
    Center,
    Flex,
    FormControl,
    FormLabel,
    Image,
    Input,
    SimpleGrid,
    Spacer,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
    VStack
} from "@chakra-ui/react";

import {useRef, useState} from "react";

import Navbar from "components/navbar/navbar";
import {constructImageURL} from "lib/helper";
import BounceWrapper from "components/bounceWrapper/bounceWrapper";
import ChakraBounceWrapper from "components/bounceWrapper/chakraBounceWrapper";

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
                    <FormControl width={{lg:"70%", base: "100%"}}>
                        <Flex direction={"column"} gap="1vw" width={"100%"}>
                            <Flex direction={"row"} width="100%" gap="1vw">
                                <Center width={"100%"}>
                                    <Input
                                        onChange={handleInputChange}
                                        textAlign={"center"}
                                        fontWeight="bold"
                                        bg={'white'}
                                        rounded={"20px"}
                                        borderColor="gray.200"
                                        h="50px"
                                        w="100%"
                                        p={"30px"}
                                        placeholder={'First Name'}
                                        _focus={{
                                        borderColor: "gray.200"
                                    }}
                                        _hover={{
                                        borderColor: "gray.200"
                                    }}/>
                                </Center>
                                <Spacer/>
                                <Center width={"100%"}>
                                    <Input
                                        onChange={handleInputChange}
                                        textAlign={"center"}
                                        fontWeight="bold"
                                        bg={'white'}
                                        rounded={"20px"}
                                        borderColor="gray.200"
                                        h="50px"
                                        w="100%"
                                        p={"30px"}
                                        placeholder={'Last Name'}
                                        _focus={{
                                        borderColor: "gray.200"
                                    }}
                                        _hover={{
                                        borderColor: "gray.200"
                                    }}/>
                                </Center>
                            </Flex>
                            <Spacer/>
                            <Flex direction={"row"} width="100%" gap="1vw">
                                <Center width={"100%"}>
                                    <Input
                                        onChange={handleInputChange}
                                        textAlign={"center"}
                                        fontWeight="bold"
                                        bg={'white'}
                                        rounded={"20px"}
                                        borderColor="gray.200"
                                        h="50px"
                                        w="100%"
                                        p={"30px"}
                                        placeholder={'Address Line 1'}
                                        _focus={{
                                        borderColor: "gray.200"
                                    }}
                                        _hover={{
                                        borderColor: "gray.200"
                                    }}/>
                                </Center>
                            </Flex>
                            <Spacer/>

                            <Flex direction={"row"} width="100%" gap="1vw">
                                <Center width={"100%"}>
                                    <Input
                                        onChange={handleInputChange}
                                        textAlign={"center"}
                                        fontWeight="bold"
                                        bg={'white'}
                                        rounded={"20px"}
                                        borderColor="gray.200"
                                        h="50px"
                                        w="100%"
                                        p={"30px"}
                                        placeholder={'Address Line 2'}
                                        _focus={{
                                        borderColor: "gray.200"
                                    }}
                                        _hover={{
                                        borderColor: "gray.200"
                                    }}/>
                                </Center>
                            </Flex>
                            <Spacer/>

                            <Flex direction={"row"} width="100%" gap="1vw">
                                <Center width={"100%"}>
                                    <Input
                                        onChange={handleInputChange}
                                        textAlign={"center"}
                                        fontWeight="bold"
                                        bg={'white'}
                                        rounded={"20px"}
                                        borderColor="gray.200"
                                        h="50px"
                                        w="100%"
                                        p={"30px"}
                                        placeholder={'City'}
                                        _focus={{
                                        borderColor: "gray.200"
                                    }}
                                        _hover={{
                                        borderColor: "gray.200"
                                    }}/>
                                </Center>
                                <Spacer/>
                                <Center width={"100%"}>
                                    <Input
                                        onChange={handleInputChange}
                                        textAlign={"center"}
                                        fontWeight="bold"
                                        bg={'white'}
                                        rounded={"20px"}
                                        borderColor="gray.200"
                                        h="50px"
                                        w="100%"
                                        p={"30px"}
                                        placeholder={'State/Province/Region'}
                                        _focus={{
                                        borderColor: "gray.200"
                                    }}
                                        _hover={{
                                        borderColor: "gray.200"
                                    }}/>
                                </Center>
                            </Flex>
                            <Spacer/>

                            <Flex direction={"row"} width="100%" gap="1vw">
                                <Center width={"100%"}>
                                    <Input
                                        onChange={handleInputChange}
                                        textAlign={"center"}
                                        fontWeight="bold"
                                        bg={'white'}
                                        rounded={"20px"}
                                        borderColor="gray.200"
                                        h="50px"
                                        w="100%"
                                        p={"30px"}
                                        placeholder={'Postal/Zip Code'}
                                        _focus={{
                                        borderColor: "gray.200"
                                    }}
                                        _hover={{
                                        borderColor: "gray.200"
                                    }}/>
                                </Center>
                                <Spacer/>
                                <Center width={"100%"}>
                                    <Input
                                        onChange={handleInputChange}
                                        textAlign={"center"}
                                        fontWeight="bold"
                                        bg={'white'}
                                        rounded={"20px"}
                                        borderColor="gray.200"
                                        h="50px"
                                        w="100%"
                                        p={"30px"}
                                        placeholder={'Country'}
                                        _focus={{
                                        borderColor: "gray.200"
                                    }}
                                        _hover={{
                                        borderColor: "gray.200"
                                    }}/>
                                </Center>
                            </Flex>
                        </Flex>
                    </FormControl>
                    <Spacer/>

                    <Flex direction={{lg: "column", base: "row-reverse"}} height={{lg: 'maxz'}} width={{lg: "30%", base: "100%"}} gap="1.5vw">

                            <Center height={"100%"} width={{lg: "100%", base: "50%"}}>
                                <BounceWrapper height="100%">
                                <Flex py={{base: "5vh", lg: 0}} bg={"gray.50"} rounded={"20px"} fontWeight="bold" cursor={"pointer"} height="100%" width={"100%"} flexDirection="column" alignItems="center" justifyContent={"center"}>
                                    <Text>Add Gift Note</Text>
                                    <Image
                                        src={constructImageURL('ad44a5c6-a980-4199-bb7f-b94196d455d5')}
                                        height={"125px"}/>

                                </Flex>
                                </BounceWrapper>
                            </Center>

                        <Spacer/>
                
                        <Center height={"100%"} width={{lg: "100%", base: "50%"}}>
                                <BounceWrapper height="100%">
                                <Flex py={{base: "5vh", lg: 0}} bg={"gray.50"} rounded={"20px"} fontWeight="bold" cursor={"pointer"} height="100%" width={"100%"} flexDirection="column" alignItems="center" justifyContent={"center"}>
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
