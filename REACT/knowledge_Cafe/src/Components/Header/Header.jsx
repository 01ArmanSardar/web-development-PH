// import profile.png from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className="flex bg-red-300 justify-between">
            <div className="p-5">
                <button>Knowladge Cafe</button>
            </div>
            <div className="me-8">
                <img src="src\assets\images\profile.png" alt="" />
            </div>


        </div>
    );
};

export default Header;