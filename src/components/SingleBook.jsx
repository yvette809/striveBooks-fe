import React from 'react'
import {Card,Col,Row} from 'react-bootstrap'



const SingleBook = (props) => {
    return(
        <Card className = "col-md-4">
       <Card.Img variant = "top" src={props.item.img} />
      <Card.Body>
          <Card.Title>{props.item.title}</Card.Title>
          <Card.Text>
              {props.item.category} - {props.item.price}
          </Card.Text>
    </Card.Body>
</Card>
    )
}




export default SingleBook;