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

export default function CountrySelector() {
    const elf = useElf()


    const getVal = (key) => {
        if (elf.session.cart) {
            if (elf.session.cart.userDetails[key] != 'undefined') {
                return elf.session.cart.userDetails[key]
            }
        } else {
            return ''
        }
    }

    return (
        <Center width={"100%"}>
            <Center
                width={"100%"}
                h="50px"
                w="100%"
                p={"30px"}
                bg={'white'}
                border="solid 1px"
                borderColor="gray.200"
                placeholder={'Country'}
                _focus={{
                borderColor: "gray.200"
            }}
                _hover={{
                borderColor: "gray.200"
            }}
                rounded={"20px"}>
                {elf.session.activeRegionInfo
                    ? elf.session.activeRegionInfo.countries.length > 1
                        ? <Select
                                onChange={(e) => elf.session.setUserDetail('country', e.target.value)}
                                name="country"
                                placeholder="Country"
                                borderColor="white"
                                _focus={{
                                borderColor: "white"
                            }}
                                _hover={{
                                borderColor: "white"
                            }}
                                textAlign={"center"}
                                fontWeight="bold">
                                {elf
                                    .session
                                    .activeRegionInfo
                                    .countries
                                    .map(c => <option key={c.name} value={c.name}>{c.name}</option>)
}

                            </Select>
                        : <Text fontWeight={"bold"}>{elf.session.activeRegionInfo.countries[0].name}</Text>
                    : 'Loading...'
}

            </Center>
        </Center>
    )
}