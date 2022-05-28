import {
    Box,
    Text,
    useColorModeValue,
    Flex,
    Image,
    Center,
    Spacer,
    HStack
} from "@chakra-ui/react";
import BounceWrapper from "components/bounceWrapper/bounceWrapper";
import Product from "./productCard";

function Category({title, background, image}) {
    return (
        <Center width={{
            base: '90vw',
            lg: "20vw"
        }}>

            <Box
                height={{
                lg: "55vh",
                base: 'fit-content',
                md: 'fit-content'
            }}>
                <Flex
                    flexDirection={"column"}
                    width={"100%"}
                    height={'100%'}
                    alignItems={'center'}
                    justifyContent={'center'}>

                    <Text
                        align={"center"}
                        fontWeight={900}
                        fontSize={{
                        base: "4xl"
                    }}
                        letterSpacing={-1}
                        m={0}
                        p={0}
                        casing="uppercase">
                        <span
                            className={`underline`}
                            style={{
                            'background-image': background
                        }}>{title}<br/>COLLECTION</span>
                    </Text>
                    <Spacer/>
                    <Image
                        src={image}
                        alt="illustration"
                        boxSize={{
                        base: '3xs',
                        md: "2xs"
                    }}
                        objectFit='contain'/>
                    <Spacer/>

                    <Box width={"100%"} height="10vh">
                        <BounceWrapper>
                            <Center
                                bg='white'
                                rounded={"20px"}
                                borderRadius="20px"
                                py="2.5vh"
                                cursor={'pointer'}>
                                <Text fontWeight={"bold"} fontSize={'xl'} textAlign={'center'}>View More</Text>

                            </Center>
                        </BounceWrapper>
                    </Box>
                </Flex>
            </Box>

        </Center>
    )
}

export default function CatalogCard({title, image, order, background, products}) {

    return (
        <Box
            width="100vw"
            px={{
            base: "0",
            md: "5vw"
        }}
            my="5vw">
            <Flex
                bg={useColorModeValue("gray.50", "gray.700")}
                rounded="20px"
                height={{
                    base: "max-content",
                    md: "max-content",
                    lg: "65vh"
            }}
                flexWrap={{
                base: "nowrap",
                lg: "nowrap",
                md: "wrap-reverse"
            }}
                gap={"2.5vw"}
                py={{
                base: "5vh",
                md: "5vh",
                lg: 0
            }}
                px={{
                base: 0,
                md: '2.5vw'
            }}
                flexDirection={order == -1
                ? {
                    base: "column-reverse",
                    md: "row"
                }
                : {
                    base: "column-reverse",
                    md: "row-reverse"
                }}
                alignContent="center"
                alignItems={"center"}>

                {products.map((n, i) => <>{n? <Product background={background} key={i} product={n.products_id} />:<></>}</>)
}

                <Category title={title} background={background} image={image}/>

            </Flex>
        </Box>
    )
}