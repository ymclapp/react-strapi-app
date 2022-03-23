import React, { useState, useEffect } from 'react';
import { Card, Container } from "react-bootstrap";

// const bookAPI = 'https://api.nytimes.com/svc/lists/names.json?api-key=HrfZtmSlf7oB2E4OPyzoyA6MGfRFkzr6';
const bookAPI = 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=HrfZtmSlf7oB2E4OPyzoyA6MGfRFkzr6';

export default function Books() {

    const [books, setBooks] = useState({results:[]});


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
                {/* <p>{JSON.stringify(books.results.books[0].title)}</p>   This works to bring back everything for */}
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
                <Container fluid>
                    {books.results.books[0].title.map((book, index) =>
                        <Card key={book.index}>
                            <Card.Header
                                className='article-header text-center'
                            >
                                <h1>{book.title}</h1>
                                {/* <h5 className='text-muted'>{book.byline}</h5> */}
                            </Card.Header>
                            {/* <Card.Body className='article-abstract'>
                                <h5>{book.abstract}</h5>
                            </Card.Body> */}
                            {/* <Card.Footer className='article-footer text-muted text-center'>
                                {book.published_date}<br />
                                {book.source}
                            </Card.Footer> */}

                        </Card>
                    )}
                </Container>
            </div>
        </>
    )
}