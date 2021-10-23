import Head from 'next/head'
import Link from 'next/link'
import MarkdownIt from 'markdown-it'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Home({ nucts, page, numberOfContent }) {
  const src = "https://www.youtube-nocookie.com/embed/";
  const srx = "?controls=0?value=0SameSite=Strict";
  const flexRow = "md:flex md:flex-row";
  const flexRowReverse = "md:flex md:flex-row-reverse";
  const md = new MarkdownIt();
  const router = useRouter()
  const lastPage = Math.ceil(numberOfContent / 6);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true)
  }, [page])

  return (
    <>
      <Head>
        <title>{process.env.SITETITLE}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <meta name="description" content="Nuct is an agile creative video maker team. We specialize in commercials, branded content, social asset creation services for a diverse range of clients."></meta>
        <meta name="generator" content="Creative - Collective Production"></meta>
        <meta name="og:title" content={process.env.SITETITLE + " is an agile creative video maker team."} />
        <meta property="og:description" content={process.env.SITETITLE + " specialize in commercials"} />
      </Head>

      <div className="flex flex-col  w-full flex-1 text-center font-serif">
        {mounted &&
          nucts && nucts.map((data, index) => (
            <Link href={`/${data.Path}`} key={data.id}><a target="_blank">
              <div className="md:pt-6 lg:mb-10" >
                <div className={"flex flex-col-reverse " + (index % 2 == 0 ? flexRow : flexRowReverse)} >
                  <div className="w-full md:w-1/2 flex flex-col text-left text-xs dark:text-white text-third leading-5 font-rob pt-4 px-4 pb-3">
                    <h1 className="mb-3 font-semibold">{data.Title}</h1>
                    <section className="font-thin dark:text-gray-200 text-justify prose" dangerouslySetInnerHTML={{ __html: md.render(data.Content) }}></section>
                  </div>
                  <div className="flex-shrink-0 lg:w-5"></div>
                  <div className="w-full md:w-1/2 pt-4 px-4 md:pt-6">
                    <div className="aspect-w-16 aspect-h-9">
                      <iframe
                      className="rounded-lg"
                        src={src + data.Link + srx}
                        title={data.Title}
                        frameBorder="0"
                        allow="fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                  </div>
                </div>
                {/* <div className="md:h-8 bg-white dark:bg-black"></div> */}
              </div>
            </a></Link>
          ))
        }
      </div>
      <div className="mb-10 md:mb-20 mt-20 text-footer dark:text-gray-200">
        <hr className="text-footer dark:text-white"></hr>
        <div className="flex flex-row justify-between p-4 text-third text-xs dark:text-gray-200">
          <button onClick={() => router.push(`?page=${page - 1}`)} disabled={page <= 1} aria-hidden="true">
            {page <= 1 ? "" : "← Newer Posts"}
          </button>
          <button onClick={() =>
            router.push(`?page=${page + 1}`)}
            disabled={page >= lastPage}>
            {page >= lastPage ? "" : "Older Posts →"}
          </button>
        </div>
        <hr className="text-footer dark:text-white"></hr>
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