import {useDisclosure} from "@chakra-ui/react";
import {createContext, useContext, useState} from "react"
import {useEffect} from "react";
import {directus} from "./directus";
import {syncCookieToState, syncStateToCookie} from "./helper";

const elfContext = createContext(null)

export function ElfProvider({children, staticContext}) {
    return <elfContext.Provider value={useElfContext(staticContext)}>{children}</elfContext.Provider>
}

export const useElf = () => {
    return useContext(elfContext)
}

const useElfContext = (staticContext) => {

    const [activeRegion,
        setActiveRegion] = useState()
    const [activeRegionInfo,
        setActiveRegionInfo] = useState()

        const [cart,
            setCart] = useState()
    
    const [cartOpen,
        setCartOpen] = useState(false)
    const [loading,
        setLoading] = useState(true)
        

    useEffect(() => {
        syncCookieToState('activeRegion', setActiveRegion, staticContext.regions.filter(e => e.default)[0].code)
        syncCookieToState('cart', setCart, staticContext.defaultCart)
        setLoading(false)
    }, [])

    useEffect(() => {
        syncStateToCookie('activeRegion', activeRegion)
        setActiveRegionInfo(staticContext.regions.filter(r => r.code == activeRegion)[0])
    }, [activeRegion])

    useEffect(() => {
        syncStateToCookie('cart', cart)
    }, [cart])


    const deleteCartItem = (index) => {
        var newItems = cart.items;
        newItems.splice(index, 1)
        setCart({...cart, items: newItems})
    }

    const addCartItem = (item) => {
        var newItems = cart.items;
        newItems.push(item)
        setCart({...cart, items: newItems})
    }

    const updateCartItem = (item, index) => {
        var newItems = cart.items;
        newItems[index] = item;
        setCart({...cart, items: newItems})
    }

    return {
        static: {
            ...staticContext
        },
        session: {
            loading,
            activeRegion,
            setActiveRegion,
            activeRegionInfo,
            cartOpen,
            setCartOpen,
            cart,
            addCartItem,
            deleteCartItem,
            updateCartItem
        }
    }
}