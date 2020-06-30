import React from 'react'
import {Card,Col,Row,Container,FormControl} from 'react-bootstrap'
import SingleBook from './SingleBook'
import BookComments from './BookComments'

class Gallery extends React.Component{

    state ={
        books:[],
        search:"",
        selected:null
    }

    componentDidMount = async () => {
        const response = await fetch("https://striveschool.herokuapp.com/books?offset=0&limit=50")
        if (response.ok){
            const books = await response.json()
            console.log(books)
            this.setState({books:books})
        }
    }

   
   

    render(){
        
        return(
          
            <>
            <Row>
                <div><h1 className = "my-4">{this.props.title}</h1></div>
            </Row>
            <FormControl
            placeholder = "search"
            value = {this.state.value}
            onChange = {(e) => this.setState({search:e.currentTarget.value})}
            className = "mb-3"
            
            />
            <Container>
            <Row>
            {this.state.books
            .filter(book => book.title.toLowerCase().indexOf(this.state.search)!== -1 ||
            book.category.toLowerCase().indexOf(this.state.search)!== -1)
            .map(book =><SingleBook item ={book} />
            )}
            
            </Row>
            </Container>
            <hr></hr>
            <BookComments id = {this.state.books.asin}/>
            </>
        )

    }
}


export default Gallery