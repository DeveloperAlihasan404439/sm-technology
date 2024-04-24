/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import banner from "../../Resources/Hero Image/Rectangle 2.png";
import { FaAngleDown } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
function Banner() {
  return (
    <div className="relative">
      <Image width="auto" height="auto" src={banner} alt="banner" />
      <div className="absolute top-0 left-0 w-full  h-full flex items-center">
        <div className="w-[80%] mx-auto">
          <h2 className="text-5xl font-medium px-10 text-white mb-5">
            Welcome To <span className="text-[#005ce6]">AirBook</span>
          </h2>
          <div className="p-12 rounded-md bg-[#f0f0f0] w-full">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="flex gap-2 items-center px-3 py-1 bg-gray-300 w-fit rounded-md">
                    <span className="w-4 h-4 rounded-full border border-gray-400 bg-white"></span>
                    <label htmlFor="" className="text-sm">
                      One Way
                    </label>
                  </div>
                  <div className="flex gap-2 items-center px-3 py-1 bg-[#005ce6] w-fit rounded-md text-white">
                    <div className="relative">
                      <h3 className="w-[17px] h-[17px] rounded-full border border-white">
                        {" "}
                      </h3>
                      <span className=" absolute top-[3px] left-[2px] rounded-full border border-gray-400 bg-white p-[5px]"></span>
                    </div>
                    <span className="text-sm">Round Trip</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex gap-1 items-center px-3 py-1 text-[#005ce6] bg-gray-300 w-fit text-sm rounded-md">
                    <h2>I Traveller</h2>
                    <FaAngleDown />
                  </div>
                  <div className="flex gap-1 items-center px-3 py-1 text-[#005ce6] bg-gray-300 w-fit text-sm rounded-md">
                    <h2>Economy</h2>
                    <FaAngleDown />
                  </div>
                </div>
              </div>
              <div className="flex gap-3 items-center flex-wrap">
                <div className="p-2 flex items-center gap-2 border border-gray-300 rounded-md  font-medium w-52">
                    <h2 className="border-r-2 border-gray-300 pr-2">DAC</h2>
                    <div>
                        <h2 className="text-sm">Dhaka</h2>
                        <p className="text-[10px]">Hazrat Shahjalal Internatio</p>
                    </div>
                </div>
                <div className="p-2 flex items-center gap-2 border border-gray-300 rounded-md  font-medium  w-52">
                    <h2 className="border-r-2 border-gray-300 pr-2">Cxb</h2>
                    <div>
                        <h2 className="text-sm">Cox's Bazar</h2>
                        <p className="text-[10px]">Cox's Bazar Internatio</p>
                    </div>
                </div>
                <div className="p-2 flex items-center gap-2 border border-gray-300 rounded-md  font-medium w-52">
                    <h2 className="border-r-2 border-gray-300 pr-2">03</h2>
                    <div>
                        <h2 className="text-sm">Octobee</h2>
                        <p className="text-[10px]">Tuesday, 2023</p>
                    </div>
                </div>
                <div className="p-2 flex items-center gap-2 border border-gray-300 rounded-md  font-medium  w-52">
                    <h2 className="border-r-2 border-gray-300 pr-2">05</h2>
                    <div>
                        <h2 className="text-sm">Octobee</h2>
                        <p className="text-[10px]">Tuesday, 2023</p>
                    </div>
                </div>
                <div className="p-3 flex items-center gap-2 bg-yellow-500 rounded-md  font-medium text-2xl text-gray-100">
                    <FaSearch/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
