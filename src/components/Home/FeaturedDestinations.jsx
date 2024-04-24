import Image from 'next/image'
import rectangla from '../../Resources/Thumbnail/Rectangle 18-22.png'
import rectangla2 from '../../Resources/Thumbnail/Rectangle 18.png'
import rectangla3 from '../../Resources/Thumbnail/Rectangle 181.png'
function FeaturedDestinations() {
    const featuredData = [
        {
            images: rectangla, 
            title : "Stopover Opportunity In istanbul with Turkish Airlines"
        },
        {
            images: rectangla2, 
            title : "Discover The Timeless City With Touristanbul Of Turkish Airliness"
        },
        {
            images: rectangla3, 
            title : "The Best Of Abu Dhabi With Exclusive Etihad Airwaus!"
        }
    ]

    return (
        <div className="w-full max-w-[80%] mx-auto py-10 mt-8">
            <h2 className="text-4xl font-medium">Featured Destinations</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-10'>
                {
                    featuredData?.map((featured, i) => <div key={i} className='bg-white p-3 rounded-md'>
                        <Image width="auto" height="auto" src={featured.images} alt={featured.title} className='w-full h-[300px]'/>
                        <h2 className='mt-3 text-lg font-bold'>{featured.title}</h2>
                        <div className='w-[60%] mx-auto my-3'>
                        <button className='bg-yellow-500 py-1 w-full font-medium rounded-md'>View More</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
}

export default FeaturedDestinations;