import { useLoaderData, useParams } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { saveJobsApplication } from "../../utility/localstorage";
import { Helmet } from "react-helmet-async";

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const intId = parseInt(id);
    const currentJob = jobs.find(job => job.id === intId);
    const {job_title, job_description, job_responsibility, educational_requirements, experiences, salary, contact_information} = currentJob;
    
    const handleApply = () =>{
        saveJobsApplication(intId);
        toast('You Have Applied Successfully');
    }
    
    
    return (
        <div className="w-full  mx-auto px-5 md:px-0">
            <Helmet>
                <title>career hub || job details</title>
            </Helmet>
            <h1 className="text-2xl font-bold text-center py-14">Job Details</h1>
            <div className="mb-14 flex flex-col md:flex-row">
                <div className="md:w-2/3 w-full">
                    <p className="font-bold">Job Description: <span className="font-light">{job_description}</span></p>
                    <p className="font-bold">Job Responsibility: <span className="font-light">{job_responsibility}</span></p>
                    <p className="font-bold">Educational Requirement</p>
                    <p className="font-light">{educational_requirements}</p>
                    <p className="font-bold">Experience</p>
                    <p className="font-light">{experiences}</p>
                </div>
                <div className="md:w-1/3 w-full ">
                    <div className="p-5 bg-slate-300 rounded-xl">
                    <h2 className="font-extrabold text-lg py-4 border-b">Job Details</h2>
                    <div className="py-4">
                        <p>Salary : {salary}</p>
                        <p>Job Title : {job_title}</p>
                    </div>
                    <h2 className="font-extrabold text-lg py-4 border-b">Contact Information</h2>
                    <div className="py-4">
                        <p>Phone : {contact_information.phone}</p>
                        <p>Email : {contact_information.email}</p>
                        <p>Address : {contact_information.address}</p>
                    </div>
                    </div>
                    <button onClick={handleApply} className="btn btn-primary mt-2 w-full">Apply Now</button>
                    <Toaster />
                </div>
            </div>
        </div>
    );
};

export default JobDetails;