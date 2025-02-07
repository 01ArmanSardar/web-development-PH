

const SharedSections = ({ heading, subHeading }) => {
    return (
        <div className="w-3/12 text-center p-5 mx-auto">
            <p className="text-xl text-yellow-500 ">...{subHeading}...</p>
            <h1 className="text-3xl border-y-2">{heading}</h1>
        </div>
    );
};

export default SharedSections;