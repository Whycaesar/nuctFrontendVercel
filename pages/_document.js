import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

    
    static async getInitialProps(ctx) {
        const originalRenderPage = ctx.renderPage        
        ctx.renderPage = () =>
          originalRenderPage({
            // useful for wrapping the whole react tree
            enhanceApp: (App) => App,
            // useful for wrapping in a per-page basis
            enhanceComponent: (Component) => Component,
          })
    
        // Run the parent `getInitialProps`, it now includes the custom `renderPage`
        const initialProps = await Document.getInitialProps(ctx)
    
        return initialProps
      }
    

    render() {

        
        return (
            <Html lang="en">
                <Head>
                    <meta charSet="UTF-8"></meta>
                    <meta content="text/html; UTF-8" httpEquiv="Content-Type"></meta>
                    <meta name="author" content="Ali Nugraha"></meta>
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta property="og:image" content="/images/nuct-logo.webp"></meta>
                    <meta property="og:url" content={"https://nuct.co"} />
                    <meta property="og:type" content="website" />
                    <meta name="theme-color" content="#FFFFFF"/>
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="apple-touch-icon" href="/images/nuct-logo.webp"></link>
                    <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                    <link rel="preconnect" href="https://fonts.gstatic.com" ></link>
                    <link href="https://fonts.googleapis.com/css2?family=Encode+Sans+Condensed:wght@500&family=Roboto&display=swap" rel="stylesheet"></link>
                    <link href="https://fonts.googleapis.com/css2?family=Encode+Sans+Condensed:wght@400&display=swap" rel="stylesheet"></link>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument