import {
    Box,
    Flex,
    Image,
    SlideFade,
    useColorModeValue,
    VStack,
    useDisclosure,
    Text
} from "@chakra-ui/react";

import {useElf} from "lib/elf";
import {constructIconImageURL} from "lib/helper";
import Link from "next/link";
import {useEffect} from "react";
import BounceWrapper from "../../bounceWrapper/bounceWrapper";

const Option = ({name}) => {

    return (
        <BounceWrapper>
            <Flex
                background={useColorModeValue("linear-gradient(112.83deg, rgba(255, 255, 255, 0.82) 0%, rgba(255, 255, 255, 0.8" +
                    ") 110.84%)",
            "linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) " +
                    "110.84%)")}
                border={useColorModeValue("1.5px solid #FFFFFF", "1.5px solid rgba(255, 255, 255, 0.31)")}
                boxShadow={useColorModeValue("0px 7px 23px rgba(0, 0, 0, 0.05)", "none")}
                filter={useColorModeValue("none", "drop-shadow(0px 7px 23px rgba(0, 0, 0, 0.05))")}
                borderRadius="15px"
                px="16px"
                py="16px"
                mx="auto"
                my="10px"
                width="100%"
                backdropFilter="blur(21px)"
                cursor="pointer"
                alignItems={'center'} justifyContent={'center'}>

                <Text
                            mx={"4px"}
                            fontSize="sm"
                            mt="3px"
                            fontWeight="700"
                            display={{
                            base: 'none',
                            md: 'flex'
                        }}
                            lineHeight="100%"
                            justifyContent="center"
                            alignItems="center"
                            casing={"uppercase"}
                            color={useColorModeValue("gray.700", "gray.200")}>
                            {name}
                        </Text>
            </Flex>
        </BounceWrapper>
    )
}

const OptionsList = () => {
    return (
        <Box width="100%">
            {["Careers", "Influencers", "Dropshipping", "The Town"].map(e => <Option key={e} name={e}/>)}
        </Box>
    )
}

const LogoText = ({listTrigger}) => {

    const elf = useElf()

    return (
        <BounceWrapper>
           <Link href={'/'}>
           <Flex
                display='flex'
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
                onMouseEnter={listTrigger.onOpen}
                cursor="pointer">

           
<Image
                            mx={"4px"}
                            src={constructIconImageURL('564fb50d-4a2b-4ede-8971-be76902db6bb')}
                            height="30px"></Image>
                        <Text
                            mx={"4px"}
                            fontSize="sm"
                            mt="3px"
                            fontWeight="black"
                            display={{
                            base: 'none',
                            md: 'flex'
                        }}
                            lineHeight="100%"
                            justifyContent="center"
                            alignItems="center"
                            casing={"uppercase"}
                            color={useColorModeValue("gray.700", "gray.200")}>
                            Elf Town
                        </Text>
            </Flex>
           </Link>
        </BounceWrapper>

    )
}

export default function NewLogo() {
    const elf = useElf();

    const {isOpen, onOpen, onClose} = useDisclosure()

    return (
        <Flex
            height={"100%"}
            overflow='visable'
            width="max-content"
            mx="auto"
            onMouseLeave={onClose}>
            <VStack width={'100%'} spacing='0'>

                <LogoText
                    listTrigger={{
                    isOpen,
                    onOpen,
                    onClose
                }}/>

                <Box width={"100%"}>
                <SlideFade in={isOpen} unmountOnExit >
                    <OptionsList />
                </SlideFade>
                </Box>
            </VStack>

        </Flex>

    )
}