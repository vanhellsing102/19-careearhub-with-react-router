import { CiLocationOn } from "react-icons/ci";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

const AppliedJob = ({job}) => {
    const {job_title, company_name, remote_or_onsite, job_type, location, salary} = job;
    return (
        <div className="w-full bg-slate-200 rounded-3xl p-10">
            <h1 className="text-xl font-bold">{job_title}</h1>
            <p>{company_name}</p>
            <div className="text-emerald-500 font-semibold">
                <button className="py-1 px-4 border rounded border-emerald-400 mr-3">{remote_or_onsite}</button>
                <button className="py-1 px-4 border rounded border-emerald-400 ">{job_type}</button>
            </div>
            <div className="flex gap-5 text-[20px] font-semibold">
                <p className="flex justify-center items-center gap-2"><CiLocationOn></CiLocationOn>{location}</p>
                <p className="flex justify-center items-center gap-2"><RiMoneyDollarCircleLine></RiMoneyDollarCircleLine>Salary : {salary}</p>
            </div>
        </div>
    );
};

export default AppliedJob;