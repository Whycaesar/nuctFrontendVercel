import MarkdownIt from 'markdown-it'
const md = new MarkdownIt();

export default function Post({ data }) {
    const src = "https://www.youtube-nocookie.com/embed/"
    const srx = "?controls=0?value=0SameSite=Strict";
    return (
        <div>
            <div className="pt-14">
                <div className="flex-col">
                    <div className="w-auto">
                        <div className="aspect-w-16 aspect-h-9">
                            <iframe
                                src={src + data.Link + srx}
                                title="Tuan Tigabelas - F*ck They Say #WhenDistortionGoesUnplugged"
                                frameBorder="0"
                                allow="fullscreen; 
                            autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                    <div className="h-8 bg-white"></div>
                    <div className="w-auto flex flex-col text-left text-xs text-third leading-5 font-rob pb-60">
                        <h1 className="mb-3 font-semibold">{data.Title}</h1>
                        <section className="h-9 font-thin text-justify prose" dangerouslySetInnerHTML={{ __html: md.render(data.Content) }}></section>
                    </div>
                </div>
            </div>

        </div>
    );
}

// tell nextJs how many there are
export async function getStaticPaths() {
    const res = await fetch(process.env.APIURL + "/nucts");
    const posts = await res.json();

    const paths = posts.map((data) => ({
        params: { path: data.Path },
    }));

    return {
        paths,
        fallback: false,
    };
}

// for each infividual page: get the data for that page
export async function getStaticProps({ params }) {
    const { path } = params;

    const res = await fetch(process.env.APIURL + `/nucts?Path=${path}`);
    const nuct = await res.json();
    const data = nuct[0];

    return {
        props: { data },
    };
}

