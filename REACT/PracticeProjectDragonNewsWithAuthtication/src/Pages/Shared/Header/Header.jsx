import moment from 'moment';
import logo from '../../../assets/logo.png'
const Header = () => {
    return (
        <div className='text-center' >
            <  img className='mx-auto' src={logo} alt="LogoImage" />
            <p>Journalism Without Fear or Favour</p>
            <p>{
                moment().format('dddd MMMM Do YYYY, h:mm:ss a')}</p>
        </div>
    );
};

export default Header;