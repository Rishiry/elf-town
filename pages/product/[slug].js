import {Flex} from "@chakra-ui/react";
import BounceWrapper from "components/bounceWrapper/bounceWrapper";
import Navbar from "components/navbar/navbar";
import {motion} from "framer-motion";
import {directus} from "lib/directus";
import {useElf} from "lib/elf";
import {constructImageURL} from "lib/helper";
import {useState} from "react";
import {BsStarFill, BsStarHalf} from "react-icons/bs";
import CartOverlay from "sections/cart/cartOverlay";
import Details from "sections/product/details";
import Pictures from "sections/product/pictures";

export default function Product({product}) {

    return (
        <div>
            <Navbar/>
            <Flex
                color='white'
                height={{
                base: 'fit-content',
                md: "100vh"
            }}
                flexDirection={{
                base: "column-reverse",
                md: "row"
            }}>
                <Details product={product}/>
                <Pictures product={product}/>
            </Flex>

        </div>
    );

};

export async function getStaticProps({params}) {
    const fetched = await directus
        .items('products')
        .readByQuery({
            fields: '*.*',
            filter: {
                "slug": {
                    "_eq": params.slug
                }
            }
        })

    return {
        props: {
            product: fetched.data[0]
        }
    }
}

export async function getStaticPaths({slug}) {

    const fetched = await directus
        .items('products')
        .readByQuery({fields: 'slug'})

        return {
            paths: fetched
            .data.map(r=>{return {params: r}}),
            fallback: false
        }

}