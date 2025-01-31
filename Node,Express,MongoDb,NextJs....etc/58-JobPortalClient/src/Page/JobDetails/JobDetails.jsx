import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
    const { _id, title, salaryRange, company_logo, requirements, company, description, location } = useLoaderData()

    return (
        <div>
            <h1 className="text-4xl">this job title is {title}</h1>
            <p>location is {location}</p>
            <p>Job Detrails <strong>{description}</strong></p>

            <Link to={`/ApplyJob/${_id}`}>
                <button className="btn btn-primary">
                    Apply HEre
                </button>
            </Link>
        </div>
    );
};

export default JobDetails;