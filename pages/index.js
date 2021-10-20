import Head from 'next/head'
import Link from 'next/link'
import { siteTitle } from '../components/layout'
import MarkdownIt from 'markdown-it'
import { useRouter } from 'next/router'

export default function Home({ nucts, page, numberOfContent }) {
  const src = "https://www.youtube-nocookie.com/embed/";
  const srx = "?controls=0?value=0SameSite=Strict";
  const flexRow = "md:flex md:flex-row";
  const flexRowReverse = "md:flex md:flex-row-reverse";
  const md = new MarkdownIt();
  const router = useRouter()
  const lastPage = Math.ceil(numberOfContent / 6);

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/images/nuct-logo.webp" />
      </Head>
      <div className="flex flex-col w-full flex-1 text-center font-serif">
        {
          nucts && nucts.map((data, index) => (
            <Link href={`/${data.Path}`} key={data.id}><a target="_blank">
              <div className="md:pt-6" >
                <div className={"flex flex-col-reverse " + (index % 2 == 0 ? flexRow : flexRowReverse)} >
                  <div className="w-full md:w-1/2 flex flex-col text-left text-xs text-third leading-5 font-rob pt-4 px-4 pb-3">
                    <h1 className="mb-3 font-semibold">{data.Title}</h1>
                    <section className="md:h-9 font-thin text-justify prose" dangerouslySetInnerHTML={{ __html: md.render(data.Content) }}></section>
                  </div>
                  <div className="flex-shrink-0 lg:w-5"></div>
                  <div className="w-full md:w-1/2 pt-4 px-4 pb-3">
                    <div className="aspect-w-16 aspect-h-9">
                      <iframe
                        src={src + data.Link + srx}
                        title="Tuan Tigabelas - F*ck They Say #WhenDistortionGoesUnplugged"
                        frameBorder="0"
                        allow="fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                  </div>
                </div>
                <div className="md:h-8 bg-white"></div>
              </div>
            </a></Link>
          ))
        }
      </div>
      <div className="mb-10 md:mb-20 mt-20 text-footer">
        <hr className="text-footer"></hr>
        <div className="flex flex-row justify-between p-4 text-third text-xs">
          <button onClick={() => router.push(`?page=${page - 1}`)} disabled={page <= 1}>
            {page <= 1 ? "" : "← Newer Posts"}
          </button>
          <button onClick={() =>
            router.push(`?page=${page + 1}`)}
            disabled={page >= lastPage}>
            {page >= lastPage ? "" : "Older Posts →"}
          </button>
        </div>
        <hr></hr>
      </div>
    </>
  )
}

export async function getServerSideProps({ query: { page = 1 } }) {
  const start = +page === 1 ? 0 : (+page - 1) * 6

  const numberOfContentResponse = await fetch(process.env.APIURL + `/nucts/count`);
  const numberOfContent = await numberOfContentResponse.json();

  const res = await fetch(process.env.APIURL + `/nucts?_limit=6&_start=${start}`);
  const data = await res.json();

  return {
    props: {
      nucts: data,
      page: +page,
      numberOfContent,
    },
  };
}