import {
    Box,
    useColorModeValue,
    Button,
    Flex,
    useNumberInput,
    Input,
    Spacer,
    Text
} from "@chakra-ui/react";
import BounceWrapper from "components/bounceWrapper/bounceWrapper";
import {useElf} from "lib/elf";
import {useState} from "react";
import { useEffect } from "react";
import Tick from "./tick";

export default function AddToCart({product}) {

    const [quantity,
        setQuantity] = useState(1)

    const [added,
        setAdded] = useState(false)

    const [inCartIndex, setInCartIndex] = useState(-1)
    const [cartQuantity, setCartQuantity] = useState(0)

    const elf = useElf()


    const add = () => {

        if (added && inCartIndex != -1) {
            () => {}
            console.log("FIRE2")

        } else if (inCartIndex != -1 && !added) {
            console.log("FIRE")
            elf
                .session
                .updateCartItem({
                    product: product,
                    quantity: parseInt(quantity)
                }, inCartIndex)
            setAdded(true)
        } else {
            elf
                .session
                .addCartItem({product: product, quantity: parseInt(quantity)})
            setAdded(true)
        }
    }

    useEffect(() => {
        if (elf.session.loading && elf.session.cart == undefined) {return;}

        var inCart = elf.session.cart.items.find(x => x.product.id == product.id);
    
        var index = elf.session.cart.items.indexOf(inCart)

        setInCartIndex(index)

        console.log(elf.session.cart.items[index])
        
        if(index == -1){
            setCartQuantity(0)
            setAdded(false)
        } else {
            setCartQuantity(elf.session.cart.items[index].quantity)
            setQuantity(elf.session.cart.items[index].quantity)
        }
    
    }, [elf.session.cart])

    useEffect(() => {
        if (elf.session.loading && elf.session.cart == undefined) {return;}

            if (added && quantity != cartQuantity) {
                setAdded(false)
            }
        
    }, [quantity])

    useEffect(() => {
        if(cartQuantity <= 0) {
            setQuantity(1)
        } else {
            setQuantity(cartQuantity)
        }
    }, [cartQuantity])

    const {getInputProps, getIncrementButtonProps, getDecrementButtonProps} = useNumberInput({
        step: 1,
        value: added? cartQuantity: quantity,
        min: 1,
        max: product.stock,
        precision: 0,
        onChange: (v) => {setQuantity(v)}
    })

    return (
        <Flex
            gap={"2.5vh"}
            direction={{
            base: "column"
        }}
            width="80%">

            <Flex
                direction={"row"}
                color={useColorModeValue("gray.700", "white")}
                fontSize="sm"
                fontWeight="bold"
                width={"100%"}
                alignItems={"center"}
                justifyContent={"center"}>

                <Box w="20%">
                    <BounceWrapper>
                        <Button
                            rounded={"20px"}
                            h="50px"
                            width={"100%"}
                            p={"30px"}
                            {...getDecrementButtonProps()}>-</Button>
                    </BounceWrapper>
                </Box>
                <Spacer/>
                <Box w="40%">
                    <Input
                        
                        textAlign={"center"}
                        fontWeight="bold"
                        rounded={"20px"}
                        h="50px"
                        w="100%"
                        p={"30px"}
                        type="number"
                        _focus={{
                        borderColor: "gray.200"
                    }}
                        {...getInputProps()}/>
                </Box>
                <Spacer/>
                <Box w="20%">

                    <BounceWrapper>

                        <Button
                            rounded={"20px"}
                            h="50px"
                            w="100%"
                            p={"30px"}
                            {...getIncrementButtonProps()}>+</Button>
                    </BounceWrapper>
                </Box>

            </Flex>

            <BounceWrapper>
                <Button
                    isDisabled={product.stock >= 1
                    ? undefined
                    : true}
                    variant="no-hover"
                    rounded={"20px"}
                    p={"30px"}
                    bg={inCartIndex!=-1
                    ? "white"
                    : "#151928"}
                    w="100%"
                    h="75px"
                    mx={{
                    base: "auto",
                    md: "auto"
                }}
                    color={inCartIndex!=-1 && added
                        ? 'green.300'
                        : inCartIndex!=-1 && !added? 'blue.300': 'white'}
                    fontSize="xs"
                    border={inCartIndex!=-1
                    ? '2px'
                    : ''}
                    borderColor={inCartIndex!=-1 && added
                    ? 'green.300'
                    : inCartIndex!=-1 && !added? 'blue.300': 'none'}
                    _focus={{
                    border: 'green.200'
                }}
                    fontWeight="bold"
                    onClick={() => add()}
                    transition={'border 0.3s ease, background 0.3s ease'}>
                    {inCartIndex!=-1 && added
                        ? <>< Box mx = "10px" > <Tick/> </Box>ADDED TO YOUR CART </>
                        : <>{
                            inCartIndex!=-1 && !added?
                            <>UPDATE CART</>: <> ADD TO CART </>
                        }</>}
                </Button>
            </BounceWrapper>
        </Flex>
    )
}
