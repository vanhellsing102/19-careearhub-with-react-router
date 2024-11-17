import { CiLocationOn } from "react-icons/ci";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const FeaturedJob = ({job}) => {

    const {logo, job_title, company_name, remote_or_onsite, job_type, location, salary, id} = job;
    
    return (
        <div className="border border-emerald-500 rounded-lg p-7 leading-10">
            <img src={logo} alt="" />
            <h2 className="font-extrabold text-2xl">{job_title}</h2>
            <p className="font-semibold text-[20px]">{company_name}</p>
            <div className="text-emerald-500 font-semibold">
                <button className="py-1 px-4 border rounded border-emerald-400 mr-3">{remote_or_onsite}</button>
                <button className="py-1 px-4 border rounded border-emerald-400 ">{job_type}</button>
            </div>
            <div className="flex gap-5 text-[20px] font-semibold">
                <p className="flex justify-center items-center gap-2"><CiLocationOn></CiLocationOn>{location}</p>
                <p className="flex justify-center items-center gap-2"><RiMoneyDollarCircleLine></RiMoneyDollarCircleLine>Salary : {salary}</p>
            </div>
            <Link to={`/job/${id}`}>
                <button className="font-extrabold text-lg py-2 px-4 text-white bg-emerald-600">View Details</button>
            </Link>
        </div>
    );
};

export default FeaturedJob;