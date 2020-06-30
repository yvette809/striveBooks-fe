import React from 'react'
import{ListGroup,Badge} from 'react-bootstrap';

class BookComments extends React.Component{
    
    state = {
        comments:[],
        bookId: this.props.id
    }

    fetchComments = async (bookId) => {
        const commentsUrl = "https://striveschool.herokuapp.com/api/comments/";
        const comments = await fetch(commentsUrl + bookId, {
          headers: new Headers({
            Authorization: "Basic " + btoa("user30:E6tYs6PBzufRfsVP"),
          }),
        }).then((response) => response.json());
        this.setState({ comments: comments });
      };

      componentDidMount = () => {
        this.fetchComments();
      };

      
      render(){
          return(
          <>
          {this.state.comments.map(comment =>{
          return(
            <ListGroup key= {comment._id}>
            <ListGroup.Item>
            <Badge pill variant="primary" className = "mr-3">
                {comment.comment}
            </Badge>
            </ListGroup.Item>
          </ListGroup>
          )
          
          })}
          </>
          )
          
      }

    
    
}

export default  BookComments;