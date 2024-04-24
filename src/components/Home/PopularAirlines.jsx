import Image from 'next/image'
import airline from '../../Resources/Airlines Icon/american.png'
import airline1 from '../../Resources/Airlines Icon/BBA.png'
import airline2 from '../../Resources/Airlines Icon/Emirates.png'
import airline3 from '../../Resources/Airlines Icon/Malaysia-1.png'
import airline4 from '../../Resources/Airlines Icon/Malaysia.png'
import airline5 from '../../Resources/Airlines Icon/Singapore Airlines.png'
import airline6 from '../../Resources/Airlines Icon/Turkish Airlines.png'

import { FaStar } from "react-icons/fa";
function PopularAirlines() {
    const airlines = [
        {
          images: airline,
          title: "Biman Bangladesh Airlines",
          rating: 4,
          review: "789 Review"
        },
        {
          images: airline1,
          title: "Emirates",
          rating: 4,
          review: "749 Review"
        },
        {
          images: airline2,
          title: "Turkish Airlines",
          rating: 5,
          review: "759 Review"
        },
        {
          images: airline3,
          title: "Malayia Airlines",
          rating: 5,
          review: "759 Review"
        },
        {
          images: airline4,
          title: "Malayia Airlines",
          rating: 5,
          review: "759 Review"
        },
        {
          images: airline5,
          title: "Singapore Airlines",
          rating: 5,
          review: "759 Review"
        },
        {
          images: airline6,
          title: "Malaysia Airlines",
          rating: 5,
          review: "759 Review"
        },{
            images: airline,
            title: "Biman Bangladesh Airlines",
            rating: 4,
            review: "789 Review"
          },
          {
            images: airline1,
            title: "Emirates",
            rating: 4,
            review: "749 Review"
          },
          {
            images: airline2,
            title: "Turkish Airlines",
            rating: 5,
            review: "759 Review"
          },
          {
            images: airline3,
            title: "Malayia Airlines",
            rating: 5,
            review: "759 Review"
          },
          {
            images: airline4,
            title: "Malayia Airlines",
            rating: 5,
            review: "759 Review"
          },
      ];
    return (
        <div className="w-full max-w-[80%] mx-auto pb-6 pt-10">
          <h2 className="text-4xl font-medium">Popular Airlines </h2>
    
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-10">
            {airlines.map((airline, i) => (
              <div key={i} className="flex gap-5 items-center">
                <Image
                  width="auto"
                  height="auto"
                  src={airline.images}
                  alt={airline.title}
                  className=""
                />
                <div>
                  <h2 className="mt-3 text-sm text-[#005ce6] font-bold">{airline.title}</h2>
                  <p className="text-[12px] font-medium flex items-center gap-1 "><span className='text-lg text-yellow-500 '><FaStar/></span> {airline.rating} {`( ${airline.review} )`}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
    );
}

export default PopularAirlines;