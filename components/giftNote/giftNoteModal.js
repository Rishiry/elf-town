import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    useColorModeValue,
    Stack,
    GridItem,
    Grid,
    Flex,
    Center,
    Text,
    Square,
    Box,
    Image
} from "@chakra-ui/react";
import Editor from "components/editor/editor";

import {useElf} from "lib/elf";
import {constructIconImageURL} from "lib/helper";
import dynamic from "next/dynamic";
import NoteType from "./noteType";

export default function GiftNoteModal({control}) {
    const elf = useElf()

    return (
        <Modal
            isOpen={control.isOpen}
            onClose={control.onClose}
            size="4xl"
            _active={{
            border: 'none'
        }}>
            <ModalOverlay
                background={useColorModeValue("linear-gradient(112.83deg, rgba(255, 255, 255, 0.72) 0%, rgba(255, 255, 255, 0.8" +
                    ") 110.84%)",
            "linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) " +
                    "110.84%)")}
                boxShadow={useColorModeValue("0px 7px 23px rgba(0, 0, 0, 0.05)", "none")}
                filter={useColorModeValue("none", "drop-shadow(0px 7px 23px rgba(0, 0, 0, 0.05))")}
                backdropFilter="blur(10px)"/>
            <ModalContent
                rounded={"20px"}
                py="2vh"
                px="2vw"
                shadow={"none"}
                border="1.5px solid"
                borderColor="gray.200"
                mx={{
                lg: 'none',
                base: '2vw'
            }}>
                <ModalBody my="5%">

                    <Flex
                        width="100%"
                        gap="2vw"
                        direction={{
                        lg: "row",
                        base: "column"
                    }}>
                        <Stack
                            direction={{
                            lg: "column",
                            base: "row"
                        }}
                            height={{
                            lg: 'maxz'
                        }}
                            width={{
                            lg: "40%",
                            base: "100%"
                        }}
                            gap="1.5vw"
                            justify="space-between">

                            {elf
                                .static
                                .noteTypes
                                .map((t, i) => <NoteType key={i} index={i} note={t}/>)
}

                        </Stack>

                        <Flex
                            opacity={1}
                            width={"100%"}
                            rounded={"20px"}
                            py="2vw"
                            px="2vw"
                            gap="2vh"
                            shadow={"none"}
                            border="1.5px solid"
                            borderColor="gray.200"
                            direction={"column"}
                            alignItems="center">

                            <Editor/>

                            <Flex direction={{base: "column", sm: "row"}} alignItems="center">
                            <Text
                                    mx={"4px"}
                                    fontSize="sm"
                                    mt="3px"
                                    fontWeight="normal"
                                    whiteSpace={"nowrap"}
                                    display='flex'
                                    lineHeight="100%"
                                    justifyContent="center"
                                    alignItems="center"
                                    casing={"capitalize"}
                                    color={useColorModeValue("gray.700", "gray.200")}>
                                    Brought to you by the magic of
                                </Text>
                                <Flex>
                                <Image
                                    alt=""
                                    mx={"4px"}
                                    src={constructIconImageURL('564fb50d-4a2b-4ede-8971-be76902db6bb')}
                                    height="30px"></Image>
                                <Text
                                    mx={"4px"}
                                    fontSize="sm"
                                    mt="3px"
                                    fontWeight="black"
                                    display='flex'
                                    lineHeight="100%"
                                    justifyContent="center"
                                    alignItems="center"
                                    casing={"uppercase"}
                                    color={useColorModeValue("gray.700", "gray.200")}>
                                    Elf Town
                                </Text>
                                </Flex>
                            </Flex>

                        </Flex>
                    </Flex>

                </ModalBody>
            </ModalContent>
        </Modal>

    )
}
