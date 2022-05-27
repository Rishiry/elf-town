import {
    Image,
    VStack,
    Center,
    Text,
    useColorModeValue,
    Flex
} from "@chakra-ui/react";
import BounceWrapper from "components/bounceWrapper/bounceWrapper";
export default function SmallCatalogCard({name, image}) {
    return (
        <Center py={{
            base: "0",
            md: "0vh"
        }}>
            <BounceWrapper>
                <Center
                    bg={useColorModeValue("white", "white")}
                    rounded="20px"
                    width={{
                        base: "90vw",
                        md: "30vw",
                        lg: "20vw"
                }}
                    height={{
                    base: '20vh',
                    lg: "35vh"
                }}>

                    <Flex
                        gap={0}
                        flexDirection={{
                        base: "row",
                        lg: "column"
                    }}>
                        <Center>
                            <Text
                                align={"center"}
                                fontWeight={900}
                                fontSize={{
                                base: "4xl",
                                md: "xl",
                                lg: "4xl"
                            }}
                                letterSpacing={-1}
                                m={0}
                                p={0}>
                                {name}
                            </Text>
                        </Center>
                        <Center>
                            <Image
                                width={"50%"}
                                src={image}
                                alt="illustration"
                                boxSize={{
                                base: '20vh',
                                md: '10vh',
                                lg: '20vh'
                            }}
                                objectFit='cover'/>
                        </Center>
                    </Flex>
                </Center>
            </BounceWrapper>
        </Center>
    )

}