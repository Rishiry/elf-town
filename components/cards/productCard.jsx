import {
    Box,
    Text,
    useColorModeValue,
    VStack,
    Image,
    Center,
    Spacer
} from "@chakra-ui/react";
import BounceWrapper from "components/bounceWrapper/bounceWrapper";
import {constructImageURL} from "lib/helper";
import Link from "next/link";

export default function Product({background, product}) {
    return (
        <Box mx="auto">
            <BounceWrapper>
                <Link href={`/product/${product.slug}`}>

                    <Box
                        height={{base: "55vh", lg: "55vh", md:"40vh"}}
                        width={{
                        base: '85vw',
                        md: '25vw',
                        lg: "20vw"
                    }}
                        zIndex={10}>
                        <VStack
                            width={"100%"}
                            height={'100%'}
                            bg="white"
                            rounded={"20px"}
                            py="5%"
                            position="relative"
                            style={{
                            transition: 'all 0.3s ease',
                            'transition-delay': '0.3s'
                        }}
                            _hover={{
                            cursor: 'pointer',
                            _after: {
                                'opacity': 0
                            }
                        }}
                            _after={{
                            'z-index': -1,
                            'background': useColorModeValue("gray.50", "gray.700"),
                            'position': 'absolute',
                            'top': '50%',
                            'left': '50%',
                            'height': 'calc(100% + 15px)',
                            'width': 'calc(100% + 15px)',
                            'transform': 'translate(-50%, -50%)',
                            'content': "''",
                            'opacity': '1',
                            'transition': 'all 1s',
                            'border-radius': '20px'
                        }}
                            _before={{
                            'z-index': -2,
                            'background': background,
                            'position': 'absolute',
                            'top': '50%',
                            'left': '50%',
                            'height': 'calc(100% + 10px)',
                            'width': 'calc(100% + 10px)',
                            'transform': 'translate(-50%, -50%)',
                            'content': "''",
                            'opacity': '1',
                            'transition': 'all 1s',
                            'border-radius': '25px',
                            'animation': 'animatedgradient 60s linear alternate infinite',
                            'background-size': '200% 200%'
                        }}>
                            <Image
                                src={constructImageURL(product.display_image)}
                                objectFit={'cover'}
                                width='90%'
                                height="55%"
                                rounded={"20px"}/>
                            <Spacer/>
                            <Text fontWeight={"bold"} fontSize={"xl"} textAlign={'center'} px="2vw">{product.title}</Text>
                            <Spacer/>
                            <Center
                                variant="no-hover"
                                rounded={"20px"}
                                p={"10px"}
                                bg={useColorModeValue("gray.50", "gray.700")}
                                w={'90%'}
                                h="60px"
                                fontSize="md"
                                fontWeight="extrabold">
                                $ 10.00
                            </Center>
                        </VStack>

                    </Box>
                </Link>

            </BounceWrapper>
        </Box>
    )

}