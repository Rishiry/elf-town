import {
    Box,
    Flex,
    Image,
    SlideFade,
    useColorModeValue,
    VStack,
    useDisclosure
} from "@chakra-ui/react";

import {useElf} from "lib/elf";
import {constructIconImageURL} from "lib/helper";
import {useEffect} from "react";
import BounceWrapper from "../../bounceWrapper/bounceWrapper";

const RegionIcon = ({flag, code}) => {

    const elf = useElf();

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
                width="max-content"
                alignItems="center"
                backdropFilter="blur(21px)"
                cursor="pointer"
                onClick={() => elf.session.setActiveRegion(code)}>

                <Image src={constructIconImageURL(flag)} width={"30px"} height={"30px"} alt={code} priority={true}/>

            </Flex>
        </BounceWrapper>
    )
}

const RegionIconList = ({regions, activeRegion}) => {

    const display = regions.filter(e => (e.code != activeRegion));

    return (
        <Box>
            {display.map(e => <RegionIcon code={e.code} flag={e.flag} key={e.code}/>)}
        </Box>
    )
}

const ActiveRegionIcon = ({listTrigger}) => {

    const elf = useElf()

    return (
        <BounceWrapper>
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
                onClick={() => {
                listTrigger.isOpen
                    ? listTrigger.onClose()
                    : listTrigger.onOpen()
            }}>

                {elf.session.activeRegionInfo
                    ? <Image
                            src={constructIconImageURL(elf.session.activeRegionInfo.flag)}
                            width={"30px"}
                            height={"30px"}
                            alt={elf.session.activeRegion}/>
                    : <></>}
            </Flex>
        </BounceWrapper>

    )
}

export default function RegionSwitch(props) {
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

                <ActiveRegionIcon
                    listTrigger={{
                    isOpen,
                    onOpen,
                    onClose
                }}/>

                <SlideFade in={isOpen} unmountOnExit>
                    <RegionIconList
                        regions={elf.static.regions}
                        activeRegion={elf.session.activeRegion}/>
                </SlideFade>

            </VStack>

        </Flex>

    )
}