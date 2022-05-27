import {Box} from "@chakra-ui/react";
import CatalogCard from "components/cards/catalogCard";
import {constructImageURL} from "lib/helper";

export default function Featured({collections}) {

    return (
        <Box w="100%">
            {collections.map((c, i) => <CatalogCard
            key={c.id}
                title={c.name}
                products={c.products}
                image={constructImageURL(c.main_image.id)}
                underline={c.underline}
                colors={c.colors.map(c => c.color)}
                order={i % 2 == 0
                ? -1
                : 1}/>)}
        </Box>
    )
}