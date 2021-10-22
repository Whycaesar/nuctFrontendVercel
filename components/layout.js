import Head from 'next/head'
import Navbar from './navbar'
import NavbarMobile from './navbarMobile'

export const siteTitle = 'Nuct Creative Production'

export default function Layout({ children }) {
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
            <NavbarMobile />
            <Navbar />
            <main className="bg-white container mx-auto flex flex-col min-h-screen pt-5 md:max-w-3xl lg:max-w-screen-lg md:m-auto md:px-3">
                {children}
            </main>
        </>
    )
}

