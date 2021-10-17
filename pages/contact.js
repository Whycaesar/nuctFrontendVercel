import Layout from "../components/layout";

export default function Contact() {
    return(
        <Layout>
            <div className='font-normal text-xs text-third leading-5 text-justify min-h-screen'>
              <div className='h-10'>13 Rue De Turbigo, 75002 Paris, France</div>
              <section className='h-20'>
                  <div><b>NICHOLAS BERGLUND</b> / partner / owner and founder</div>
                  <div>nb@nicholasberglund.com</div>
                  <div>+34 637 77 22 28</div>
              </section>
              <section className='h-20'>
                  <div><b>RICK ROMANIUK</b> / partner / head of production</div>
                  <div>rick@nicholasberglund.com</div>
                  <div>+420 603 251 444</div>
              </section>
              <section className='h-40 mt-5'>
                  <ol>
                      <li className='h-9'><a>Facebook</a></li>
                      <li className='h-9'><a>Youtube</a></li>
                      <li className='h-9'><a>Instagram</a></li>
                  </ol>
              </section>
              <section className='h-1/6'>
                  <div>Sign up for the newsletter HERE</div>
              </section>
            </div>
        </Layout>
    )
}