
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import Qzone1 from '../../../assets/playground.png'
import Qzone2 from '../../../assets/swimming.png'
import Qzone3 from '../../../assets/class.png'

const LeftSide = () => {
    return (
        <div>
            <div>
                <h1 className="text-2xl text-center">Login With</h1>

            </div>
            <div className="p-5">

                <button className='btn w-full mb-2 '>
                    <FaGithub></FaGithub> Github

                </button>
                <button className='btn w-full '>
                    <FaGoogle></FaGoogle> google

                </button>
            </div>
            {/* find us */}
            <div>
                <h1 className="text-xl p-3">Find us on</h1>

            </div>
            <div className="p-3">

                <button className='btn w-full mb-3 '>
                    <FaFacebook></FaFacebook> facebook

                </button>
                <button className='btn w-full '>
                    <FaTwitter></FaTwitter> twiter

                </button>
                <button className='btn w-full mt-3'>
                    <FaInstagram></FaInstagram> Insta

                </button>
            </div>

            {/* QZOne */}
            <div>
                <h1 className="text-3xl text-center p-4">Q Zone</h1>

            </div>
            <div>

                <img src={Qzone1} alt="" />
                <img src={Qzone2} alt="" />
                <img src={Qzone3} alt="" />
            </div>
        </div>
    );
};

export default LeftSide;