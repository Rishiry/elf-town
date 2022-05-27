import {
    Badge,
    Box,
    Center,
    HStack,
    SimpleGrid,
    useColorModeValue,
    VStack,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Button,
    Text,
    VisuallyHidden,
    border,
    Tag,
    Flex
} from "@chakra-ui/react";
import BounceWrapper from "components/bounceWrapper/bounceWrapper";
import {useElf} from "lib/elf";

export default function Details({product}) {

    const elf = useElf()

    return (
        <Center
            width={{
            base: "100vw",
            md: "40vw"
        }}
            mt={{
            base: "2.5vh",
            md: "0"
        }}
        px={
            {
                base: "2.5vw",
                lg: "2.5vw"
            }
        }>

            <VStack>
                <Text
                    color={useColorModeValue("gray.700", "white")}
                    fontSize="3xl"
                    fontWeight="bold"
                    align={"center"}>
                    {product.title}
                </Text>

                <Flex flexDirection="row" gap={"1vw"} wrap="wrap" justifyContent={"center"}>
                    <Tag colorScheme="green">In Stock</Tag>
                    {product
                        .tags
                        .map(e => (
                            <Tag key={e}>{e}</Tag>
                        ))}</Flex>
                <Center py={'2.5vh'}>
                    <VStack>
                        <Text color="gray.400" fontWeight="normal" fontSize="sm">
                            Price
                        </Text>
                        <Text
                            color={useColorModeValue("gray.700", "white")}
                            fontWeight="bold"
                            fontSize="4xl">
                            {elf.session.activeRegion && !elf.session.loading && elf.session.activeRegionInfo
                                ? <> {
                                    elf.session.activeRegionInfo.currency_symbol
                                }
                            {
                                product[elf.session.activeRegionInfo.currency_code].toFixed(2)
                            } </>:<></>
}

                        </Text>
                        {elf
                            .static
                            .regions
                            .map(e => <VisuallyHidden key={e.code}>
                                <Text
                                    color={useColorModeValue("gray.700", "white")}
                                    fontWeight="bold"
                                    fontSize="xl">{e.currency_symbol} {product[e.currency_code].toFixed(2)}</Text>
                            </VisuallyHidden>)}

                    </VStack>
                </Center>

                <Box height={'25vh'} width="100%" py={'2.5vh'}></Box>

                <HStack pt={'2.5vh'} spacing="2.5vw">
                    <NumberInput maxW={"180px"} defaultValue={1} min={1}>
                        <NumberInputField
                            borderColor={useColorModeValue("gray.50", "gray.700")}
                            borderWidth="2px"
                            _focus={{
                            borderColor: useColorModeValue("gray.50", "gray.700")
                        }}
                            _hover={{
                            borderColor: useColorModeValue("gray.50", "gray.700")
                        }}
                            py={"30px"}
                            rounded={"20px"}
                            color={useColorModeValue("gray.700", "white")}
                            fontSize="2xl"
                            fontWeight="bold"
                            textAlign={"center"}/>
                        <NumberInputStepper
                            color={useColorModeValue("gray.700", "white")}
                            fontSize="2xl"
                            fontWeight="bold">
                            <NumberIncrementStepper roundedTopRight="20px"/>
                            <NumberDecrementStepper roundedBottomRight="20px"/>
                        </NumberInputStepper>
                    </NumberInput>
                    <BounceWrapper>
                        <Button
                            variant="no-hover"
                            rounded={"20px"}
                            p={"30px"}
                            bg="linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)"
                            w={{
                            base: "240px",
                            md: "100%",
                            lg: "240px"
                        }}
                            h="50px"
                            mx={{
                            base: "auto",
                            md: "0px"
                        }}
                            color="#fff"
                            fontSize="xs"
                            fontWeight="bold">
                            ADD TO CART
                        </Button>
                    </BounceWrapper>
                </HStack>
            </VStack>

        </Center>
    )
}