import {
    Box,
    Flex,
    Icon,
    Table,
    Td,
    Th,
    Text,
    Image,
    Thead,
    Tr,
    TableContainer,
    Tbody,
    useColorModeValue,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper
} from "@chakra-ui/react";
import { useElf } from "lib/elf";
import {constructImageURL} from "lib/helper";
import {} from "react-icons/bs";
import {IoCloseSharp} from "react-icons/io5";
import CartTableRow from "./table_row";

export default function CartTable() {

    const elf = useElf();

    return (
        <TableContainer my="5%" overflowY="auto" height="65%" mx="2.5vw">
            <Table variant='simple'>
                <Thead>
                    <Tr>
                        <Th color="gray.400" fontSize="xs">
                            Product
                        </Th>
                        <Th color="gray.400" fontSize="xs">
                            Quantity
                        </Th>
                        <Th color="gray.400" fontSize="xs">
                            Price
                        </Th>
                        <Th></Th>
                    </Tr>

                </Thead>
                <Tbody>

                    {elf.session.cart.items.length >=1? <>
                    {
                        elf.session.cart.items.map((item, index) => <CartTableRow key={index} item={item} deleteFn={()=>elf.session.deleteCartItem(index)}/>)
                    }
                    </>:<></>}

                </Tbody>

            </Table>
        </TableContainer>
    )
}