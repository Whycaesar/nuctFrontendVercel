import Head from 'next/head'
import MarkdownIt from 'markdown-it'
const md = new MarkdownIt();

export default function Post({ artist }) {
    const src = "https://www.youtube-nocookie.com/embed/"
    const srx = "?controls=0?value=0SameSite=Strict";
    const data = artist.data;
    console.log('data atas ' + data.id)
    return (
        <>
            <Head>
                <title>{data.attributes.Title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <meta name="description" content={data.attributes.Title}></meta>
                <meta name="generator" content={data.attributes.Title}></meta>
                <meta name="og:title" content={data.attributes.Title} />
                <meta property="og:description" content={data.attributes.Title} />
            </Head>
            <div className="pt-14">
                <div className="flex-col">
                    <div className="w-auto">
                        <div className="aspect-w-16 aspect-h-9">
                            <iframe
                                className="rounded-lg"
                                src={src + data.attributes.Link + srx}
                                title={data.attributes.Title}
                                frameBorder="0"
                                allow="fullscreen; 
                            autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                    <div className="h-8 bg-white dark:bg-black"></div>
                    <div className="w-auto flex flex-col text-left text-xs text-third dark:text-white leading-5 font-rob pb-60">
                        <h1 className="mb-3 font-semibold">{data.attributes.Title}</h1>
                        <section className="h-9 font-thin text-justify prose dark:text-gray-200" dangerouslySetInnerHTML={{ __html: md.render(data.attributes.Content) }}></section>
                    </div>
                </div>
            </div>
        </>
    );
}

// tell nextJs how many there are
export async function getStaticPaths() {
    const res = await fetch(process.env.APIURL + "/nucts");
    const postsAll = await res.json();
    const posts = postsAll.data;

    // console.log(postsAll.data)
    const paths = posts.map((data) => ({
        params: { path: JSON.parse(JSON.stringify(data.id)).toString() },
    }));

    console.log(paths)
    return {
        paths,
        fallback: false,
    };
}

// for each infividual page: get the data for that page
// export async function getStaticProps({ params }) {
//     const { path } = params;
//     console.log("pathss    " + path)
//     const res = await fetch(process.env.APIURL + '/nucts?' + path);
//     const nuct = await res.json();
//     console.log('pparams' + params)
//     // console.log(nuct.data.Path[path])
//     const data = JSON.stringify(nuct);

//     console.log(data)

//     return {
//         props: { data },
//     };


// }

export const getStaticProps = async (context) => {
    console.log(context)
    const path = context.params.path;
    console.log("path nih " + path)
    const res = await fetch(process.env.APIURL + "/nucts/" + path);
    const pathArtist = await res.json();

    return {
        props: { artist: pathArtist }
    }
}