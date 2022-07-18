import {useElf} from "lib/elf";

import {Center, Flex, Image, Text} from "@chakra-ui/react";

import {constructImageURL} from "lib/helper";
import BounceWrapper from "components/bounceWrapper/bounceWrapper";

export default function NoteType({note, index}) {
    const elf = useElf()

    return (
        <Center
            onClick={() => {
            elf
                .session
                .changeGiftNoteType(index)
        }}
            height={"100%"}>
            <BounceWrapper width="100%" height="100%">
                <Flex
                    py={{base: "5vh", sm: "2vh"}}
                    px="2vw"
                    bg={"gray.50"}
                    rounded={"20px"}
                    fontWeight="bold"
                    cursor={"pointer"}
                    height="100%"
                    width={"100%"}
                    flexDirection="column"
                    alignItems="center"
                    justifyContent={"center"}
                    border={elf.session.cart.giftNote.type == index
                    ? "3px solid"
                    : "none"}
                    borderColor="orange.200">
                    <Image src={constructImageURL(note.image)} height={{sm:"80px"}}/>
                    <Text>{note.text}</Text>

                </Flex>
            </BounceWrapper>
        </Center>
    )
}
