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
                items: [],
                freeShipping: false,
                giftNote: {
                    type: 0,
                    content: '',
                    removeInvoice: false
                },
                userDetails: {
                    fname: '',
                    lname: '',
                    phone: '',
                    addr1: '',
                    addr2: '',
                    city: '',
                    state: '',
                    postalCode: '',
                    country: ''
                }
            },
            noteTypes: [{code: 'none', text: 'None', image: '6a7b4eaa-80b4-448a-bb3c-b0fef6a62cc1'},
            {code: 'scroll', text: 'Scroll', image: '6a6d0eb8-352f-413f-905a-a566efc4e15f'},
            {code: 'letter', text: 'Letter', image: '82e19e54-0d98-42e2-a77d-518c7b1a337e'}]
        }
    }
}

export default MyApp