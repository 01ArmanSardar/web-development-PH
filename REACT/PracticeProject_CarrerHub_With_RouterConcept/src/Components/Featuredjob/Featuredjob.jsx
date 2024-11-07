
// import money.png from ''
const Featuredjob = ({job}) => {
    console.log(job);
    const {logo,company_name,job_title,remote_or_onsite,location,job_type,salary}=job
    return (
        <div className="card bg-base-100  shadow-xl">
        <figure>
          <img
            src={logo}
            alt="logo" />
        </figure>
        <div className="card-body items-start">
          <h2 className="card-title">
            {job_title}
           
          </h2>
          <p className="font-semibold">{company_name}</p>
          <div className="">
          <button className="btn btn-outline btn-accent mr-4 px-5 py-2">{remote_or_onsite}</button>
          <button className="btn btn-outline btn-accent ml- px-5 py-2">{job_type}</button>
          </div>
          <div className="flex justify-start">
            <img src="src\assets\icons\location2.png" alt="" /><p>{location}</p>
            <img src="src\assets\icons\money.png" alt="" /> <p>{salary}</p>
          </div>
          <div className="card-actions ">
          <button className="btn btn-info">Details</button>
          </div>
        </div>
      </div>
    );
};

export default Featuredjob;