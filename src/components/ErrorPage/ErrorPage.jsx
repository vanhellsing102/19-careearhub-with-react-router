import { Link, useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    
    const naviGate = useNavigate();
    const handleGoBack = () =>{
        naviGate(-1);
    }
    
    return (
        <div className="flex flex-col justify-center items-center gap-4 h-[500px]">
            <p>Oops !!!</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default ErrorPage;