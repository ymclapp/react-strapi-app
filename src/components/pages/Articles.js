import { Card, Container } from "react-bootstrap";


export default function Articles() {
    return (
        <div>
            <Container>
                <Card>
                    <Card.Body>
                        <Card.Header className='article-header'><h1>Article 1</h1></Card.Header>
                        <Card.Body>Description</Card.Body>
                        <Card.Footer className='text-muted'>Bookmark  <i className='bookmark__icon far fa-bookmark' aria-hidden='true'></i></Card.Footer>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}