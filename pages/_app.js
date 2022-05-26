import {ChakraProvider} from '@chakra-ui/react'
import {directus} from 'lib/directus'
import {ElfContext, ElfProvider, useElf} from 'lib/elf'

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

MyApp.getInitialProps = async() => {
    const regions = await directus
        .items('regions')
        .readByQuery()

    return {
      staticContext: {
          regions: regions.data,
        }
    }
}

export default MyApp