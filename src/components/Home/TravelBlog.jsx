import Image from "next/image";
import travel from "../../Resources/Thumbnail/Rectangle 18-1.png";
import travel2 from "../../Resources/Thumbnail/Rectangle 18-11.png";
import travel3 from "../../Resources/Thumbnail/Rectangle 18-2.png";
import author from "../../Resources/testimonial/Rectangle 30.png";
import author2 from "../../Resources/testimonial/Rectangle 32.png";
import author3 from "../../Resources/testimonial/Rectangle 33.png";

function TravelBlog() {
  const trabels = [
    {
      images: travel,
      title: "Embracing The Digital Nomad Lifestyle The Digital Nomad Thr..",
      wark: "Wark And Travel",
      manth: "16 September 24",
      author: author,
      name: "Ys Stafen",
    },
    {
      images: travel2,
      title: "Historical Journeys: Stepping Back In Time Through Travel",
      wark: "Historical",
      manth: "16 September 24",
      author: author2,
      name: "Aria Montague",
    },
    {
      images: travel3,
      title: "Sustainable Tourism: Preserving The Planet While Seeing It All",
      wark: "Sustaiknable Tourism",
      manth: "16 September 24",
      author: author3,
      name: " Elara Thorne",
    },
  ];
  return (
    <div className="w-full max-w-[80%] mx-auto pb-6 pt-10">
      <h2 className="text-4xl font-medium">Travel Blog </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
        {trabels?.map((trabel, i) => (
          <div key={i} className="bg-white rounded-md">
            <Image
              width="auto"
              height="auto"
              src={trabel.images}
              alt={trabel.title}
              className="w-full h-[300px]"
            />
            <div className="p-4">
              <h2 className="text-sm flex gap-4 font-medium">
                {" "}
                <span className="text-yellow-500">{trabel.wark}</span>{" "}
                {trabel.manth}
              </h2>
              <h2 className="mt-3 text-lg font-bold">{trabel.title}</h2>
              <div className="mt-4 border-t border-gray-300 flex justify-between items-center pt-5  text-sm font-bold">
                <div className="flex gap-3 items-center">
                <Image
                  width="auto"
                  height="auto"
                  src={trabel.author}
                  alt={trabel.title}
                  className="w-10 h-10 rounded-full"
                />
                <span>{trabel.name}</span>
                </div>
                <span className="text-yellow-500">Read More &gt;  &gt;</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TravelBlog;
