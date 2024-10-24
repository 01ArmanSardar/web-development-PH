import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import "bootstrap-icons/font/bootstrap-icons.css";
import Button from 'react-bootstrap/Button';

const Recipie = ({recipie,wantTocook}) => {
    const{name,img,description,ingredients,calories,preparing_time}=recipie
    
    return (
        <Card style={{ width: '18rem' }}>
      <Card.Img className='p-4 rounded-full' variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
      </Card.Body>
      <h1 className='font-semibold p-2'>ingredient : {ingredients.length}</h1>
      <ListGroup className="list-group-flush">
        
        {ingredients.map((ingredient,idx)=><ListGroup.Item key={idx}>{ingredient}</ListGroup.Item>)} 
        
      </ListGroup>
      <Card.Body>
        <div className='flex justify-evenly'>
        <Card.Text > <i className="bi bi-clock"></i> { preparing_time}</Card.Text>
    <Card.Text> <i className="bi bi-fire"></i>{calories}</Card.Text>
        </div>
        {/* <Button variant="warning">Want to Cook</Button> */}
        <button type="button" className="btn btn-warning" onClick={()=>wantTocook(recipie)}>want to cook</button>
      </Card.Body>
    </Card>
    );
};

export default Recipie;