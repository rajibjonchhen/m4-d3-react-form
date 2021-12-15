
// import { Component } from 'react'
import { Carousel, Container, Row, Col } from 'react-bootstrap'


const  MyCarousel = function( {books}) { 
  
  
    return (
          <Container className="text-center mt-5">
           
            <Row>
                <Col className="text-center text-white">
                <h2>{books[0].category.toUpperCase()}</h2>
                      <Carousel>{ 
                          books.map(book => ( 
                            <Carousel.Item key = {book.asin}>
                                <div className="bookContainer">
                                <img
                                  className="d-block w-100"
                                  src={book.img}
                                  alt= 'cover of a book'  
                                />
                                </div>
                                <Carousel.Caption className="bookCaption p-2" key ={book.asin}>
                                    <h3>{book.title}</h3>
                                    <p>Category : {book.category}</p>
                                    <p>Price : £ {book.price}</p>
                                </Carousel.Caption>
                          </Carousel.Item>
                          
                          ))
                    
                        }
                    </Carousel>
                </Col>
            </Row>
        </Container>
    )
  }
  
// class  MyCarousel  { 
  
//   state = {
//     selectedBook: null
//   }
//   render(){
//     return (
//       <Container className="text-center">
       
//         <Row>
//             <Col className="text-center">
//             <h2>{books[0].category.toUpperCase()}</h2>
//                   <Carousel>{ 
//                       this.props.books.map(book => ( 
//                         <Carousel.Item key = {book.asin}>
//                             <div className="bookContainer">
//                             <img
//                               className="d-block w-100"
//                               src={book.img}
//                               alt= 'cover of a book'  
//                             />
//                             </div>
//                             <Carousel.Caption className="bookCaption" key ={book.asin}>
//                                 <h3>{book.title}</h3>
//                                 <p>Category : {book.category}</p>
//                                 <p>Price : {book.price}</p>
//                             </Carousel.Caption>
//                       </Carousel.Item>
                      
//                       ))
                
//                     }
//                 </Carousel>
//             </Col>
//         </Row>
//     </Container>
// )
//   }
// }


export default MyCarousel
