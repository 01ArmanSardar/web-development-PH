import Banner from "./Banner";
import HotJobs from "./HotJobs";

const Home = () => {
    return (
        <div>
            <h1 className="text-3xl bg-red-100">this is home page</h1>
            <Banner></Banner>
            <HotJobs></HotJobs>
        </div>
    );
};

export default Home;