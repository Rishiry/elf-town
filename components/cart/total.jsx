import { Flex, HStack, Spacer, Text, VStack } from "@chakra-ui/react";
import { useElf } from "lib/elf";
import Coupon from "./coupon";

export default function CartTotal() {
    const elf = useElf();



    return (
        <Flex alignItems={"center"} mx="2.5vw" bg="gray.50" rounded={"20px"} py="3vh" flexDirection={"column"} justifyContent={"center"}>

        <Text
            fontWeight={'bold'}
            fontSize="5xl"
            letterSpacing={-1}
            marginBottom="-2"
            p={0}>
            {elf.session.activeRegionInfo
                ? <>{elf.session.activeRegionInfo.currency_symbol} {elf.session.trueCartTotal()}</>:<></>}</Text>
         <Text color="gray.400" fontWeight="normal" fontSize="sm">
                            (Inclusive of Taxes)
                        </Text>

        </Flex>
    )
}