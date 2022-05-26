import { Flex, Text, useColorModeValue } from "@chakra-ui/react";

export default function Search() {
    return (
        <Flex
        display={{
            base: 'none',
            md: 'flex'
        }}
            background={useColorModeValue("linear-gradient(112.83deg, rgba(255, 255, 255, 0.82) 0%, rgba(255, 255, 255, 0.8" +
                ") 110.84%)",
        "linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) " +
                "110.84%)")}
            border={useColorModeValue("1.5px solid #FFFFFF", "1.5px solid rgba(255, 255, 255, 0.31)")}
            boxShadow={useColorModeValue("0px 7px 23px rgba(0, 0, 0, 0.05)", "none")}
            filter={useColorModeValue("none", "drop-shadow(0px 7px 23px rgba(0, 0, 0, 0.05))")}
            backdropFilter="blur(21px)"
            borderRadius="15px"
            px="16px"
            py="16px"
            mx="16px"
            width="25%"
            alignItems="center">
            <Flex
                w="100%"
                justifyContent={{
                base: "start",
                lg: "space-between"
            }}>

                <Text fontSize="sm" color={useColorModeValue("gray.700", "gray.200")}>
                    Search
                </Text>

            </Flex>
        </Flex>
    )
}