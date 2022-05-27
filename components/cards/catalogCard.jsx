import {
    Box,
    Text,
    useColorModeValue,
    Flex,
    VStack,
    Image,
    Center,
    HStack,
    SimpleGrid,
    Button,
    Spacer
} from "@chakra-ui/react";
import BounceWrapper from "components/bounceWrapper/bounceWrapper";
import {motion} from "framer-motion";
import {constructImageURL} from "lib/helper";
import Link from "next/link";

function Product({color, product}) {
    return (
        <Center>
            <Link href={`/product/${product.slug}`}>
                <Box
                    height={"55vh"}
                    width={"100%"}
                    _hover={{
                    borderWidth: '2px',
                    borderColor: `${color}.200`,
                    borderRadius: "20px",
                    cursor: 'pointer',
                    transition: 'all 0.3s'
                }}>
                    <VStack width={"100%"} height={'100%'} bg="white" rounded={"20px"} py="5%">
                        <Image
                            src={constructImageURL(product.display_image)}
                            objectFit={'cover'}
                            width={'90%'}
                            height="55%"
                            rounded={"20px"}/>
                        <Spacer/>
                        <Text fontWeight={"bold"} fontSize={'xl'} textAlign={'center'} px="2vw">{product.title}</Text>
                        <Spacer/>
                        <Center
                            variant="no-hover"
                            rounded={"20px"}
                            p={"10px"}
                            bg={useColorModeValue("gray.50", "gray.700")}
                            w='90%'
                            h="60px"
                            fontSize="md"
                            fontWeight="extrabold">
                            $ 10.00
                        </Center>
                    </VStack>

                </Box>
            </Link>
        </Center>
    )

}

function Category({title, underline, image}) {
    return (
        <Center>

            <Box height={"55vh"} width={"100%"}>
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
                        <span className={`underline ${underline}`}>{title}<br/>COLLECTION</span>
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
                    <Center bg='white' width={"100%"} height="10vh" rounded={"20px"}>

                        <Text fontWeight={"bold"} fontSize={'xl'} textAlign={'center'}>View More</Text>

                    </Center>

                </Flex>
            </Box>

        </Center>
    )
}

export default function CatalogCard({
    title,
    image,
    order,
    underline,
    colors,
    products
}) {

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
                md: "65vh"
            }}
                px={{
                base: 0,
                lg: "5vh"
            }}
                py={{
                base: "5vh",
                md: 0
            }}
                flexDirection={order == -1
                ? {
                    base: "column-reverse",
                    md: "row"
                }
                : {
                    base: "column-reverse",
                    md: "row-reverse"
                }}>
                <Center
                    width={{
                    base: "100%",
                    md: "100%"
                }}
                    height="100%">

                    <SimpleGrid columns={4} height={'100%'} width="100%" spacing={"2.5vw"}>

                        {
                                products?.map((n, i) => <Product
                                    color={colors[i % colors.length]}
                                    key={i}
                                    product={n.products_id}/>)
                           }

                        <Category title={title} underline={underline} image={image}/>
                    </SimpleGrid>

                </Center>
            </Flex>
        </Box>
    )
}