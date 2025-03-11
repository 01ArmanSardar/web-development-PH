
import Appionment from "./Appionment";


const Appionments = () => {



    return (
        <div>

            <div className="p-10">
                <h1 className="text-center text-2xl font-bold">please select a service </h1>
                <div className="flex justify-center p-4">
                    <div>
                        <Appionment service={'dental'}></Appionment>
                    </div>
                    <div><Appionment service={'surgery'}></Appionment></div>
                    <div><Appionment service={'orthopedic'}></Appionment></div>

                </div>
            </div>



        </div>
    );
};

export default Appionments;