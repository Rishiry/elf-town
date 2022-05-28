import {Flex, Text, Image, Center, VStack} from "@chakra-ui/react"
import {useElf} from "lib/elf";
import {constructImageURL} from "lib/helper";

export default function FreeDeliveryCard() {

    const elf = useElf();

    return (

        <Flex
            backgroundImage={constructImageURL('d47d7742-2768-44f2-b452-c50600516243')}
            backgroundSize={'cover'}
            rounded="20px"
            height="30vh"
            px={'2vw'}
            flexDirection={{
            base: "column",
            md: "row"
        }}>

            <Center>
                <VStack
                    spacing={0}
                    color="white"
                    mt={{
                    base: '10vh',
                    md: 0
                }}>
                    <Text
                        fontWeight="bold"
                        fontSize={{
                        base: "lg",
                        lg: "sm"
                    }}
                        textTransform="uppercase"
                        textAlign={"center"}
                        px="4">
                        Free Shipping on Orders above
                    </Text>
                    <Text
                        fontWeight="bold"
                        fontSize={{
                        base: "10vw",
                        lg: "3vw"
                    }}
                        textTransform="uppercase"
                        textAlign={"center"}>

                        {elf.session.activeRegionInfo
                            ? <> {
                                elf.session.activeRegionInfo.currency_symbol
                            }
                        {
                            elf.session.activeRegionInfo.free_shipping_amount
                        } </>:<></>
}

                    </Text>

                </VStack>
            </Center>

            <Image
                ml={"2.5vw"}
                mt={{
                base: '-10vh',
                md: 0
            }}
                src={constructImageURL('4178dcd9-0b43-4674-9c0b-15bdacad4002')}
                objectFit="cover"></Image>
        </Flex>

    )
}