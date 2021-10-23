import Image from 'next/image'
import ocbcPortofolio from '/public/images/ocbc.jpg'
import niaga4Portofolio from '/public/images/niaga4.jpg'
import keppelPortofolio from '/public/images/keppel.jpg'
import niaga3Portofolio from '/public/images/niaga3.jpg'
import libertyPortofolio from '/public/images/liberty.jpg'
import shutterbugPortofolio from '/public/images/shutterbug.jpg'
import cloudsPortofolio from '/public/images/clouds.jpg'
import beetlePortofolio from '/public/images/beetle.jpg'
import lighthousePortofolio from '/public/images/lighthouse.jpg'
import saladPortofolio from '/public/images/salad.jpg'

export default function Editors() {
    return (
        <div className="font-rob flex flex-col pb-20">
            <h1 className="text-lg pl-3 md:pl-0 font-bold leading-10 text-secondary dark:text-gray-200">NUCT / PORTFOLIO</h1>
            <div className="mb-10 pl-3 md:pl-0 md:mb-5">
                <ol className="flex flex-row w text-xs text-third leading-5 dark:text-gray-200">
                    <a href="#" target="_blank"><li className="mr-3">ARCHIVE</li></a>
                    <a href="#" target="_blank"><li className="mr-3">WEBSITE</li></a>
                    <a href="#" target="_blank"><li className="mr-3">CV</li></a>
                </ol>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between md:mb-10 p-3 md:p-0">
                <div className="w-full md:w-4/12 md:mr-3">
                    <a href="https://www.youtube.com/watch?v=4Fhbz3pPtxI" target="_blank">
                        <Image
                            src={ocbcPortofolio}
                            alt="UPDRADE POTENSIMU"
                            height={800}
                            placeholder="blur"
                            priority
                        />
                    </a>
                    <div className="text-xs leading-5 tracking-wide text-third font-semibold dark:text-gray-200">UPDRADE POTENSIMU</div>
                </div>
                <div className="w-full mt-10 md:mt-0 md:w-4/12 md:mx-3">
                    <a href="https://www.youtube.com/watch?v=mXYdo90vEp4" target="_blank">
                        <Image
                            src={niaga4Portofolio}
                            alt="CHRISTMAS & NEW YEAR 2019"
                            height={800}
                            placeholder="blur"
                            priority
                        />
                    </a>
                    <div className="text-xs leading-5 tracking-wide text-third font-semibold dark:text-gray-200">CHRISTMAS & NEW YEAR 2019</div>
                </div>
                <div className="w-full mt-10 md:mt-0 md:w-4/12 md:ml-3">
                    <a href="https://www.youtube.com/watch?v=3VSdGOEbVqI" target="_blank">
                        <Image
                            src={keppelPortofolio}
                            alt="THE CREST AT WEST VISTA"
                            height={800}
                            placeholder="blur"
                            priority
                        />
                    </a>
                    <div className="text-xs leading-5 tracking-wide text-third font-semibold dark:text-gray-200">THE CREST AT WEST VISTA</div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between md:mb-10">
                <div className="w-full mt-10 md:mt-0 md:w-4/12 md:mr-3">
                    <a href="https://www.youtube.com/watch?v=lDsMoat_1yo" target="_blank">
                        <Image
                            src={niaga3Portofolio}
                            alt="CHINESE NEW YEAR 2019"
                            height={800}
                            placeholder="blur"
                            priority
                        />
                    </a>
                    <div className="text-xs leading-5 tracking-wide text-third font-semibold dark:text-gray-200">CHINESE NEW YEAR 2019</div>
                </div>
                <div className="w-full mt-10 md:mt-0 md:w-4/12 md:mx-3">
                    <a href="https://www.youtube.com/watch?v=RMUTRzUO9xA" target="_blank">
                        <Image
                            src={libertyPortofolio}
                            alt="BERBAGI MIMPI DI PESISIR NEGERI"
                            height={800}
                            placeholder="blur"
                            priority
                        />
                    </a>
                    <div className="text-xs leading-5 tracking-wide text-third font-semibold dark:text-gray-200">BERBAGI MIMPI DI PESISIR NEGERI</div>
                </div>
                <div className="w-full mt-10 md:mt-0 md:w-4/12 md:ml-3">
                    <a href="https://www.youtube.com/watch?v=1i47BGx_mcI" target="_blank">
                        <Image
                            src={shutterbugPortofolio}
                            alt="TELKOM NEUCENTRIX"
                            height={800}
                            placeholder="blur"
                            priority
                        />
                    </a>
                    <div className="w text-xs leading-5 tracking-wide text-third font-semibold dark:text-gray-200">TELKOM NEUCENTRIX</div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between md:mb-10">
                <div className="w-full mt-10 md:mt-0 md:w-4/12 md:mr-3">
                    <a href="https://www.youtube.com/watch?v=fVDK5ScvKD0" target="_blank">
                        <Image
                            src={cloudsPortofolio}
                            alt="THEMATIC WAISAK"
                            height={800}
                            placeholder="blur"
                            priority
                        />
                    </a>
                    <div className="w text-xs leading-5 tracking-wide text-third font-semibold dark:text-gray-200">THEMATIC WAISAK</div>
                </div>
                <div className="w-full mt-10 md:mt-0 md:w-4/12 md:mx-3">
                    <a href="https://www.youtube.com/watch?v=EYU2t0gaAd0" target="_blank">
                        <Image
                            src={beetlePortofolio}
                            alt="RUMAH MIMPI"
                            height={800}
                            placeholder="blur"
                            priority
                        />
                    </a>
                    <div className="text-xs leading-5 tracking-wide text-third font-semibold dark:text-gray-200">RUMAH MIMPI</div>
                </div>
                <div className="w-full mt-10 md:mt-0 md:w-4/12 md:ml-3">
                    <a href="https://www.youtube.com/watch?v=SLX6quwnbJw" target="_blank">
                        <Image
                            src={lighthousePortofolio}
                            alt="TELKOMSEL 4G LTE - PROFESSIONAL"
                            height={800}
                            placeholder="blur"
                            priority
                        />
                    </a>
                    <div className="text-xs leading-5 tracking-wide text-third font-semibold dark:text-gray-200">TELKOMSEL 4G LTE - PROFESSIONAL</div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between md:mb-10">
                <div className="w-full mt-10 md:mt-0 md:w-4/12 md:mr-3">
                    <a href="https://www.youtube.com/watch?v=hI9aLlS9pWk" target="_blank">
                        <Image
                            src={saladPortofolio}
                            alt="THERAGRAN MULTIVITAMIN"
                            height={800}
                            placeholder="blur"
                            priority
                        />
                    </a>
                    <div className="text-xs leading-5 tracking-wide text-third font-semibold dark:text-gray-200">THERAGRAN MULTIVITAMIN</div>
                </div>
                <div className="w-full mt-10 md:mt-0 md:w-4/12 md:mx-3">
                    {/* <Image
                        src={beetlePortofolio}
                        alt="Picture of the author"
                        height={800}
                        placeholder="blur"
                    /> */}
                    <div className="w text-xs leading-5 tracking-wide text-third font-semibold dark:text-gray-200"></div>
                </div>
                <div className="w-full mt-10 md:mt-0 md:w-4/12 md:ml-3">
                    {/* <Image
                        src={lighthousePortofolio}
                        alt="Picture of the author"
                        height={800}
                        placeholder="blur"
                    /> */}
                    <div className="w text-xs leading-5 tracking-wide text-third font-semibold dark:text-gray-200"></div>
                </div>
            </div>
        </div>
    )
}