import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import MarkdownIt from 'markdown-it'

export default function Home({ nucts }) {
  const src = "https://www.youtube-nocookie.com/embed/"
  const srx = "?controls=0?value=0SameSite=Strict";
  const flexRow = "flex flex-row";
  const flexRowReverse = "flex flex-row-reverse";
  const md = new MarkdownIt();

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/images/nuct-logo.webp" />
      </Head>

      <main className="flex flex-col w-full flex-1 text-center font-serif">
        {
          nucts && nucts.map((data, index) => (
            <div className="pt-6" key={data.id}>
              <div className={index % 2 == 0 ? flexRow : flexRowReverse}>
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
          ))
        }
      </main>
    </>
  )
}

export async function getStaticProps() {

  //get data from api
  const res = await fetch('http://localhost:1337/nucts');
  const nucts = await res.json();

  console.log(nucts);

  return {
    props: { nucts }
  };
}
