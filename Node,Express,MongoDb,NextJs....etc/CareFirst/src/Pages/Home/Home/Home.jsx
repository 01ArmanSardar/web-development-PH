import OurService from "../Service/OurService";

import './Home.css'
import docImage from '../../../assets/pngwing.com.png'
import Doctors from "../Doctors/Doctors";
import Patients from "../Patients/Patients";
const Home = () => {
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-sm  bg-[url(https://i.pinimg.com/736x/c9/69/3e/c9693e14bc96996540122b9da663f853.jpg)]">
                <figure className="w-96">
                    <img
                        src={docImage}
                        alt="DoctorImage"  />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">First and Secure care </h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
            <OurService></OurService>
            <Doctors></Doctors>
            <Patients></Patients>
        </div>
    );
};

export default Home;