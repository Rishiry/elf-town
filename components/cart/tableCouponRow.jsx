import {
    Box,
    Flex,
    Icon,
    Td,
    Text,
    Image,
    Tr,
    useColorModeValue
} from "@chakra-ui/react";
import {useElf} from "lib/elf";
import {constructImageURL} from "lib/helper";

export default function TableCouponRow() {

    const elf = useElf()

    return (
        <Tr>
            <Td minW="300px">
                <Flex align="center">
                    <Text color={"gray.400"} fontSize="sm" fontWeight="medium" fontStyle={"italic"}>
                        Discount Spell
                    </Text>
                </Flex>
            </Td>
            <Td></Td>
            <Td>
                <Text color="gray.400" fontSize="sm" fontWeight="medium">
                    Put your code here
                </Text>
            </Td>
            <Td></Td>

        </Tr>
    )
}
