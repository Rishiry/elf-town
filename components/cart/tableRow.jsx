import {
    Box,
    Flex,
    Icon,
    Table,
    Td,
    Text,
    Image,
    Tr,
    useColorModeValue,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper
} from "@chakra-ui/react";
import {useElf} from "lib/elf";
import {constructImageURL} from "lib/helper";

import {IoCloseSharp} from "react-icons/io5";

export default function CartTableRow({item, index}) {

    const elf = useElf()

    const updateFn = (value) => {
        elf.session
            .updateCartItem({
                product: item.product,
                quantity: parseInt(value)
            }, index)
    }

    const deleteFn = () => elf
        .session
        .deleteCartItem(index)

    return (
        <Tr>
            <Td minW="300px">
                <Flex align="center">
                    <Box w="40px" h="40px" me="14px">
                        <Image
                            src={constructImageURL(item.product.display_image.id)}
                            w="100%"
                            h="100%"
                            borderRadius="12px"/>
                    </Box>
                    <Text
                        color={useColorModeValue("gray.700", "white")}
                        fontSize="sm"
                        fontWeight="bold">
                        {item.product.title}
                    </Text>
                </Flex>
            </Td>
            <Td>
                <NumberInput
                    defaultValue={item.quantity}
                    min={1}
                    max={item.product.stock}
                    width="20"
                    onChange={(value) => updateFn(value)}>
                    <NumberInputField
                        borderColor={useColorModeValue("gray.50", "gray.700")}
                        borderWidth="2px"
                        _focus={{
                        borderColor: useColorModeValue("gray.50", "gray.700")
                    }}
                        _hover={{
                        borderColor: useColorModeValue("gray.50", "gray.700")
                    }}
                        rounded={"15px"}
                        color={useColorModeValue("gray.500", "white")}
                        fontSize="sm"
                        fontWeight="bold"
                        textAlign={"center"}/>
                    <NumberInputStepper
                        color={useColorModeValue("gray.500", "white")}
                        fontSize="sm"
                        fontWeight="bold">
                        <NumberIncrementStepper roundedTopRight="20px"/>
                        <NumberDecrementStepper roundedBottomRight="20px"/>
                    </NumberInputStepper>
                </NumberInput>
            </Td>
            <Td>
                <Text color="gray.500" fontSize="sm" fontWeight="bold">
                    {elf.session.activeRegionInfo.currency_symbol}
                    {(item.product[elf.session.activeRegionInfo.currency_code] * item.quantity).toFixed(2)}
                </Text>
            </Td>
            <Td>
                <Icon
                    onClick={() => deleteFn()}
                    as={IoCloseSharp}
                    color={'gray.500'}
                    w="20px"
                    h="20px"
                    fontWeight="2000"
                    _hover={{
                    color: 'red.300',
                    cursor: 'pointer'
                }}/>
            </Td>

        </Tr>
    )
}

