import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col, Button } from "react-bootstrap";

// const bookAPI = 'https://api.nytimes.com/svc/lists/names.json?api-key=HrfZtmSlf7oB2E4OPyzoyA6MGfRFkzr6';
const bookAPI = 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=HrfZtmSlf7oB2E4OPyzoyA6MGfRFkzr6';

export default function Books() {

    const [books, setBooks] = useState({ results: [] });


    useEffect(() => {
        getBooksWithFetch();
    }, []);

    const getBooksWithFetch = async () => {
        const response = await fetch(bookAPI);
        const jsonData = await response.json({});
        setBooks(jsonData);
        console.log(jsonData);
        // setImages(jsonData.results.media)
    };

    return (
        <>
            <div>
                {/* this works to bring back one title */}
                {/* <p>{JSON.stringify(books.results.books[0].title)}</p> */}
                {/* <Container fluid>
                {articles.results.map((article) => (
                    <Card key={article.id}>
                        <Card.Body>
                            <Card.Header
                                className='article-header'>
                                <h1>{article.title}</h1>
                            </Card.Header> */}

                {/* <Card>
                    <Card.Body>
                        <Card.Header className='article-header'><h1>Article 1</h1></Card.Header> */}
                {/* <Card.Body>Description</Card.Body>
                            <Card.Footer className='text-muted'>Bookmark  <i className='bookmark__icon far fa-bookmark' aria-hidden='true'></i></Card.Footer>
                        </Card.Body>
                    </Card>
                ))}
            </Container> */}
            <h1 className='text-center'>Hardcover Fiction</h1>
                 <Container fluid>
                    <Row xs={1} md={4} className="g-4">
                        {books.results.books?.map((book) =>
                            <Col>
                                <Card key={book.id}>
                                    <Card.Header
                                        className='article-header text-center'
                                    >
                                        <h3>{book.title}</h3>
                                        <h5 className='text-muted'>{book.contributor}</h5>
                                    </Card.Header>
                                    <Card.Body className='article-abstract text-justify'>
                                        <h5>{book.description}</h5>
                                        <Card.Img className='article-image' variant='bottom' src={book.book_image} />
                                    </Card.Body>
                                    <Card.Footer className='article-footer text-muted text-center'>
                                        
                                    <Button href={book.amazon_product_url}>{book.title} on Amazon</Button>
                            </Card.Footer>

                                </Card>
                            </Col>
                        )}
                    </Row>
                </Container>
            </div>
        </>
    )
}