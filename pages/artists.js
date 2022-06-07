import Link from 'next/link'

export default function Directors({ data }) {
    // console.log(data.data)
    
    const artist = data.data
    
    return( 

    <div className="flex flex-col md:flex-row flex-wrap md:justify-around justify-center items-center overscroll-contain py-12 w-full">
        {artist && artist.map((nuct) => (
            <h1 className="dark:text-gray-200 text-third font-sans px-8 py-2 m-2 leading-4 text-lg md:text-base lett tracking-normal font-normal"
                key={nuct.id}>
                <Link href={`/page/${nuct.attributes.Path}`} >
                    <a>
                        {nuct.attributes.Name.toUpperCase()}
                    </a>
                </Link>
            </h1>
        ))}
    </div>
    )
}

export async function getStaticProps() {
    const res = await fetch(process.env.APIURL + `/artists?sort[0]=Name%3Aasc&pagination[page]=1&pagination[pageSize]=1000`); 
    const data = await res.json();
    console.log(data)
    return {
        props: { data },
    };
}