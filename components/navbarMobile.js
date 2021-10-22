import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react';

export default function NavbarMobile() {
    const [open, setOpen] = useState(1)
    const [showNavbar, setShowNavbar] = useState("h-20 ")
    const openNavBar = () => {
        console.log(open)
        return (open % 2 == 1) ?

            (setShowNavbar("h-80 "), setOpen(open + 1))
            :
            (setShowNavbar("h-20 "), setOpen(open + 1));        
    }

    const noOpenNavBar = () => setOpen(open + 0);
    return (
        <>
            <div className={showNavbar + "md:hidden p-5 flex flex-col justify-end items-center"}>
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
                <a className="mt-6 text-third leading-10 tracking-wider font-bold text-lg opacity-70 block" onClick={openNavBar}>MENU</a>
                <hr className="text-black text-lg"></hr>
            </div>
            <div className="flex justify-center md:hidden">
                <Link href={{ pathname: '/' }}>
                    <a onClick={open == 1 || open % 2 == 1 ? noOpenNavBar : openNavBar}>
                        <Image
                            src="/images/nuct.png"
                            height={70}
                            width={70}
                            alt={'Creative - Collective Production'}
                        />
                    </a>
                </Link>
            </div>
        </>
    )
}