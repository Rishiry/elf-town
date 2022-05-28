import {
    Box,
    Center,
    useColorModeValue,
    VStack,
    Text,
    VisuallyHidden,
    Tag,
    Flex,
} from "@chakra-ui/react";
import AddToCart from "components/products/addToCart";
import ProductPrice from "components/products/price";
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
            px={{
            base: "2.5vw",
            lg: "2.5vw"
        }}>

            <VStack spacing={{lg: "7.5vh", base: "4vh"}} width={'inherit'}>
                <Box width={'inherit'}>
                    <Text
                        width={"inherit"}
                        color={useColorModeValue("gray.700", "white")}
                        fontSize="3xl"
                        lineHeight={"1"}
                        fontWeight="bold"
                        align={"center"}
                        wordBreak="break-word">
                        {product.title}
                    </Text>

                    <Flex
                        flexDirection="row"
                        gap={"1vw"}
                        wrap="wrap"
                        justifyContent={"center"}
                        mt="5">

                        {product.stock > 0
                            ? <> {
                                product.stock < 7
                                    ? <Tag colorScheme="yellow">Running out Fast</Tag>
                                    : <Tag colorScheme="green">In Stock</Tag>
                            } </>
                        : <Tag colorScheme="red">Out of Stock</Tag >}

                        {product
                            .tags
                            .map(e => (
                                <Tag key={e}>{e}</Tag>
                            ))}
                    </Flex>

                </Box>

                <Center
                    width="80%"
                    py={'5vh'}
                    height={'fit-contents'}
                    bg={useColorModeValue('gray.50', 'gray.700')}
                    rounded="20px">

                    <Flex
                        direction="column"
                        alignItems="center"
                        justifyContent={"center"}>

                        <Text
                            color={useColorModeValue("gray.700", "white")}
                            fontWeight="bold"
                            fontSize="4xl">
                            <ProductPrice product={product}/>

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

                        <Text color="gray.400" fontWeight="normal" fontSize="sm">
                            (Inclusive of Taxes)
                        </Text>

                    </Flex>
                </Center>

                <AddToCart product={product}/>
            </VStack>

        </Center>
    )
}