import { HStack, Text } from "@chakra-ui/react";
import { useElf } from "lib/elf";

export default function CartTotal() {
    const elf = useElf();
    return (
        <HStack>
        <Text
            fontWeight={'light'}
            fontSize="lg"
            letterSpacing={-1}
            marginBottom="-2"
            color="gray.400"
            p={0}>Cart Total:</Text>
        <Text
            fontWeight={'bold'}
            fontSize="4xl"
            letterSpacing={-1}
            marginBottom="-2"
            p={0}>
            {elf.session.activeRegionInfo
                ? <>{elf.session.activeRegionInfo.currency_symbol}</>:<></>}500</Text>

    </HStack>
    )
}