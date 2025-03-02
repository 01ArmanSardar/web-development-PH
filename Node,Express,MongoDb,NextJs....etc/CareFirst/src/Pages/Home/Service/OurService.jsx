import { FaBrain, FaFemale, FaPhoneAlt } from "react-icons/fa";
import { GiStomach } from "react-icons/gi";
import { IoMdClock } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { PiBoneThin } from "react-icons/pi";
import { TbDental } from "react-icons/tb";
const OurService = () => {
    return (
        <div>
            <div className="text-center mt-12 p-12">
                <h1 className="text-center text-4xl font-bold ">Our services</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla ut totam perspiciatis iusto quam laudantium illum velit libero? Suscipit, nesciunt.</p>
            </div>
            <div className="flex justify-evenly p-5">
                <div className="border border-indigo-50 ">
                    <div className="p-5">
                        <GiStomach className="text-6xl text-red-400" />
                        <h1>gastrology</h1>
                    </div>

                </div>
                <div className="border border-indigo-50 ">
                    <div className="p-5"><PiBoneThin className="text-6xl text-blue-200" />
                        <h1>orthopedic</h1></div>

                </div>
                <div className="border border-indigo-50 ">
                    <div className="p-5">
                        <FaFemale className="text-6xl text-pink-400" />
                        <h1>
                            gynecology
                        </h1>
                    </div>
                </div>
                <div className="border border-indigo-50 ">
                    <div className="p-5"><FaBrain className="text-6xl text-cyan-200" />
                        <h1>neorology</h1></div>
                </div>
                <div className="border border-indigo-50 ">
                    <div className="p-5"><TbDental className="text-6xl text-yellow-600" />
                        <h1>
                            Dental Care
                        </h1></div>
                </div>
            </div>

            <div className="flex justify-evenly p-5">
                <div className="bg-cyan-400 flex p-4 border rounded">
                    
                        <div>
                            <IoMdClock className="text-3xl m-2" />
                        </div>
                        <div>
                            <h1 className="text-xl">opening hours</h1>
                            <p>opening 9:00 am to 5:pm <br />evryday</p>
                        </div>
                    

                </div>

                <div className="bg-emerald-500 flex p-4 border rounded">
                    
                        <div>
                            <IoLocationOutline className="text-3xl m-2" />

                        </div>
                        <div>
                            <h1 className="text-xl">Our locations</h1>
                            <p>Dhanmondi 17 Dhaka-1200 Bangladesh</p>
                        </div>
                    
                </div>

                <div className="bg-lime-300 flex p-4 border rounded">
                    <div>
                        <FaPhoneAlt className="text-3xl m-2" />

                    </div>
                    <div>
                        <h1 className="text-xl">Contact us</h1>
                        <p>018-0000000 ,018-111111</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default OurService;