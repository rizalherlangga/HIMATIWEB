import {Card} from 'react-bootstrap'

const CardStruktur =(props) => {
    return(
        <div>
          <h3 className='text-center my-5'></h3>
         <Card style={{ width: '18rem' }}>
           <Card.Img variant="top" src={props.image} />
           <Card.Body>
             <Card.Title>{props.jabatan}</Card.Title>
             <Card.Text>{props.nama}</Card.Text>
            </Card.Body>
         </Card>
        </div>
        
    )
}

export default CardStruktur