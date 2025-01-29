
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const HotJobCard = ({ job }) => {
    const { _id, title, salaryRange, company_logo, requirements, company, description, location } = job
    console.log(title);
    return (
        <div className="card bg-base-100  shadow-sm">
            <div className="flex items-center p-4 ">
                <figure>
                    <img
                        className="w-12 mx-2"
                        src={company_logo}
                        alt="company logo" />
                </figure>
                <div>
                    <h1>{company}</h1>
                    <p className="flex items-center gap-1"> <FaMapMarkerAlt />{location}</p>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="flex gap-1 flex-wrap ">
                    {
                        requirements.map(requirement => <p className="border-r-2 hover:bg-emerald-300 text-center" key={_id}>{requirement}</p>)
                    }
                </div>

                <div className="card-actions justify-end items-center mt-4">

                    <div>
                        <p>{salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>

                    </div>
                    <Link to={`/jobDetails/${_id}`}>
                        <button className="btn btn-primary">Apply Now</button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default HotJobCard;