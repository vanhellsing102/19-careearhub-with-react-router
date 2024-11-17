const getStoredJobApplications = () =>{
    const storedJobApplications = localStorage.getItem('job-application');
    if(storedJobApplications){
        return (JSON.parse(storedJobApplications));
    }
    return [];
}

const saveJobsApplication = (id) =>{
    const storedJobApplications = getStoredJobApplications();
    const exitsJobApplication = storedJobApplications.find(jobId => jobId == id);
    if (!exitsJobApplication) {
        storedJobApplications.push(id);
        localStorage.setItem('job-application', JSON.stringify(storedJobApplications));
    }
}

export { saveJobsApplication, getStoredJobApplications };