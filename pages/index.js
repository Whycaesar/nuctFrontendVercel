import Head from 'next/head'
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';



export default function Home() {




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


      <div className='h-full'>
        <div className="flex flex-col w-full text-center font-serif h-full">
          <div className='static'>
            <div className='h-screen static min-w-full left-0'>
              <div className='carousel-home absolute h-screen bg-gray-300 dark:bg-black min-w-full  left-0'>
                <Carousel className='h-screen font-pre tracking-wider' autoPlay infiniteLoop statusFormatter={() => null}>
                  <a href='https://www.instagram.com/stories/highlights/17899694827766203/' target='_blank'>
                    <div>
                      <img src="Nuct.png" className='max-h-screen max-w-screen-xl pt-8' alt="Nuct" />
                      <div className='legend p-0 m-0 bg-white'>
                        <p className="h-12 pt-4 leading-4 text-4xl">NUCT</p>
                      </div>
                    </div>
                  </a>
                  <a href='https://www.instagram.com/stories/highlights/17887339016210418/' target='_blank'>
                    <div>
                      <img src="NR2.png" className='max-h-screen max-w-screen-xl' alt="Nuct Records" />
                      <div className='legend p-0 m-0 bg-white'>
                        <p className="h-12 pt-4 leading-4 text-4xl">NUCT RECORDS</p>
                      </div>
                    </div>
                  </a>
                  <a href='https://www.tokopedia.com/nuct' target='_blank'>
                    <div>
                      <img src="NuctGlobeWhite.png" className='max-h-screen max-w-screen-lg' alt="merchandise" />
                      <div className='legend p-0 m-0 bg-white'>
                        <p className="h-12 pt-4 leading-4 text-4xl">MERCHANDISE</p>
                      </div>
                    </div>
                  </a>

                  <a href='https://www.instagram.com/stories/highlights/17913363769238367/' target='_blank'>
                    <div>
                      <img src="AcoustikRoom.png" className='max-h-screen max-w-screen-xl pt-36' alt="Accoustic Room" />
                      <div className='legend p-0 m-0 bg-white'>
                        <p className="h-12 pt-4 leading-4 text-4xl">AKUSTIK ROOM</p>
                      </div>
                    </div>
                  </a>
                </Carousel>
              </div>

            </div>

          </div>
          <div className='relative'>
            <div className='h-full bg-green-600 flex flex-row'>
              <div className='w-1/3 bg-black'>
                <div className='bg-red-900 h-32 mb-4'>Follow Nuct Records</div>
                <div className='bg-red-200 h-96 my-4'>Shop Visit</div>
                <div className='bg-red-700 h-56 my-4'>News</div>
                <div className='h-52 bg-indigo-400'>Featured Video</div>
                <div className='w-full bg-red-700 pb-1 my-4'>
                  <div className='h-12 bg-red-600'>Upcoming Show</div>
                  <div className='h-32 bg-gray-800'>Band Perform</div>
                  <div className='h-32 bg-gray-300'>Band Perform</div>
                  <div className='h-32 bg-gray-800'>Band Perform</div>
                  <div className='h-32 bg-gray-300'>Band Perform</div>
                  <div className='h-32 bg-gray-800'>Band Perform</div>
                  <div className='h-32 bg-gray-300'>Band Perform</div>
                </div>
                <div className='h-40 flex flex-row bg-indigo-200 my-4'>
                  <div className='h-full w-1/5 bg-blue-800' >Logo FB</div>
                  <div className='h-full w-4/5 bg-red-200'>isi FB</div>
                </div>
              </div>
              <div className='w-1/3 bg-purple-600'>Twitter</div>
              <div className='w-1/3 bg-black '>
                <div className='h-52 bg-indigo-800 mb-4'>Listen</div>
                <div className='h-52 bg-indigo-400 my-4'>Featured Video</div>
                <div className='h-40 flex flex-row bg-indigo-200'>
                  <div className='h-full w-1/5 bg-blue-700' >Logo FB</div>
                  <div className='h-full w-4/5 bg-red-200'>isi FB</div>
                </div>
                <div className='h-52 bg-indigo-400 my-4'>Featured Video</div>
                <div className='w-full bg-red-800 pb-1 my-4'>
                  <div className='h-12 bg-red-600 '>Featured Artist</div>
                  <div className='h-96 bg-indigo-900'>Featured Artist</div>
                </div>
                <div className='h-40 flex flex-row bg-indigo-200 my-4'>
                  <div className='h-full w-1/5 bg-blue-800' >Logo FB</div>
                  <div className='h-full w-4/5 bg-red-200'>isi FB</div>
                </div>
                <div className='h-40 flex flex-row bg-indigo-200 my-4'>
                  <div className='h-full w-1/5 bg-blue-800' >Logo FB</div>
                  <div className='h-full w-4/5 bg-red-200'>isi FB</div>
                </div>
                <div className='w-full bg-red-800 pb-1 my-4'>
                  <div className='h-12 bg-red-600'>Featured Artist</div>
                  <div className='h-96 bg-indigo-900'>Featured Artist</div>
                </div>
              </div>
            </div>
            <div className='h-96 relative bg-blue-600'>IG Profile</div>
            <div className='h-40'>Footer</div>
          </div>



        </div>
      </div>
    </>
  )
}

