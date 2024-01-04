import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/Trip1.jpg";
import Trip2 from "../assets/Trip2.jpg";
import Trip3 from "../assets/Trip3.jpg";

export default function Trip(){
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps.</p>
            <div className="tripcard">
                
            <TripData 
                image={Trip1}
                heading="Munnar, Kerala"
                text="Munnar, ensconced in the Western Ghats, was a journey into the heart of Kerala's tea country. Rolling hills covered in emerald-green tea plantations, mist-laden valleys, and the fragrance of spices in the air created a captivating landscape. I explored the Eravikulam National Park, home to the endangered Nilgiri Tahr, and indulged in the tranquility of the Attukal Waterfalls, making Munnar a haven for nature lovers."
                />

            <TripData 
                image={Trip2}
                heading="Rishikesh and Haridwar, Uttarakhand"
                text="The spiritual duo of Rishikesh and Haridwar, nestled along the Ganges River, offered a harmonious blend of spirituality and adventure. In Rishikesh, I sought solace in yoga along the banks of the Ganges, while the evening aarti in Haridwar was a mesmerizing experience. The thrill of white-water rafting in the Ganges added an adrenaline rush to this spiritually enriching journey."
                />

            <TripData 
                image={Trip3}
                heading="Coorg, Karnataka"
                text="My recent escape to Coorg, the 'Scotland of India', was a serene retreat into lush greenery and mist-covered hills. The aromatic coffee plantations, spice gardens, and the cascading Abbey Falls provided a tranquil backdrop. Exploring the cultural facets of Coorg, I visited the Namdroling Monastery, also known as the Golden Temple, adding a spiritual touch to this enchanting journey."
                />
            </div>
        </div>
    )
}