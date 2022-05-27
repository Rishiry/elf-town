import { useDisclosure } from "@chakra-ui/react";
import {createContext, useContext, useState} from "react"
import { directus } from "./directus";

const elfContext = createContext(null)

export function ElfProvider({children, staticContext}) {
    return <elfContext.Provider value={useElfContext(staticContext)}>{children}</elfContext.Provider>
}

export const useElf = () => {
    return useContext(elfContext)
}

const useElfContext = (staticContext) => {

    const [activeRegion, setActiveRegion] = useState(staticContext.regions.filter(e => e.default)[0].code)
    const [cartOpen, setCartOpen] = useState(false)
    const [cartReturn, setCartReturn] = useState(false)


    return {static: {...staticContext}, session: {activeRegion, setActiveRegion, cartOpen, setCartOpen, cartReturn, setCartReturn}}
}