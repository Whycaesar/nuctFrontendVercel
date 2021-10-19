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
            <h1 className="text-l font-bold leading-10 text-secondary">NUCT / PORTFOLIO</h1>
            <div className="mb-5">
                <ol className="flex flex-row w text-xs text-third leading-5">
                    <a href="https://www.nuct.co/" target="_blank"><li className="mr-3">ARCHIVE</li></a>
                    <a href="https://www.nuct.co/" target="_blank"><li className="mr-3">WEBSITE</li></a>
                    <a href="https://www.nuct.co/" target="_blank"><li className="mr-3">CV</li></a>
                </ol>
            </div>
            <div className="flex justify-between mb-10">
                <div className="w-4/12 mr-3">
                    <a href="https://www.youtube.com/watch?v=4Fhbz3pPtxI" target="_blank">
                        <Image
                            src={ocbcPortofolio}
                            alt="Picture of the author"
                            height={800} automatically provided
                            placeholder="blur"
                            priority
                        />
                    </a>
                    <div className="w text-xs leading-5 tracking-wide text-third font-semibold">UPDRADE POTENSIMU</div>
                </div>
                <div className="w-4/12 mx-3 h-48">
                    <a href="https://www.youtube.com/watch?v=mXYdo90vEp4" target="_blank">
                        <Image
                            src={niaga4Portofolio}
                            alt="Picture of the author"
                            height={800} automatically provided
                            placeholder="blur"
                            priority
                        />
                    </a>
                    <div className="w text-xs leading-5 tracking-wide text-third font-semibold">CHRISTMAS & NEW YEAR 2019</div>
                </div>
                <div className="w-4/12 ml-3 h-48">
                    <a href="https://www.youtube.com/watch?v=3VSdGOEbVqI" target="_blank">
                        <Image
                            src={keppelPortofolio}
                            alt="Picture of the author"
                            height={800} automatically provided
                            placeholder="blur"
                            priority
                        />
                    </a>
                    <div className="w text-xs leading-5 tracking-wide text-third font-semibold">THE CREST AT WEST VISTA</div>
                </div>
            </div>
            <div className="flex justify-between mb-10">
                <div className="w-4/12 mr-3">
                    <a href="https://www.youtube.com/watch?v=lDsMoat_1yo" target="_blank">
                        <Image
                            src={niaga3Portofolio}
                            alt="Picture of the author"
                            height={800} automatically provided
                            placeholder="blur"
                            priority
                        />
                    </a>
                    <div className="w text-xs leading-5 tracking-wide text-third font-semibold">CHINESE NEW YEAR 2019</div>
                </div>
                <div className="w-4/12 mx-3 h-48 bg-green-500">
                    <a href="https://www.youtube.com/watch?v=RMUTRzUO9xA" target="_blank">
                        <Image
                            src={libertyPortofolio}
                            alt="Picture of the author"
                            height={800} automatically provided
                            placeholder="blur"
                            priority
                        />
                    </a>
                    <div className="w text-xs leading-5 tracking-wide text-third font-semibold">BERBAGI MIMPI DI PESISIR NEGERI</div>
                </div>
                <div className="w-4/12 ml-3 h-48 bg-red-500">
                    <a href="https://www.youtube.com/watch?v=1i47BGx_mcI" target="_blank">
                        <Image
                            src={shutterbugPortofolio}
                            alt="Picture of the author"
                            height={800} automatically provided
                            placeholder="blur"
                            priority
                        />
                    </a>
                    <div className="w text-xs leading-5 tracking-wide text-third font-semibold">TELKOM NEUCENTRIX</div>
                </div>
            </div>
            <div className="flex justify-between mb-10">
                <div className="w-4/12 mr-3">
                    <a href="https://www.youtube.com/watch?v=fVDK5ScvKD0" target="_blank">
                        <Image
                            src={cloudsPortofolio}
                            alt="Picture of the author"
                            height={800} automatically provided
                            placeholder="blur"
                            priority
                        />
                    </a>
                    <div className="w text-xs leading-5 tracking-wide text-third font-semibold">THEMATIC WAISAK</div>
                </div>
                <div className="w-4/12 mx-3 h-48 bg-green-500">
                    <a href="https://www.youtube.com/watch?v=EYU2t0gaAd0" target="_blank">
                        <Image
                            src={beetlePortofolio}
                            alt="Picture of the author"
                            height={800} automatically provided
                            placeholder="blur"
                            priority
                        />
                    </a>
                    <div className="w text-xs leading-5 tracking-wide text-third font-semibold">RUMAH MIMPI</div>
                </div>
                <div className="w-4/12 ml-3 h-48 bg-red-500">
                    <a href="https://www.youtube.com/watch?v=SLX6quwnbJw" target="_blank">
                        <Image
                            src={lighthousePortofolio}
                            alt="Picture of the author"
                            height={800} automatically provided
                            placeholder="blur"
                            priority
                        />
                    </a>
                    <div className="w text-xs leading-5 tracking-wide text-third font-semibold">TELKOMSEL 4G LTE - PROFESSIONAL</div>
                </div>
            </div>
            <div className="flex justify-between mb-10">
                <div className="w-4/12 mr-3">
                    <a href="https://www.youtube.com/watch?v=hI9aLlS9pWk" target="_blank">
                        <Image
                            src={saladPortofolio}
                            alt="Picture of the author"
                            height={800} automatically provided
                            placeholder="blur"
                            priority
                        />
                    </a>
                    <div className="w text-xs leading-5 tracking-wide text-third font-semibold">THERAGRAN MULTIVITAMIN</div>
                </div>
                <div className="w-4/12 mx-3 h-48">
                    {/* <Image
                        src={beetlePortofolio}
                        alt="Picture of the author"
                        height={800} automatically provided
                        placeholder="blur"
                    /> */}
                    <div className="w text-xs leading-5 tracking-wide text-third font-semibold"></div>
                </div>
                <div className="w-4/12 ml-3 h-48">
                    {/* <Image
                        src={lighthousePortofolio}
                        alt="Picture of the author"
                        height={800} automatically provided
                        placeholder="blur"
                    /> */}
                    <div className="w text-xs leading-5 tracking-wide text-third font-semibold"></div>
                </div>
            </div>
        </div>
    )
}