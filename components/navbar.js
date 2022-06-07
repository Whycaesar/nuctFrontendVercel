import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
    return (
        <>
            <div className="hidden dark:bg-black md:flex flex-row md:max-w-3xl md:justify-center lg:max-w-screen-lg h-28 lg:justify-between m-auto pt-2 md:px-3">
                <div className="h-28 w-5/12 mt-5">
                    <Link href={{ pathname: '/' }}>
                        <a>
                            <Image
                                priority
                                src="/images/nuct.png"
                                height={70}
                                width={70}
                                alt={'Creative - Collective Production'}
                            />
                        </a>
                    </Link>
                </div>
                <div className="h-28 mt-5 w-7/12">
                    <ol className=" flex flex-row h-28 tracking-widest leading-4 justify-between mt-8 font-pre dark:text-gray-200 text-secondary">
                        <li className=" pt-6 text-xs">
                            <Link href={{ pathname: '/' }}>
                                <a className="transition duration-200 transform hover:opacity-50">
                                    HOME
                                </a>
                            </Link>
                        </li>
                        <li className=" pt-6 text-xs">
                            <Link href={{ pathname: '/about' }}>
                                <a className="transition duration-200 transform hover:opacity-50">
                                    ABOUT
                                </a>
                            </Link>
                        </li>
                        <li className=" pt-6 text-xs">
                            <Link href={{ pathname: '/artists' }}>
                                <a className="transition duration-200 transform hover:opacity-50">
                                    ARTISTS
                                </a>
                            </Link>
                        </li>
                        <li className=" pt-6 text-xs">
                            <Link href={{ pathname: '/accousticroom' }}>
                                <a className="transition duration-200 transform hover:opacity-50">
                                    ACCOUSTIC ROOM
                                </a>
                            </Link>
                        </li>
                        <li className=" pt-6 text-xs">
                            <Link href={{ pathname: '/portofolio' }}>
                                <a className="transition duration-200 transform hover:opacity-50">
                                    PORTFOLIO
                                </a>
                            </Link>
                        </li>
                        <li className=" pt-6 text-xs">
                            <Link href={{ pathname: '/contact' }}>
                                <a className="transition duration-200 transform hover:opacity-50">
                                    CONTACT
                                </a>
                            </Link>
                        </li>
                    </ol>
                </div>
            </div>
        </>
    )
}


