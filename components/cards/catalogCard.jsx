import {
    Box,
    Text,
    useColorModeValue,
    Flex,
    VStack,
    Image,
    Center
} from "@chakra-ui/react";

export default function CatalogCard({title, image, order, underline}) {

    return (
        <Box
            width="100%"
            px={{
            base: "2.5vw",
            md: "5vw"
        }}
        my="5vw">
            <Flex
                bg={useColorModeValue("gray.50", "gray.700")}
                rounded="20px"
                height={{
                base: "max-content",
                md: "50vh"
            }}
                py={{
                base: "5vh",
                md: 0
            }}
                flexDirection={order == -1? {
                    base: "column-reverse",
                    md: "row"
                }: {
                    base: "column-reverse",
                    md: "row-reverse"
                }}>
                <Center
                    width={{
                    base: "100%",
                    md: "60%"
                }}>Products Will Be Displayed Here!</Center>
                <Center
                    width={{
                    base: "100%",
                    md: "40%"
                }}>

                    <VStack spacing={0}>

                        <Text
                            align={"center"}
                            fontWeight={900}
                            fontSize={{
                            base: "4xl"
                        }}
                            letterSpacing={-1}
                            m={0}
                            p={0}>
                            <span className={`underline ${underline}`}>{title}<br/>COLLECTION</span>
                        </Text>
                        <Image
                            src={image}
                            alt="illustration"
                            boxSize={{
                            base: '3xs',
                            md: "3xs"
                        }}
                            objectFit='cover'/>

                    </VStack>

                </Center>
            </Flex>
        </Box>
    )
}