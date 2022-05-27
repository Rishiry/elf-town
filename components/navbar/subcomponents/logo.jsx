import {
    Flex,
    Icon,
    useColorModeValue,
    Text,
    Link,
    VStack,
    Box
} from "@chakra-ui/react";
import BounceWrapper from "components/bounceWrapper/bounceWrapper";

export default function Logo() {
    return (
        <Flex
   
            mx="auto">
            <BounceWrapper>
                <Flex
                         px={{
                            base: "44px",
                            md: "22px",
                            lg: "44px"
                        }}
                            py="22px"
                    background={useColorModeValue("linear-gradient(112.83deg, rgba(255, 255, 255, 0.82) 0%, rgba(255, 255, 255, 0.8" +
                        ") 110.84%)",
                "linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) " +
                        "110.84%)")}
                    border={useColorModeValue("1.5px solid #FFFFFF", "1.5px solid rgba(255, 255, 255, 0.31)")}
                    boxShadow={useColorModeValue("0px 7px 23px rgba(0, 0, 0, 0.05)", "none")}
                    filter={useColorModeValue("none", "drop-shadow(0px 7px 23px rgba(0, 0, 0, 0.05))")}
                    backdropFilter="blur(21px)"
                    borderRadius="15px"
                    cursor={'pointer'}
                    alignItems="center"
                    height={"100%"}>
                    <Flex
                        w="100%"
                        justifyContent={{
                        base: "start",
                        lg: "space-between"
                    }}>
                        <Link
                            href={`/`}
                            _hover={{
                            textDecoration: "none"
                        }}
                            _focus={{
                            outline: 'none'
                        }}
                            display="flex"
                            lineHeight="100%"
                            justifyContent="center"
                            alignItems="center"
                            color={useColorModeValue("gray.700", "gray.200")}>
                            <Text fontSize="sm" mt="3px" fontWeight="bold">
                                ELF TOWN
                            </Text>
                        </Link>

                    </Flex>
                </Flex>
            </BounceWrapper>
        </Flex>
    )
}