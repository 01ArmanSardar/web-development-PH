import { Link } from "react-router-dom";

const DashBoardHOme = () => {
    return (
        <div className="grid grid-cols-4 gap-2 p-3">
            <div className="col-span-1 border-2" >
                <div>My Apionments</div>
            <Link to={'/Allusers'}><div >All users</div></Link>
                
                <div>Add doctors</div>
                <div>Manage Doctors</div>

            </div>
            <div className="col-span-3 border-2">
                okk
            </div>
        </div>
    );
};

export default DashBoardHOme;