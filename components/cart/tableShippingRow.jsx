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

export default function TableShippingRow() {

    const elf = useElf()

    return (
        <Tr>
            <Td minW="300px">
                <Flex align="center">
                    <Text color={"gray.400"} fontSize="sm" fontWeight="medium" fontStyle={"italic"}>
                        Shipping & Handling<br />(Anywhere in the {elf.session.activeRegionInfo.code.toUpperCase()} Region)
                    </Text>
                </Flex>
            </Td>
            <Td></Td>
            <Td>
                <Text color="gray.400" fontSize="sm" fontWeight="medium">
                {elf.session.cart.freeShipping? <>Free</>:<>{elf.session.activeRegionInfo.currency_symbol}
                {elf.session.activeRegionInfo.shipping_fees.toFixed(2)}</>}
                </Text>
            </Td>
            <Td></Td>

        </Tr>
    )
}
