import {ChakraProvider} from '@chakra-ui/react'
import {getCookie} from 'cookies-next'
import {directus} from 'lib/directus'
import {ElfProvider} from 'lib/elf'

import 'styles/underlines.css'

function MyApp({Component, pageProps, staticContext}) {
    return (
        <ElfProvider staticContext={staticContext}>
            <ChakraProvider>
                <Component {...pageProps}/>
            </ChakraProvider>
        </ElfProvider>

    )
}

MyApp.getInitialProps = async({req, res}) => {
    const regions = await directus
        .items('regions')
        .readByQuery()

    return {
        staticContext: {
            regions: regions.data,
            defaultRegion: regions
                .data
                .filter(r => r.default)[0]
                .code,
            defaultCart: {
                items: []
            }

        }
    }
}

export default MyApp