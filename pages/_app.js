import { useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import Layout from '../components/layout';
import { useRouter } from 'next/router';

import { Progress } from '../components/progress';
import { useProgressStore } from '../store';

function MyApp({ Component, pageProps }) {
  const setIsAnimating = useProgressStore((state) => state.setIsAnimating);
  const isAnimating = useProgressStore((state) => state.isAnimating);
  const router = useRouter();

  console.log('ini progress index ' + Progress)

  useEffect(() => {
    const handleStart = () => {
      setIsAnimating(true)
    }
    const handleStop = () => {
      setIsAnimating(false)
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routerChangeComplete', handleStop);
    router.events.on('routeChangeStart', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routerChangeComplete', handleStop);
      router.events.off('routeChangeStart', handleStop);
    }
  }, [router.events])
  return (
    <>
      
      <Layout>  
      <Progress isAnimating={isAnimating} />
        <Component key={router.asPath} {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
