import {Box} from "@chakra-ui/react";

import Navbar from "components/navbar/navbar";
import {directus} from "lib/directus";
import { useElf } from "lib/elf";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Christmas from "sections/home/christmas";

import Featured from "sections/home/featured";
import Welcome from "sections/home/welcome";

export default function Home({activeRegion, region, featured_collections, christmas_collections}) {

    const elf = useElf();
    const router = useRouter()

    useEffect(()=>{

        if(elf.session.activeRegion != null){

            router.push(`/${elf.session.activeRegion}`)
        }
    }, [elf.session.activeRegion])

    return (
        <Box w="100%">
            <Navbar/>
            <Welcome/>
            <Featured collections={featured_collections}/>
            <Christmas collections={christmas_collections}/>
        </Box>
    )
}

export async function getStaticProps({params}) {

    const fetched = await directus
        .items('regions')
        .readByQuery({
            filter: {
                "code": {
                    "_eq": params.region
                }
            },
            fields: '*.*.*'
        })

    const region = fetched
        .data[0]
        .featured_collections
        .map(r => r.regions_code)

    const featured_collections = fetched
        .data[0]
        .featured_collections
        .map(r => r.collections_id)

    const christmas_collections = await directus
        .items('collections')
        .readByQuery({
            limit: 4,
            filter: {
                'holiday': {
                    '_contains': 'Christmas'
                }
            }
        })

    return {
        props: {
            activeRegion: params.region,
            region: region,
            featured_collections: featured_collections,
            christmas_collections: christmas_collections.data
        }
    }
}

export async function getStaticPaths({region}) {

    const fetched = await directus
        .items('regions')
        .readByQuery()


        
       

    return {
        paths: fetched
        .data.map(r=>{return {params: {region: r.code}}}),
        fallback: false
    }

}