import Link from 'next/link'

export default function Contact() {
    return (
        <div className='font-normal text-xs text-third leading-5 text-justify min-h-screen'>
            <div className='h-10'>Eleven Trees Complex Jl. Intan Ujung No 11, Cilandak - Jakarta Selatan 12430</div>
            <section className='h-20'>
                <div><b>ALI NUGRAHA</b> / partner / owner and founder</div>
                <div>ali@nuct.co</div>
                <div>+62 818 419 149</div>
            </section>
            <section className='h-20'>
                <div><b>BINTANG NITINEGORO</b> / partner / head of production</div>
                <div>bintang@nuct.co</div>
                <div>+62 877 7633 0415</div>
            </section>
            <section className='h-40 mt-5'>
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