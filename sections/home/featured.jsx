import {Box} from "@chakra-ui/react";
import CatalogCard from "components/cards/catalogCard";
import {constructImageURL} from "lib/helper";

export default function Featured({collections}) {

    return (
        <Box w="100%">
            {collections.map((c, i) => <CatalogCard
                title={c.name}
                image={constructImageURL(c.main_image)}
                underline={c.underline}
                order={i % 2 == 0
                ? -1
                : 1}/>)}
        </Box>
    )
}