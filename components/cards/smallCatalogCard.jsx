import {Image, VStack, Center, Text, useColorModeValue} from "@chakra-ui/react";
import BounceWrapper from "components/bounceWrapper/bounceWrapper";
export default function SmallCatalogCard({name, image}) {
    return (
        <BounceWrapper>
            <Center
                width={"100%"}
                bg={useColorModeValue("white", "white")}
                rounded="20px"
                py={{
                base: "5vh",
                md: "5vh"
            }}>

                <VStack spacing={0}>

                    <Text
                        align={"center"}
                        fontWeight={900}
                        fontSize={{
                        base: "2xl"
                    }}
                        letterSpacing={-1}
                        m={0}
                        p={0}>
                        {name}
                    </Text>
                    <Image
                        src={image}
                        alt="illustration"
                        boxSize={{
                        base: '20vh',
                        md: '20vh'
                    }}
                        objectFit='cover'/>

                </VStack>
            </Center>
        </BounceWrapper>
    )

}