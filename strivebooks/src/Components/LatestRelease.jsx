import horror from "../Data/horror.json";
import fantasy from "../Data/fantasy.json";
import scifi from "../Data/scifi.json";
import history from "../Data/history.json";
import romance from "../Data/romance.json";

import { Container, Row, Col, Card } from "react-bootstrap";

const LatestRelease = () => {
  return (
    <Container>
      <h2 id="horror">Horror</h2>
      <Row>
        {horror.map((book) => (
          <Col xs={12} md={4} className="text-center mb-2" key={book.asin}>
            <Card className="bg-dark text-white">
              <Card.Img src={book.img} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{book.category}</Card.Text>
                <Card.Text>{book.price}</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
        ))}
      </Row>
      <h2 id="fantasy">Fantasy</h2>
      <Row>
        {fantasy.map((book) => (
          <Col xs={12} md={4} className="text-center mb-2" key={book.asin}>
            <Card className="bg-dark text-white">
              <Card.Img src={book.img} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{book.category}</Card.Text>
                <Card.Text>{book.price}</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
        ))}
      </Row>
      <h2 id="scifi">Sci-Fi</h2>
      <Row>
        {scifi.map((book) => (
          <Col xs={12} md={4} className="text-center mb-2" key={book.asin}>
            <Card className="bg-dark text-white">
              <Card.Img src={book.img} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{book.category}</Card.Text>
                <Card.Text>{book.price}</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
        ))}
      </Row>
      <h2 id="history">History</h2>
      <Row>
        {history.map((book) => (
          <Col xs={12} md={4} className="text-center mb-2" key={book.asin}>
            <Card className="bg-dark text-white">
              <Card.Img src={book.img} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{book.category}</Card.Text>
                <Card.Text>{book.price}</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
        ))}
      </Row>
      <h2 id="romance">Romance</h2>
      <Row>
        {romance.map((book) => (
          <Col xs={12} md={4} className="text-center mb-2" key={book.asin}>
            <Card className="bg-dark text-white">
              <Card.Img src={book.img} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{book.category}</Card.Text>
                <Card.Text>{book.price}</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default LatestRelease;
