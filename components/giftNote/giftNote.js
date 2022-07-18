import {
    Box,
    Center,
    Flex,
    Image,
    Text,
    useDisclosure,
    Portal
} from "@chakra-ui/react";

import {constructImageURL} from "lib/helper";
import BounceWrapper from "components/bounceWrapper/bounceWrapper";
import GiftNoteModal from "./giftNoteModal";

export default function GiftNote() {

    const GiftNoteModalControl = useDisclosure()

    return (
        <Box
            height={"100%"}
            width={{
            lg: "100%",
            base: "50%"
        }}>
            <Center onClick={GiftNoteModalControl.onOpen} height={"100%"} width="100%">
                <BounceWrapper height="100%">
                    <Flex
                        py={{
                        base: "5vh",
                        lg: 0
                    }}
                        bg={"gray.50"}
                        rounded={"20px"}
                        fontWeight="bold"
                        cursor={"pointer"}
                        height="100%"
                        width={"100%"}
                        flexDirection="column"
                        alignItems="center"
                        justifyContent={"center"}>
                        <Text>Add Gift Note</Text>
                        <Image
                            src={constructImageURL('ad44a5c6-a980-4199-bb7f-b94196d455d5')}
                            height={"125px"}/>

                    </Flex>
                </BounceWrapper>

            </Center>
            <Portal>
                <GiftNoteModal control={GiftNoteModalControl}/>
            </Portal>
        </Box>

    )
}
