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
    Text
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
        }}>

            <VStack>
                <Text
                    color={useColorModeValue("gray.700", "white")}
                    fontSize="3xl"
                    fontWeight="bold"
                    align={"center"}>
                    {product.title}
                </Text>

                <Badge
                    colorScheme="green"
                    w="95px"
                    h="28px"
                    borderRadius="15px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center">
                    IN STOCK
                </Badge>
                <Center py={'2.5vh'}>
                    <VStack>
                        <Text color="gray.400" fontWeight="normal" fontSize="sm">
                            Price
                        </Text>
                        <Text
                            color={useColorModeValue("gray.700", "white")}
                            fontWeight="bold"
                            fontSize="4xl">
                            {elf
                                .static
                                .regions
                                .filter(r => r.code == elf.session.activeRegion)[0]
                                .currency_symbol}
                            {product[
                                elf
                                    .static
                                    .regions
                                    .filter(r => r.code == elf.session.activeRegion)[0]
                                    .currency_code
                            ].toFixed(2)}
                        </Text>
                    </VStack>
                </Center>

                <Box height={'25vh'} width="100%" py={'2.5vh'}>

                    <SimpleGrid columns={4} height="100%" width="100%">
                        <Box height={'10vh'} width="10vh" rounded="20px" py={'2.5vh'} bg="red.400"></Box>
                        <Box height={'10vh'} width="10vh" rounded="20px" py={'2.5vh'} bg="blue.400"></Box>
                        <Box height={'10vh'} width="10vh" rounded="20px" py={'2.5vh'} bg="green.400"></Box>
                        <Box height={'10vh'} width="10vh" rounded="20px" py={'2.5vh'} bg="yellow.400"></Box>
                    </SimpleGrid>

                </Box>

                <HStack pt={'2.5vh'} spacing="2.5vw">
                    <NumberInput maxW={"120px"} defaultValue={1} min={1}>
                        <NumberInputField
                            py={"30px"}
                            rounded={"20px"}
                            color={useColorModeValue("gray.700", "white")}
                            fontSize="2xl"
                            fontWeight="bold" textAlign={"center"}/>
                        <NumberInputStepper
                            color={useColorModeValue("gray.700", "white")}
                            fontSize="2xl"
                            fontWeight="bold">
                            <NumberIncrementStepper/>
                            <NumberDecrementStepper/>
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