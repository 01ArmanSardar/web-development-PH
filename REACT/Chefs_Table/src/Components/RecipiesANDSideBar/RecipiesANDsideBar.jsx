
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Recipies from '../Recipies/Recipies';
import SideBar from '../SideBar/SideBar';
const RecipiesANDsideBar = ({wantTocook}) => {
    
    
    return (
        <div className="container">
        <div className="row">
          <div  className="col-8 "><Recipies wantTocook={wantTocook}></Recipies></div>
          <div className="col-4"><SideBar></SideBar></div>
        </div>
      </div>
    );
};

export default RecipiesANDsideBar;