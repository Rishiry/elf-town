import {
    Box,
    Center,
    Flex,
    FormControl,
    Image,
    Input,
    Select,
    Spacer,
    Text
} from "@chakra-ui/react";
import {useElf} from "lib/elf";

import {useState} from "react";
import CountrySelector from "./countrySelector";

export default function UserForm() {
    const elf = useElf()

    const getVal = (key) => {
        if (elf.session.cart && elf.session.cart.userDetails !== 'undefined') {
            return elf.session.cart.userDetails[key]
        } else {
            return ''
        }
    }

    return (
        <FormControl
            width={{
            lg: "70%",
            base: "100%"
        }}>
            <Flex direction={"column"} gap="1vw" width={"100%"}>
                <Flex direction={"row"} width="100%" gap="1vw">
                    <Center width={"100%"}>
                        <Input
                            onChange={(e) => elf.session.setUserDetail('fname', e.target.value)}
                            name="fname"
                            value={getVal('fname')}
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
                            onChange={(e) => elf.session.setUserDetail('lname', e.target.value)}
                            name="lname"
                            value={getVal('lname')}
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
                    <Input
                        onChange={(e) => elf.session.setUserDetail('phone', e.target.value)}
                        name="phone"
                        value={getVal('phone')}
                        textAlign={"center"}
                        fontWeight="bold"
                        bg={'white'}
                        rounded={"20px"}
                        borderColor="gray.200"
                        h="50px"
                        w="100%"
                        p={"30px"}
                        placeholder={'Phone Number'}
                        _focus={{
                        borderColor: "gray.200"
                    }}
                        _hover={{
                        borderColor: "gray.200"
                    }}/>

                </Flex>
                <Spacer/>

                <Flex direction={"row"} width="100%" gap="1vw">
                    <Center width={"100%"}>
                        <Input
                            onChange={(e) => elf.session.setUserDetail('addr1', e.target.value)}
                            name="addr1"
                            value={getVal('addr1')}
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
                            onChange={(e) => elf.session.setUserDetail('addr2', e.target.value)}
                            name="addr2"
                            value={getVal('addr2')}
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
                            onChange={(e) => elf.session.setUserDetail('city', e.target.value)}
                            name="city"
                            value={getVal('city')}
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
                            onChange={(e) => elf.session.setUserDetail('state', e.target.value)}
                            name="state"
                            value={getVal('state')}
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
                            onChange={(e) => elf.session.setUserDetail('postalCode', e.target.value)}
                            name="postalCode"
                            value={getVal('postalCode')}
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

                    <CountrySelector />
                    
                </Flex>
            </Flex>
        </FormControl>
    )
}
