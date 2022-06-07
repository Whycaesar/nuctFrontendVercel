import Head from 'next/head'
import Link from 'next/link'
import MarkdownIt from 'markdown-it'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'


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

      <div className='bg-yellow-400 h-full'>
        <div className="flex flex-col bg-yellow-400 w-full text-center font-serif h-full">
        <div className='static bg-white'>
          <div className='h-screen bg-green-500 static min-w-full left-0'>
            <div className='absolute h-screen min-w-full  left-0 bg-indigo-800'>Carousel
            <a href="https://www.instagram.com/stories/highlights/17935669600095224/">haha</a>
            </div>
          </div>
          <div className='h-16 bg-green-500 static min-w-full left-0'>
            <div className='absolute min-w-full h-16 left-0 bg-gray-800'>Description</div>
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

