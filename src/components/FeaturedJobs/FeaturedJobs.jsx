import { useEffect, useState } from "react";
import FeaturedJob from "../FeaturedJob/FeaturedJob";

const FeaturedJobs = () => {
    const [featuredJobs, setFeaturedJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);

    useEffect(() =>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setFeaturedJobs(data))
    }, [])
    return (
        <div className="py-10">
            <div className="text-center">
                <h1 className="text-5xl">Featured Jobs</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                {
                    featuredJobs.slice(0, dataLength).map(job => <FeaturedJob job={job}></FeaturedJob>)
                }
            </div>
            <div className={dataLength === featuredJobs.length ? 'hidden' : 'flex mt-8 justify-center'}>
                <button onClick={() => setDataLength(featuredJobs.length)} className="btn btn-primary">See All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;