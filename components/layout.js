import Head from 'next/head'
import { useEffect } from 'react'
import Navbar from './navbar'
import NavbarMobile from './navbarMobile'

export const siteTitle = 'Nuct Creative Production'

export default function Layout({ children }) {
    const selectTheme = (value) => {
        localStorage.setItem('theme', value)
        document.querySelector('html').classList.add(localStorage.getItem('theme'))
        if(value === 'dark') {
            document.querySelector('html').classList.remove('light')
        } else {
            document.querySelector('html').classList.remove('dark')

        }
    }

    useEffect(() => {
        document.querySelector('html').classList.add(localStorage.getItem('theme'))
    }, []);

    return (
        <>
            <Head>
                <title>{process.env.SITETITLE}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <meta name="description" content={process.env.SITETITLE + " is an agile creative video maker team. We specialize in commercials, branded content, social asset creation services for a diverse range of clients."}></meta>
                <meta name="generator" content="Creative - Collective Production"></meta>
                <meta name="og:title" content={process.env.SITETITLE + " is an agile creative video maker team."} />
                <meta property="og:description" content={process.env.SITETITLE + " specialize in commercials"} />
            </Head>
            <main className="dark:bg-black">
            <NavbarMobile />
            <Navbar />
            <div className="bg-white dark:bg-black antialiased container mx-auto flex flex-col min-h-screen md:pt-5 md:max-w-3xl lg:max-w-screen-lg md:m-auto md:px-3">
                <div className="flex justify-end my-10 lg:my-0">
                    <button onClick={() => selectTheme('light')} className="w-5 h-5 bg-gray-200 rounded-full mr-5" aria-label="Left Align"></button>
                    <button onClick={() => selectTheme('dark')}className="w-5 h-5  bg-gray-800 rounded-full mr-5" aria-label="Right Align"></button>
                </div>
                {children}
            </div>
            </main>
        </>
    )
}

 