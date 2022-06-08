import {getCookie, setCookies} from 'cookies-next'

export const constructImageURL = (filename) => {
    return `${process.env.NEXT_PUBLIC_API_URL}/assets/${filename}`
}


export const constructIconImageURL = (filename) => {
    return constructImageURL(filename) + '?fit=outside&height=50&quality=50'
}


export const syncCookieToState = (cookieName, setState, fallback) => {
    try {
        const instanceCookie = JSON.parse(getCookie(cookieName));
        setState(instanceCookie)
    } catch {
        if(fallback) {
            setState(fallback)
        }
    }
}

export const syncStateToCookie = (cookieName, state) => {
    if (state !=null) {
        setCookies(cookieName, JSON.stringify(state))
    }
}

export const syncStoreToState = (storeName, setState, fallback) => {
    var storeData = JSON.parse(localStorage.getItem(storeName));
    if (storeData !=null) {
        setState(storeData)
    } else if(fallback) {
        setState(fallback)
    } else {
        setState("none")
    }

}

export const syncStateToStore = (storeName, state) => {
    if (state !=null) {
        localStorage.setItem(storeName, JSON.stringify(state))
    }
}

