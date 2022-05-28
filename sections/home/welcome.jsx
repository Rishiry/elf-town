import {
    Box,
    SimpleGrid,
    Image,
    VStack,
    Center,
    Text,
    useColorModeValue,
    HStack,
} from "@chakra-ui/react";
import { constructImageURL } from "lib/helper";

export default function Welcome() {
    return (
        <SimpleGrid
        columns={{
        base: 1,
        md: 2
    }}
        spacing='0'>
        <Box
            height={{
            base: "100vh",
            md: "100vh"
        }}>

            <Center
                height="100%"
                backgroundColor={useColorModeValue("gray.50", "gray.700")}
                borderBottomRightRadius={{
                base: "20px"
            }}
                borderBottomLeftRadius={{
                base: "20px",
                md: "0px"
            }}>

                <VStack spacing={0} align='center'>
                    <Image
                        src={constructImageURL("34c27e97-09fe-4691-ae61-98c2ef52327e")}
                        alt="illustration"
                        boxSize={{
                        base: 'xs',
                        md: "sm"
                    }}
                        objectFit='cover'
                        mb={{
                        base: "5vh",
                        md: 0
                    }}/>
                    <Box
                        display={{
                        base: "box",
                        md: "none"
                    }}>
                        <Text
                            fontWeight={900}
                            fontSize="2xl"
                            letterSpacing={-1}
                            marginBottom="-2"
                            align="center"
                            p={0}>WELCOME TO</Text>
                        <Text
                            fontWeight={900}
                            fontSize={{
                            base: "6xl",
                            md: "7xl",
                            lg: "8xl"
                        }}
                            align="center"
                            letterSpacing={-1}
                            m={0}
                            p={0}>
                            <span className="underline weave">ELF TOWN</span>
                        </Text>
                    </Box>
                </VStack>

            </Center>
        </Box>

        <Box
            display={{
            base: 'none',
            md: 'flex'
        }}
            height={{
            base: "40vh",
            md: "100vh"
        }}
            width="100%">
            <Center height={"90%"} width="100%">

                <VStack spacing={0} align='center'>
                    
                    <Text
                        fontWeight={900}
                        fontSize="2xl"
                        letterSpacing={-1}
                        marginBottom="-2"
                        p={0}>WELCOME TO</Text>
                    <Text
                        fontWeight={900}
                        fontSize={{
                        base: "6xl",
                        md: "6xl",
                        lg: "8xl"
                    }}
                        letterSpacing={-1}
                        m={0}
                        p={0}>
                        <span className="underline weave-green">ELF TOWN</span>
                    </Text>
                </VStack>
            </Center>

        </Box>

    </SimpleGrid>
    )
}