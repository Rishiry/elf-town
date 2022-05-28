import {getCookie, setCookies} from 'cookies-next'

export const constructImageURL = (filename) => {
    return `${process.env.NEXT_PUBLIC_API_URL}/assets/${filename}`
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

