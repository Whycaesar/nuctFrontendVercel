import Link from 'next/link'

export default function Directors({ data }) {
    console.log(data[0].Nucts.length)
    // let singer = "Bungen Mulia"
    const x = data[0].Nucts;
    for (let i = 0; i < x.length; i++) {
        console.log(x[i].Title)
    }

    return <div className="flex flex-row flex-wrap justify-center overscroll-contain py-12 w-full">
        {data && data.map((nuct) => (
            <h1 className="text-third font-sans px-8 m-2 leading-8 text-lg lett tracking-normal font-normal"
                key={nuct.id}>
                <Link href="/" >
                    <a>
                        {nuct.Name}
                    </a>
                </Link>
            </h1>
        ))}
    </div>
}

export async function getStaticProps() {
    const res = await fetch(process.env.APIURL + `/artists`);
    const data = await res.json();
    console.log(data);

    return {
        props: { data },
    };
}