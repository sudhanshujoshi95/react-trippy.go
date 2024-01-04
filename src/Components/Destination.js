import shimlaImg1 from "../assets/shimlaImg1.jpg";
import shimlaImg2 from "../assets/shimlaImg2.jpg";

import gulmargImg1 from "../assets/gulmargImg1.jpg";
import gulmargImg2 from "../assets/gulmargImg2.jpg";

import LakshdweepImg1 from "../assets/LakshdweepImg1.jpg";
import LakshdweepImg2 from "../assets/LakshdweepImg2.jpg";

import rannofkutchImg1 from "../assets/rannofkutchImg1.jpg";
import rannofkutchImg2 from "../assets/rannofkutchImg2.jpg";

import gangtokImg1 from "../assets/gangtokImg1.jpg";
import gangtokImg2 from "../assets/gangtokImg2.jpg";

import DestinationData from "./DestinationData";
import "./DestinationStyles.css"

const Destination = ()=>{
    return(
        <div className="destination">
            <h1>Popular Destination</h1>
            <p>Tours give you the opportunity to see a lot, within a time frame.</p>

            <DestinationData
            className="first-description"
            heading="Shimla, Himachal Pradesh"
            text="Nestled in the lap of the Himalayas, Shimla is a charming hill station that captivates visitors with its colonial architecture, scenic landscapes, and the inviting Mall Road. During the winter months, the town transforms into a winter wonderland, adorned with pristine snowfall, creating a magical atmosphere. The nearby destination of Kufri offers a perfect escape for snow enthusiasts with activities like skiing and tobogganing."
            img1={shimlaImg1}
            img2={shimlaImg2}
            />

            <DestinationData
            className="first-description-reverse"
            heading="Gulmarg, Jammu & Kashmir"
            text="Tucked away in the Pir Panjal range, Gulmarg is a paradise for winter sports enthusiasts. With its snow-covered landscapes and world-class ski resorts, Gulmarg offers an enchanting experience. The Gulmarg Gondola, one of the highest cable cars globally, provides breathtaking views of the snow-clad peaks, making it a must-visit destination for those seeking the thrill of winter adventures."
            img1={gulmargImg1}
            img2={gulmargImg2}
            />

            <DestinationData
            className="first-description"
            heading="Lakshadweep Islands"
            text="Lakshadweep, a celestial archipelago adrift in the Arabian Sea, unfolds as a tapestry of unparalleled beauty. Imagine a realm where crystalline turquoise waters cradle coral reefs of unparalleled vibrancy, painting an underwater masterpiece that beckons both divers and dreamers. The islands, adorned with ivory-white beaches gently lapped by the gentle waves, offer a serene sanctuary for those seeking solace in nature's embrace."
            img1={LakshdweepImg1}
            img2={LakshdweepImg2}
            />

            <DestinationData
            className="first-description-reverse"
            heading="Rann of Kutch, Gujarat"
            text="Visit the world's largest salt desert during the Rann Utsav for a unique cultural experience. Witness the vast expanse of white salt, attend folk performances, and shop for traditional handicrafts."
            img1={rannofkutchImg1}
            img2={rannofkutchImg2}
            />

            <DestinationData
            className="first-description"
            heading="Gangtok, Sikkim"
            text="Cradled in the Eastern Himalayas, Gangtok offers a captivating blend of natural beauty and cultural richness. The panoramic views of the snow-capped Kanchenjunga, the third-highest mountain in the world, provide a stunning backdrop. The Nathula Pass, adorned with snow, and the mystical Tsomgo Lake add to the enchanting appeal of this Himalayan town."
            img1={gangtokImg1}
            img2={gangtokImg2}
            />
        </div>
    );
}

export default Destination;