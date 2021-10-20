import Link from 'next/link'

export default function Directors({ data }) {
    return <div className="flex flex-col md:flex-row flex-wrap md:justify-around justify-center items-center overscroll-contain py-12 w-full">
        {data && data.map((nuct) => (
            <h1 className="text-third font-sans px-8 py-2 m-2 leading-4 text-lg md:text-base lett tracking-normal font-normal"
                key={nuct.id}>
                <Link href={`/page/${nuct.Path}`} >
                    <a>
                        {nuct.Name.toUpperCase()}
                    </a>
                </Link>
            </h1>
        ))}
    </div>
}

export async function getStaticProps() {
    const res = await fetch(process.env.APIURL + `/artists`);
    const data = await res.json();
    
    return {
        props: { data },
    };
}