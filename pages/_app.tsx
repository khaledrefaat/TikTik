import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {useEffect, useState} from "react";

export default function App({Component, pageProps}: AppProps) {
    const [isSSR, setIsSSR] = useState(true);

    useEffect(() => {
        setIsSSR(false);
    }, [])

    if (isSSR) return null;

    return <>
        NavBar
        <div className="flex gap-6 md:gap-20">
            <div className="h-[92vh] overflow-hidden xl:hover:overflow-auto">
                SideBar
            </div>
            <div className="mt-4 flex flex-col gap-10 overflow-auto h-[88vh] videos flex-1">
                <Component {...pageProps} />
            </div>
        </div>
    </>
}
