import Link from 'next/link'

export default function Contact() {
    return (
        <div className='font-normal pt-10 md:pt-0 px-5 md:px-0 text-xs text-third leading-5 text-justify min-h-screen dark:text-gray-200'>
            <div className="md:mb-10">
            <div>Eleven Trees Complex</div>
            <div>Jl. Intan Ujung No 11, Cilandak</div>
            <div>Jakarta Selatan 12430</div>
            </div>
            <section className='pt-5 md:pt-0 h-20'>
                <div><a href="https://www.instagram.com/alsnugraha/" target="_blank"><b>ALI NUGRAHA</b></a>  / partner / owner and founder</div>
                <div>ali@nuct.co</div>
                <div>+62 818 419 149</div>
            </section>
            <section className='pt-5 md:pt-0 h-20'>
                <div><a href="https://www.instagram.com/bintangniti/" target="_blank"><b>BINTANG NITINEGORO</b></a> / partner / head of production</div>
                <div>bintang@nuct.co</div>
                <div>+62 877 7633 0415</div>
            </section>
            <section className='h-20 md:h-40 mt-10 md:mt-5'>
                <ol>
                    <a href="https://www.facebook.com/nuct.co" target="_blank"><li className="mr-3">FACEBOOK</li></a>
                    <a href="https://www.youtube.com/c/NuctKolektif" target="_blank"><li className="mr-3">YOUTUBE</li></a>
                    <a href="https://www.instagram.com/nuct.co/" target="_blank"><li className="mr-3">INSTAGRAM</li></a>
                </ol>
            </section>
            <section className='h-1/6'>
                <Link href={'/sign-up'}>
                    <a>Sign up for the newsletter HERE</a>
                </Link>
            </section>
        </div>
    )
}