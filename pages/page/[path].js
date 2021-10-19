export default function Artist({ data }) {
    const videoData = data.Nucts;
    const artistName = data.Name.toUpperCase();
    for (let x = 0; x < videoData.length; x++) {
    }
    return (
        <>
            <div className="font-rob">
                <h1 className="text-l font-bold leading-10 text-secondary">{artistName} / ARTISTS</h1>
                <div className="mb-5">
                    <ol className="flex flex-row w text-xs text-third leading-5">
                        <li className="mr-3">ARCHIVE</li>
                        <li className="mr-3">WEBSITE</li>
                        <li className="mr-3">CV</li>
                    </ol>
                </div>
                <div className="min-h-full flex my-12">
                    {
                        videoData.map((artist, index) => (
                            <>
                                <div className="w-4/12 mr-3 h-48" key={artist.id}>
                                    <div>
                                        <div className="aspect-w-16 aspect-h-9">

                                            <iframe
                                                src={"https://www.youtube-nocookie.com/embed/" + artist.Link + "?controls=0?value=0"}
                                                title={artist.Title}
                                                frameBorder="0"
                                                allow="fullscreen; 
              
        autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                        </div>
                                    </div>
                                    <div className="w text-xs leading-5 tracking-wide text-third font-semibold">{artistName}</div>
                                </div>
                            </>
                        ))
                    }
                </div>
            </div>
        </>
    );
}

// tell nextJs how many there are
export async function getStaticPaths() {
    const res = await fetch(process.env.APIURL + `/artists`);
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

    const res = await fetch(process.env.APIURL + `/artists?Path=${path}`);
    const nuct = await res.json();
    const data = nuct[0]

    return {
        props: { data },
    };
}

