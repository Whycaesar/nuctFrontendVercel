import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from './navbar'

export const siteTitle = 'Nuct Production'

export default function Layout({ children }) {
    return (
        <div className="container mx-auto">
            <Head>
                <link rel="icon" href="/images/nuct-logo.webp" />
                <meta charSet="UTF-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <meta name="description" content="Nuct playgrounds is an agile creative video maker team. We specialize in commercials, branded content, social asset creation services for a diverse range of clients."></meta>
                <meta property="og:image" content="https://nuct.co/images/profile-pic.jpg"></meta>
                <meta name="author" content="Ali Nugraha"></meta>
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="generator" content="Kreatif - Kolektif Production"></meta>
                <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com" ></link>
                <link href="https://fonts.googleapis.com/css2?family=Encode+Sans+Condensed:wght@500&family=Roboto&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Encode+Sans+Condensed:wght@400&display=swap" rel="stylesheet"></link>

            </Head>
            <Navbar />

            <main className="flex flex-col min-h-screen pt-5 md:max-w-3xl lg:max-w-screen-lg md:m-auto md:px-3">
                {children}
            </main>

        </div>
    )
}

