import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react';

export default function Navbar() {
    const [open, setOpen] = useState(1)
    const [showNavbar, setShowNavbar] = useState("h-20 ")
    // const [closeList, setCloseList] = useState("hidden top-0");
    const openNavBar = () => {
        console.log(open)
        return (open % 2 == 1) ?

        (setShowNavbar("h-80 "), setOpen(open + 1))
        :
        (setShowNavbar("h-20 "), setOpen(open + 1));
    }

    // const closeNavBar = () => {
    //     return setCloseList(("hidden"), setShowNavbar("h-24 "),);
    // }
    return (
        <nav className=" ">
            <div className={showNavbar + "md:hidden p-5 flex flex-col justify-end items-center"}>
                {/* <div className={closeList + " bg-black text-white fixed z-10 overflow-x-hidden w-full flex-col"} > */}
                {/* <a href="#" onClick={closeNavBar}>&times;</a> */}
                <Link href={{ pathname: '/' }}>
                    <a className="text-secondary leading-10 tracking-wider text-lg opacity-70 block" onClick={openNavBar}>
                        HOME
                    </a>
                </Link>
                <Link href={{ pathname: '/about' }}>
                    <a className="text-secondary leading-10 tracking-wider text-lg opacity-70 block" onClick={openNavBar}>
                        ABOUT
                    </a>
                </Link>
                <Link href={{ pathname: '/accousticroom' }}>
                    <a className="text-secondary leading-10 tracking-wider text-lg opacity-70 block" onClick={openNavBar}>
                        ACCOUSTIC ROOM
                    </a>
                </Link>
                <Link href={{ pathname: '/portofolio' }}>
                    <a className="text-secondary leading-10 tracking-wider text-lg opacity-70 block" onClick={openNavBar}>
                        PORTOFOLIO
                    </a>
                </Link>
                <Link href={{ pathname: '/contact' }}>
                    <a className="text-secondary leading-10 tracking-wider text-lg opacity-70 block" onClick={openNavBar}>
                        CONTACT
                    </a>
                </Link>
                <hr className="w-full mt-5 text-footer"></hr>
                
                {/* </div> */}
                <div className="mt-6 text-secondary leading-10 tracking-wider text-lg opacity-70 block" onClick={openNavBar}>MENU</div>
                <hr className="text-black text-lg"></hr>
            </div>
            <div className="flex justify-center md:hidden">
                    <Link href={{ pathname: '/' }}>
                        <a>
                            <Image
                                src="/images/nuct.png"
                                height={70}
                                width={70}
                                alt={'Kreatif - Kolektif Production'}
                            />
                        </a>
                    </Link>
                </div>

            <div className="hidden md:flex flex-row md:max-w-3xl md:justify-center lg:max-w-screen-lg h-28 lg:justify-between m-auto pt-2 md:px-3">
                <div className="h-28 w-5/12 mt-5">
                    <Link href={{ pathname: '/' }}>
                        <a>
                            <Image
                                priority
                                src="/images/nuct.png"
                                height={70}
                                width={70}
                                alt={'Kreatif - Kolektif Production'}
                            />
                        </a>
                    </Link>
                </div>
                <div className="h-28 mt-5 w-7/12">
                    <ol className=" flex flex-row h-28 tracking-widest leading-4 justify-between mt-8 font-pre text-secondary">
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
                            <Link href={{ pathname: '/accousticroom' }}>
                                <a className="transition duration-200 transform hover:opacity-50">
                                    ACCOUSTIC ROOM
                                </a>
                            </Link>
                        </li>
                        <li className=" pt-6 text-xs">
                            <Link href={{ pathname: '/portofolio' }}>
                                <a className="transition duration-200 transform hover:opacity-50">
                                    PORTOFOLIO
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
        </nav>
    )
}


