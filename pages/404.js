export default function Custom404({desc= "the page you seek does not exist", error= "404" }) {
    return <div className="bg-black absolute left-0 m-0 min-w-full min-h-full overflow-x-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-sans max-w-sm">
            <div className="text-lg text-center">
                <h1 className="mb-10 p-0 text-9xl transform-gpu -skew-y-6 filter 
                hover:bg-gray-300 hover:font-extrabold hover:text-gray-800 hover:shadow-outline hover:shadow-2xl hover:duration-1000 shadow-2xl">{error}</h1>
                <h3 className="text-yellow-300 text-lg h-14">{desc}</h3>
            </div>
            <div className="flex flex-wrap flex-col md:flex-row items-center w-full">
                <a href="/" title="home" className="relative flex-1 text-white rounded-sm border mx-5 text-center py-3 px-5 o
                verflow-hidden transition-transform ease-in-out z-30 hover:text-black hover:bg-white hover:-translate-x-1 hover:duration-1000">
                    HOME
                    <span className="hover:w-4/6 hover:h-4/6"></span>
                </a>
                <p className="legal mt-8 md:mt-0">copyright &copy; 2021&nbsp;-&nbsp;Made by &#128420;</p>
            </div>
        </div>
    </div>
}