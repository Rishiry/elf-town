import {
    Box,
    Button,
    Flex,
    Icon,
    Portal,
    Slide,
    Text,
    useColorModeValue,
    useDisclosure
} from "@chakra-ui/react"
import BounceWrapper from "components/bounceWrapper/bounceWrapper"
import {useElf} from "lib/elf"
import {IoClose} from "react-icons/io5"
import {useEffect} from "react"
import {useRouter} from "next/router"
import Navbar from "components/navbar/navbar"

export default function CartOverlay() {

    return (
        <Box
            background={useColorModeValue("linear-gradient(112.83deg, rgba(255, 255, 255, 0.82) 0%, rgba(255, 255, 255, 0.8" +
                ") 110.84%)",
        "linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) " +
                "110.84%)")}
            border={useColorModeValue("1.5px solid #FFFFFF", "1.5px solid rgba(255, 255, 255, 0.31)")}
            boxShadow={useColorModeValue("0px 7px 23px rgba(0, 0, 0, 0.05)", "none")}
            filter={useColorModeValue("none", "drop-shadow(0px 7px 23px rgba(0, 0, 0, 0.05))")}
            backdropFilter="blur(21px)"
            height={'100vh'}>
            <Navbar/>
      

        </Box>
    )
}