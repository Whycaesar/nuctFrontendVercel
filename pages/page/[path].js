import Head from 'next/head'

export default function Artist({ artist }) {
    const dataAll = artist.data;
    const data = dataAll[0]
    const videoData = data.attributes.nucts.data;
    const artistName = data.attributes.Name.toUpperCase();

    
    console.log('data atas nama ' + data.attributes.Name)
    console.log('data atas path ' + data.attributes.Path)

    return (
        <>
            <Head>
                <title>{artistName}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <meta name="description" content={artistName}></meta>
                <meta name="generator" content="Creative - Collective Production"></meta>
                <meta name="og:title" content={artistName} />
                <meta property="og:description" content={artistName} />
            </Head>
            <div className="font-rob">
                <h1 className="text-l font-bold leading-10 text-secondary dark:text-gray-200">{artistName} / ARTISTS</h1>
                <div className="mb-5">
                    <ol className="flex flex-row w text-xs text-third leading-5 dark:text-gray-200">
                        <li className="mr-3">ARCHIVE</li>
                        <li className="mr-3">WEBSITE</li>
                        <li className="mr-3">CV</li>
                    </ol>
                </div>
                <div className="min-h-full flex flex-col md:flex-row flex-wrap my-12">
                    {
                        videoData.map((artist, index) => (
                            <div className='md:w-1/3 md:my-3'>
                            <div key={artist.attributes.id} className="pb-20 md:pb-0 md:w-full md:px-0 md:mb-10">
                                <div className="w-full px-2 md:h-48" >
                                    <div className="aspect-w-16 aspect-h-9">

                                        <iframe
                                            className="rounded-lg"
                                            src={"https://www.youtube-nocookie.com/embed/" + artist.attributes.Link + "?controls=0?value=0"}
                                            title={artist.attributes.Title}
                                            frameBorder="0"
                                            allow="fullscreen; 
              
        autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    </div>

                                    <div className="w text-xs leading-5 tracking-wide text-third font-semibold dark:text-gray-200">{artist.attributes.Title}</div>
                                </div>
                            </div>
                            </div>

                        ))
                    }
                </div>
            </div>
        </>
    );
}

// tell nextJs how many there are
export async function getStaticPaths() {
    const res = await fetch(process.env.APIURL + "/artists?pagination[page]=1&pagination[pageSize]=1000");
    const postsAll = await res.json();
    const posts = postsAll.data;

    const paths = posts.map((data) => ({
        params: { path: JSON.parse(JSON.stringify(data.attributes.Path)).toString() },
    }));

    return {
        paths,
        fallback: false,
    };
}

export const getStaticProps = async (context) => {
    console.log(context)
    const path = context.params.path;
    const res = await fetch(process.env.APIURL + `/artists?filters[Path][$eq]=${path}&populate=*`);
    const pathArtist = await res.json();

    return {
        props: { artist: pathArtist }
    }
}
