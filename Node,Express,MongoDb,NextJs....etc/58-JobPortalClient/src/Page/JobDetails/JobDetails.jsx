import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
    const { title, salaryRange, company_logo, requirements, company, description, location } = useLoaderData()

    return (
        <div>
            <h1>this job title is {title}</h1>
            <p>location is {location}</p>
        </div>
    );
};

export default JobDetails;