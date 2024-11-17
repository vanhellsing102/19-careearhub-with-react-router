import { useLoaderData } from "react-router-dom";
import { getStoredJobApplications } from "../../utility/localstorage";
import { useEffect, useState } from "react";
import AppliedJob from "../AppliedJob/AppliedJob";

const AppliedJobs = () => {
  const jobs = useLoaderData();

  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  const handleFilterJobs = filter =>{
    if (filter === 'all') {
        setDisplayJobs(appliedJobs);
    }
    else if (filter === 'remote'){
        const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
        setDisplayJobs(remoteJobs);
    }
    else if (filter === 'onsite'){
        const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
        setDisplayJobs(onsiteJobs);
    }
  }

  useEffect(() => {
    const storedJobId = getStoredJobApplications();
    if (storedJobId.length > 0) {
      const appliedJobs = jobs.filter((job) => storedJobId.includes(job.id));
      setAppliedJobs(appliedJobs);
      setDisplayJobs(appliedJobs);
    }
  }, []);

  return (
    <div>
      <h1 className="py-14 text-center font-bold text-2xl">
        Applied Jobs : {appliedJobs.length}
      </h1>
      <details className="dropdown mb-5">
        <summary className="btn m-1">open or close</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          <li onClick={() => handleFilterJobs('all')}><a href="">All</a></li>
          <li onClick={() => handleFilterJobs('remote')}><a href="">Remote</a></li>
          <li onClick={() => handleFilterJobs('onsite')}><a href="">Onsite</a></li>
        </ul>
      </details>
      <div className="flex flex-col gap-10 mb-14">
        {displayJobs.map((job) => (
          <AppliedJob job={job}></AppliedJob>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
