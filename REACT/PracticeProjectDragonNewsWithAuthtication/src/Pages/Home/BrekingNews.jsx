import Marquee from "react-fast-marquee";

const BrekingNews = () => {
    return (
        <div className="flex">
            <button className="btn btn-secondary">Breking news</button>
            <Marquee speed={100} pauseOnHover={true}>
                I can be a React component, multiple React components, or just some text.
            </Marquee>
        </div>
    );
};

export default BrekingNews;