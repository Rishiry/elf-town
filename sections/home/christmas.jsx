import {
    Badge,
    Box,
    Button,
    Center,
    SimpleGrid,
    Text,
    useColorModeValue,
    VStack
} from "@chakra-ui/react";
import SmallCatalogCard from "components/cards/smallCatalogCard";
import {constructImageURL} from "lib/helper";

export default function Christmas({collections}) {

    return (
        <SimpleGrid
            columns={{
            base: 1,
            md: 2
        }}
            spacing='0'>

            <Center height="100%">
                <Center
                    bgImage={constructImageURL('633efbef-eb03-49f7-a91a-1425eb32709e')}
                    bgPosition="50%"
                    bgSize="cover"
                    px={{
                    base: "2.5vw",
                    md: "5vw"
                }}
                    height={"80vh"}
                    rounded="20px">
                    <VStack>
                        <Badge
                            bg={useColorModeValue("linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)", "gray.800")}
                            mb="5vh"
                            mt={"-5vh"}
                            color="#fff"
                            w="150px"
                            borderRadius="8px"
                            display="flex"
                            justify="center"
                            align="center">
                            <Text textAlign="center" py="6px" fontSize="11px" w="100%" alignSelf="center">
                                Signature Collection
                            </Text>
                        </Badge>
                        <Text color="#fff" fontSize="6xl" fontWeight="bold" mb="5vh" align={"center"}>
                            CLASSIC<br/>CHRISTMAS
                        </Text>
                        <Button
                            variant="no-hover"
                            py="16px"
                            bg="linear-gradient(112.83deg, rgba(255, 255, 255, 0.58) 0%, rgba(255, 255, 255, 0.12) 110.84%)"
                            w="155px"
                            h="25px"
                            color="#fff"
                            fontSize="xs"
                            borderRadius="12px"
                            border="1.5px solid #fff">
                            VIEW MORE
                        </Button>
                    </VStack>
                </Center>

            </Center>

            <Box
                height={{
                base: "max-content",
                md: "100vh"
            }}>

                <Center
                    height="100%"
                    backgroundColor={useColorModeValue("gray.50", "gray.700")}
                    py={{
                    base: "10vh",
                    md: 0
                }}
                    borderBottomLeftRadius={{
                    base: "0",
                    md: "20px"
                }}
                    borderTopRightRadius={{
                    base: "20px",
                    md: "0"
                }}
                    borderTopLeftRadius={{
                    base: "20px"
                }}>

                    <SimpleGrid
                        columns={{
                        base: 1,
                        md: 2
                    }}
                        width="100%"
                        gap={"10vh"}
                        px={{
                        base: "2.5vw",
                        md: "10vh"
                    }}>

                        {collections.map(c => <SmallCatalogCard name={c.name} image={constructImageURL(c.main_image)}/>)}

                    </SimpleGrid>

                </Center>
            </Box>

        </SimpleGrid>
    )
}
