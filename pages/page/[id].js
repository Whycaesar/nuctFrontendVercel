import Head from 'next/head'
import Link from 'next/link'
import { siteTitle } from '../../components/layout'
import MarkdownIt from 'markdown-it'
const md = new MarkdownIt();

export default function Post({ data }) {
    const src = "https://www.youtube-nocookie.com/embed/"
    const srx = "?controls=0?value=0SameSite=Strict";
    console.log("frontend")
    return (
      <>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/images/nuct-logo.webp" />
      </Head>

      <main className="flex flex-col w-full flex-1 text-center font-serif">
        {/* {
          nucts && nucts.map((data, index) => (
            <Link  href={`/${data.Path}`}  key={data.id}>
              <a> */}
            <div className="pt-6">
              {/* <div className={index % 2 == 0 ? flexRow : flexRowReverse}> */}
              <div className="flex-row">
                <div className="w-1/2 flex flex-col text-left text-xs text-third leading-5 font-rob">
                  <h1 className="mb-3 font-semibold">{data.Title}</h1>
                  <section className="h-9 font-thin text-justify prose" dangerouslySetInnerHTML={{__html: md.render(data.Content)}}></section>
                </div>
                <div className="flex-shrink-0 w-5"></div>
                <div className="w-1/2">
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe
                      src={src + data.Link + srx}
                      title="Tuan Tigabelas - F*ck They Say #WhenDistortionGoesUnplugged"
                      frameBorder="0"
                      allow="fullscreen; 
                  
            autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  </div>
                </div>
              </div>
              <div className="h-8 bg-white"></div>
            </div>
          {/* </a>
          </Link>
          ))
        } */}
      </main>
      <div className="mb-20 mt-20 text-footer"> 
      <hr className="text-footer"></hr>
      <div className="flex flex-row justify-between p-4 text-third text-xs">
      <Link href={'/page/2'}>
        <a>
        Newer Posts
        </a>
      </Link>
      <div className="">Older Posts </div>
      </div>
      <hr></hr>
      </div>
    </>
    );
}

// tell nextJs how many there are
export async function getStaticPaths() {
    const res = await fetch("http://localhost:1337/nucts");
    const posts = await res.json();
    console.log("posts " + posts);
    const paths = posts.map((data) => ({
        params: { id: data.Path },
    }));

    console.log("paths " + paths);
    return {
        paths,
        fallback: false,
    };
}

// for each infividual page: get the data for that page
export async function getStaticProps({ params }) {
    const { id } = params;
    console.log("params " + id);

    const res = await fetch(`http://localhost:1337/nucts?Path=${id}`);
    const nuct = await res.json();
    const data = nuct[0];

    return {
        props: { data },
    };
}

