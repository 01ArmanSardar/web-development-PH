import { BiDollarCircle } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import doctorimage1 from '../../../assets/vecteezy_ai-generated-a-female-doctor-with-a-stethoscope-isolated-on_41409060.png'
import doctorimage2 from '../../../assets/vecteezy_ai-generated-a-smiling-doctor-with-glasses-and-a-white-lab_41408858.png'
import doctorimage3 from '../../../assets/vecteezy_young-female-doctor-smiling-with-confidence-and-positivity_47426880.png'

const Doctors = () => {
    return (
        <>
         <div className="text-center mt-12 p-14">
                <h1 className="text-center text-4xl font-bold">Our Expert doctors</h1>
                <p className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla ut totam perspiciatis iusto quam laudantium illum velit libero? Suscipit, nesciunt.</p>
            </div>
        <div className="flex justify-between">
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        src={doctorimage1}
                        alt="img" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Shakib al hasan</h2>
                    <p>Senior consaltand</p>
                    <hr />
                    <div className="card-actions justify-start">

                        <div className="flex ">
                            <div><CiLocationOn className="text-2xl mr-3" /></div>
                            <div><h1>Dhanmondi ,Dhaka,Bangladesh</h1></div>
                        </div>

                        <div className="flex ">
                            <div><SlCalender className="text-2xl mr-3" /></div>
                            <div><h1>Available On Mon, 22 December</h1> </div>
                        </div>

                        <div className="flex">
                            <div>< BiDollarCircle className="text-2xl mr-3" /></div>
                            <div><h1> 1500 tk</h1></div>
                        </div>

                    </div>
                    <button className="btn btn-accent">view Profile</button>
                </div>
            </div>

            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        src={doctorimage2}
                        alt="img" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">tamim iqbal</h2>
                    <p>Junior consaltant</p>
                    <hr />
                    <div className="card-actions justify-start">

                        <div className="flex ">
                            <div><CiLocationOn className="text-2xl mr-3" /></div>
                            <div><h1>Dhanmondi ,Dhaka,Bangladesh</h1></div>
                        </div>

                        <div className="flex ">
                            <div><SlCalender className="text-2xl mr-3" /></div>
                            <div><h1>Available On Mon, 22 December</h1> </div>
                        </div>

                        <div className="flex">
                            <div>< BiDollarCircle className="text-2xl mr-3" /></div>
                            <div><h1> 1500 tk</h1></div>
                        </div>

                    </div>
                    <button className="btn btn-accent">view Profile</button>
                </div>
            </div>

            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        src={doctorimage3}
                        alt="imgdc" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Mustafizur</h2>
                    <p>Medium consaltant</p>
                    <hr />
                    <div className="card-actions justify-start">

                        <div className="flex ">
                            <div><CiLocationOn className="text-2xl mr-3" /></div>
                            <div><h1>Dhanmondi ,Dhaka,Bangladesh</h1></div>
                        </div>

                        <div className="flex ">
                            <div><SlCalender className="text-2xl mr-3" /></div>
                            <div><h1>Available On Mon, 22 December</h1> </div>
                        </div>

                        <div className="flex">
                            <div>< BiDollarCircle className="text-2xl mr-3" /></div>
                            <div><h1> 1500 tk</h1></div>
                        </div>

                    </div>
                    <button className="btn btn-accent">view Profile</button>
                </div>
            </div>
        </div>
        </>
        
    );
};

export default Doctors;