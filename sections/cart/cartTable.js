import {
    Box,
    Flex,
    Icon,
    Progress,
    Stack,
    Table,
    Td,
    Th,
    Text,
    Image,
    Thead,
    Tr,
    Tbody,
    useColorModeValue,
    TableContainer
} from "@chakra-ui/react";
import {constructImageURL} from "lib/helper";
import {BsStarFill} from "react-icons/bs";



export default function CartTable() {
    return (
       

<TableContainer>
<Table variant='simple' overflow={"scroll"}>
  <Thead>
  <Tr>
            <Th color="gray.400" fontSize="xs">
                Product
            </Th>
            <Th color="gray.400" fontSize="xs">
                Price
            </Th>
            <Th color="gray.400" fontSize="xs">
                Review
            </Th>
            <Th color="gray.400" fontSize="xs">
                Availability
            </Th>
            <Th color="gray.400" fontSize="xs">
                id
            </Th>
        </Tr>

  </Thead>
  <Tbody>
  <Tr>
            <Td minW="300px">
                <Flex align="center">
                    <Box w="40px" h="40px" me="14px">
                        <Image
                            src={constructImageURL('834e28b9-bcc5-4768-bb17-697fe27ae1db')}
                            w="100%"
                            h="100%"
                            borderRadius="12px"/>
                    </Box>
                    <Text
                        color={useColorModeValue("gray.700", "white")}
                        fontSize="sm"
                        fontWeight="bold">
                        Christopher Knight Home
                    </Text>
                </Flex>
            </Td>
            <Td>
                <Text color="gray.500" fontSize="sm" fontWeight="bold">
                    $89.53
                </Text>
            </Td>
            <Td>
                <Stack direction="row" color="gray.700" spacing="2px">
                    <Icon as={BsStarFill} w="10px" h="10px"/>
                    <Icon as={BsStarFill} w="10px" h="10px"/>
                    <Icon as={BsStarFill} w="10px" h="10px"/>
                    <Icon as={BsStarFill} w="10px" h="10px"/>
                </Stack>
            </Td>
            <Td>
                <Progress size="xs" colorScheme="teal" value={70} borderRadius="12px"/>
            </Td>
            <Td>
                <Text color="gray.500" fontSize="sm" fontWeight="normal">
                    230019
                </Text>
            </Td>
        </Tr>
  </Tbody>

</Table>
</TableContainer>
    )
}
