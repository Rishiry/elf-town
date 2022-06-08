import {
    Table,
    Th,
    Thead,
    Tr,
    TableContainer,
    Tbody,
} from "@chakra-ui/react";
import { useElf } from "lib/elf";
import TableCouponRow from "./tableCouponRow";

import CartTableRow from "./tableRow";
import TableShippingRow from "./tableShippingRow";

export default function CartTable() {

    const elf = useElf();

    return (
        <TableContainer my="5%" overflowY="auto" height="55%" mx="2.5vw">
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
                            Amount
                        </Th>
                        <Th>{''}</Th>
                    </Tr>

                </Thead>
                <Tbody>

                    {elf.session.cart.items.length >=1? <>
                    {
                        elf.session.cart.items.map((item, index) => <CartTableRow key={index} index={index} item={item} />)
                    }
                    </>:<></>}

                    <TableShippingRow />
                    <TableCouponRow />
                </Tbody>

            </Table>
        </TableContainer>
    )
}