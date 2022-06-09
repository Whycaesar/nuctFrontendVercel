import { runInContext } from 'vm';
import Instafeed from '../node_modules/instafeed.js/src/instafeed'
{/* <script src="../node_modules/instafeed.js/src/instafeed"></script> */}

export default function Ig() {
   var userFeed = new Instafeed({
		get: 'user',
		target: "instafeed-container",
    	resolution: 'low_resolution',
		accessToken: 'IGQVJVcF9pR0hyX2d4SGptejd5RlVzTzNianN6cEN2MWdrMGItVTVLUlZAhdkV0T0NJa1JzX1FIZAFZAVc0F1Y1Naa3JLWG9YOVVMX3MzMTNpYXFHM082Q1kzZAHdsbzdjSl84WDUzOUhsN3g1Vk0tN2JCeQZDZD'
	});

    userFeed.run();
    console.log(userFeed._state)
    
    return (
        <>
	<h1>Show Instagram Feed on your Website</h1>
    	<div id="instafeed-container"></div>




        </>
    )
}