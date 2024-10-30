
import { TbArrowBadgeRightFilled } from "react-icons/tb";
const Feature = ({feature}) => {
    console.log(feature);
    return (
        <div className="">
            <p className="flex items-center"> <TbArrowBadgeRightFilled className="text-xl"/>{feature}</p>
        </div>
    );
};

export default Feature;