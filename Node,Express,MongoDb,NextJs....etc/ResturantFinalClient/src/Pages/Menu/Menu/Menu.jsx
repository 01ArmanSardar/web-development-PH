
import { Helmet } from 'react-helmet-async';
const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro | menu</title>
                {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
            </Helmet>
            <h1 className="text-8xl">this is menu page</h1>
        </div>
    );
};

export default Menu;