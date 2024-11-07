const getStoredJobApplication = () => {
    const StoredJobApplication = localStorage.getItem('job_applications');
    if (StoredJobApplication) {
        return JSON.parse(StoredJobApplication)
    }
    return [];
}

const saveJobApplication = id => {
    const storedJobApplications = getStoredJobApplication();
    // console.log(typeof(storedJobApplications));
    const exits = storedJobApplications.find(jobId => jobId === id);
    
    if (!exits) {
        storedJobApplications.push(id);
        localStorage.setItem('job_applications', JSON.stringify(storedJobApplications))
    }
}

export {getStoredJobApplication,saveJobApplication}