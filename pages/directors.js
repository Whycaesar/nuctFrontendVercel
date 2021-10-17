import { useState } from "react";
import Layout from "../components/layout";

export default function Directors() {
    const [history, setHistory] = useState([
        {
            "id": "1",
            "link": "https://www.youtube-nocookie.com/embed/_FL4IBWbu4U?controls=0?value=0",
            "artis": "TUAN TIGABELAS",
            "title": "Tuan Tigabelas - F*ck They Say #WhenDistortionGoesUnplugged",
            "description": "Nuct - Acoustic Room is back again with something fresh! Collaborating with Tuantigabelas. Get ready for this specially crafted acoustic tunes."
        },
        {
            "id": "2",
            "link": "https://www.youtube-nocookie.com/embed/LaDYgZnz5J8?controls=0?value=0",
            "artis": "JIMI MULTHAZAM",
            "title": "Jimi Multhazam (The Upstairs) Acoustik Room Eps. 22 #WhenDistortionGoesUnplugged",
            "description": "Acoustik Room episode spesial bersama Jimi Multhazam frontman The Upstairs yang terbentuk sejak tahun 2001. Hampir 2 dekade lebih Jimi dkk bertahan dalam band ini. Bongkar pasang personil, dll tapi akhirnya musik The Upstairs sama sekali tidak berubah sejak awal berdiri, tetap konstan dijalurnya. Kali ini, kita berkesempatan membawakan lagu-lagu The Upstairs dalam format akustik yg biasa kita lakukan, dan memberi sedikit nuansa berbeda dalam setiap aksi panggung The Upstairs. Semoga berkenan..."
        },
        {
            "id": "3",
            "link": "https://www.youtube-nocookie.com/embed/AH2SqMoSrlE?controls=0?value=0",
            "artis": "USTARD CHIPENG",
            "title": "Ustard Chipeng - And The Bottle For All (Begundal Lowokwaru) #WhenDistortionGoesUnplugged",
            "description": " NUCT - Acoustik Room spesial dari Ustard Chipeng, vokalis Begundal Lowokwaru, band street punk asal Malang yang genap berusia 22 tahun pada tahun ini. Soal eksistensi, konsistensi dan dedikasi, Chipeng bersama Begundal Lowokwaru tak perlu diragukan lagi. Berbagai jenis tren musik datang silih berganti, band-band dengan segala warna dan bentuk bermunculan, tapi tidak banyak yang mampu bertahan. Begundal Lowokwaru menjadi salah satu yang mampu bertahan dan muncul menjadi dedengkot skena musik punk/ independen di Malang dan bahkan di Indonesia Namun hal tersebut tak membuat Chipeng merasa lebih. Ia memaklumi bagaimana para musisi independen terkadang mengalami benturan dengan kepentingan ekonomi hingga keluarga yang memaksa mereka untuk melambat dan bahkan berhenti. Di lagu ini, Chipeng mengajak kita semua untuk selalu bersenang-senang, dan selalu merayakan akan setiap perjalanan yg telah dilalui. And, The Bottle For All! *Cheers"
        },
    ])

    const moves = history.map((step, moves) => {
        // console.log(step.id);
        // console.log(moves);
        let p;
        if ((step.id % 2) === 0){
            p ="  w-1/3 mx-3"
        } else if ((step.id % 3) === 0){
            p ="  w-1/3 ml-3"
        }else{
            p ="w-1/3 mr-3"
        }
        return <ol key={step.id} className= {p} >
            <div className="w-full mr-3 h-48">
                <div className="w-full">
                    <div className="aspect-w-16 aspect-h-9">

                        <iframe
                            src={step.link}
                            title={step.title}
                            frameBorder="0"
                            allow="fullscreen; 
                  
            autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
                <div className="w text-xs leading-5 tracking-wide text-third font-semibold">{step.artis}</div>
            </div>
        </ol>
        

    });
    return (
        <Layout>
            <div >
                <h1>This Is DIRECTORS</h1>
                <div className="flex justify-between">{moves}</div>
            </div>


        </Layout>
    )
}