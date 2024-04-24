import Image from "next/image";
import offer from "../../Resources/Offer/sliderUp_to_14__discount_on_Domestic_flights 2-1.png";
import offer2 from "../../Resources/Offer/sliderUp_to_14__discount_on_Domestic_flights 2-2.png";
import offer3 from "../../Resources/Offer/sliderUp_to_14__discount_on_Domestic_flights 2.png";
function DealAndOffer() {
  const offers = [
    {
      images: offer,
      title: "With Bkash Payment Only",
      offer:
        "Up to 14% Discount On The Base Fare Of The Base Fare Of Donestic Flights",
    },
    {
      images: offer2,
      title: "With Bkash Payment Only",
      offer:
        "Up to 17% Discount On The Base Fare Of The Base Fare Of Donestic Flights",
    },
    {
      images: offer3,
      title: "With Bkash Payment Only",
      offer:
        "Up to 19% Discount On The Base Fare Of The Base Fare Of Donestic Flights",
    },
  ];
  return (
    <div className="w-full max-w-[80%] mx-auto pb-6 pt-10 relative">
      <h2 className="text-4xl font-medium">Deal And Offer </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
        {offers.map((offer, i) => (
          <div key={i} className="bg-white rounded-md flex gap-5 items-center">
            <Image
              width="auto"
              height="auto"
              src={offer.images}
              alt={offer.title}
              className=""
            />
            <div>
              <h2 className="mt-3 text-[12px] font-medium">{offer.title}</h2>
              <p className="text-sm text-[#005ce6] font-bold">{offer.offer}</p>
            </div>
          </div>
        ))}
      </div>
      <div className=" absolute left-0 top-0 w-full h-full flex justify-center items-end gap-1">
        <span className="w-2 h-2 bg-gray-300  rounded-full"></span>
        <span className="w-2 h-2 bg-yellow-500  rounded-full"></span>
        <span className="w-2 h-2 bg-gray-300   rounded-full"></span>
      </div>
    </div>
  );
}

export default DealAndOffer;
