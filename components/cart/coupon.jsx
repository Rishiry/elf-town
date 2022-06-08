import {Button, HStack, Image, Input, VisuallyHidden} from "@chakra-ui/react";
import {constructIconImageURL} from "lib/helper";
import {useState, useEffect} from "react";

function Elements() {
    return (<> </>)
}

export default function Coupon() {

    const elements = [constructIconImageURL('92c20e83-519b-4d7c-a858-a7e9c45e764f'), constructIconImageURL('7ac321a6-92c4-4a74-ad66-fc244e226cac'), constructIconImageURL('1c0bf970-7c10-4195-860c-715b8b7cb5ef'), constructIconImageURL('acaab865-3daf-45d8-9ac9-7233cc5deab6'), constructIconImageURL('3ab66a24-dccd-4318-93a2-e60e93321ba2')]
    const [activeElement,
        setActiveElement] = useState(0)

    const nextElement = () => {
        if (activeElement == elements.length - 1) {
            setActiveElement(0)
        } else {
            setActiveElement(activeElement + 1)
        }
    }

    const [ticking, setTicking] = useState(true);

 useEffect(() => {
const timer = setTimeout(() => ticking && nextElement(), 100)
return () => clearTimeout(timer)
})
    

    return (
        <HStack>
            <Input
                textAlign={"center"}
                fontWeight="bold"
                bg={'white'}
                rounded={"20px"}
                h="50px"
                w="75%"
                p={"30px"}
                placeholder={'Elven Magic Spells'}
                _focus={{
                borderColor: "gray.200"
            }}/>
            <Button
                textAlign={"center"}
                fontWeight="bold"
                bg={'white'}
                rounded={"20px"}
                h="50px"
                w="25%%"
                py={"30px"}
                placeholder={'Elven Magic Spells'}
                onClick={() => setTicking(!ticking)}
                _focus={{
                borderColor: "gray.200"
            }}>

                <Image src={elements[activeElement]} height="40px"/>

                <VisuallyHidden>
                    {elements.map(e => <Image priority={true} key={e} src={elements[activeElement]}/>)}
                </VisuallyHidden>
            </Button>
        </HStack>
    )
}