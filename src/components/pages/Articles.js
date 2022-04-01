import React, { useState, useEffect } from 'react';
import { Card, Container } from "react-bootstrap";

const articleAPI = 'https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=HrfZtmSlf7oB2E4OPyzoyA6MGfRFkzr6';


export default function Articles() {

    const [articles, setArticles] = useState({ results: [] });
    // const [images, setImages] = useState({media: []})

    useEffect(() => {
        getArticlesWithFetch();
    }, []);

    const getArticlesWithFetch = async () => {
        const response = await fetch(articleAPI);
        const jsonData = await response.json({});
        setArticles(jsonData);
        console.log(jsonData);
        // console.log(jsonData['results'][0]['media'][0]['media-metadata'][0]['url'])
        console.log(jsonData.results[0].media[0]['media-metadata'][0].url)
        // console.log(jsonData.media);
    };

    return (
        <>
            <div>
                {/* <p>{JSON.stringify(articles.results)}</p>   This works to bring back everything for */}
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
                    {articles.results.map((article) =>
                        <Card key={article.id}>
                            <Card.Header
                                className='article-header text-center'
                            >
                                <h1>{article.title}</h1>
                                <h5 className='text-muted'>{article.byline}</h5>
                            </Card.Header>
                            <Card.Body className='article-abstract'>
                                <h5>{article.abstract}</h5>
                                {/* <p>{article.media[0]?.[0]?.url}</p> */}
                                <Card.Img className='article-image' variant='bottom' src={article.media[0]?.['media-metadata'][0].url} />
                            </Card.Body>
                            <Card.Footer className='article-footer text-muted text-center'>
                                {article.published_date}<br />
                                {article.source}
                            </Card.Footer>

                        </Card>
                    )}
                </Container>
            </div>
        </>
    )
}