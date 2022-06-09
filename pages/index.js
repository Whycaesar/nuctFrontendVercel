import Head from 'next/head'
import { useEffect } from 'react';
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Instafeed from '../node_modules/instafeed.js/src/instafeed'



export default function Home() {

  var userFeed = new Instafeed({
    get: 'user',
    limit: 9,
    target: "instafeed-container",
    resolution: 'low_resolution',
    template: '<a href="{{link}}" target="_blank"><img title="{{caption}}" src="{{image}}" /></a>',
    accessToken: 'IGQVJVcF9pR0hyX2d4SGptejd5RlVzTzNianN6cEN2MWdrMGItVTVLUlZAhdkV0T0NJa1JzX1FIZAFZAVc0F1Y1Naa3JLWG9YOVVMX3MzMTNpYXFHM082Q1kzZAHdsbzdjSl84WDUzOUhsN3g1Vk0tN2JCeQZDZD'
  });


  useEffect(() => {
    userFeed.run();
  }, []);

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
        <div className="flex flex-col w-full text-center font-serif h-full ">
          <div className='static'>
            <div className='h-screen static min-w-full left-0'>
              <div className='carousel-home absolute h-screen bg-gray-300 dark:bg-black min-w-full  left-0'>
                <Carousel className='h-screen font-pre tracking-wider' autoPlay infiniteLoop statusFormatter={() => null}>
                  <a href='https://www.instagram.com/stories/highlights/17899694827766203/' target='_blank'>
                    <div>
                      <img src="Nuct.png" className='max-h-screen max-w-screen-xl pt-8' alt="Nuct" />
                      <div className='legend p-0 m-0 bg-white'>
                        <p className="h-16 pt-6 leading-4 text-4xl">NUCT</p>
                      </div>
                    </div>
                  </a>
                  <a href='https://www.instagram.com/stories/highlights/17887339016210418/' target='_blank'>
                    <div>
                      <img src="NR2.png" className='max-h-screen max-w-screen-xl' alt="Nuct Records" />
                      <div className='legend p-0 m-0 bg-white'>
                        <p className="h-16 pt-6 leading-4 text-4xl">NUCT RECORDS</p>
                      </div>
                    </div>
                  </a>
                  <a href='https://www.tokopedia.com/nuct' target='_blank'>
                    <div>
                      <img src="NuctGlobeWhite.png" className='max-h-screen max-w-screen-lg' alt="merchandise" />
                      <div className='legend p-0 m-0 bg-white'>
                        <p className="h-16 pt-6 leading-4 text-4xl">MERCHANDISE</p>
                      </div>
                    </div>
                  </a>

                  <a href='https://www.instagram.com/stories/highlights/17913363769238367/' target='_blank'>
                    <div>
                      <img src="AcoustikRoom.png" className='max-h-screen max-w-screen-xl pt-36' alt="Accoustic Room" />
                      <div className='legend p-0 m-0 bg-white'>
                        <p className="h-16 pt-6 leading-4 text-4xl">AKUSTIK ROOM</p>
                      </div>
                    </div>
                  </a>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
        <div className='flex mb-10 pt-10'>
            <div id="instafeed-container" className='flex flex-row flex-wrap justify-between'></div>
          </div>
      </div>
    </>
  )
}

