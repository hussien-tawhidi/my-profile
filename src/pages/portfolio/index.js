import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { projects, meta } from "../../content_option";
import { FaSmile } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className='About-header'>
        <Helmet>
          <meta charSet='utf-8' />
          <title> Projects | {meta.title} </title>{" "}
          <meta name='description' content={meta.description} />
        </Helmet>
        <Row className='mb-5 mt-3 pt-md-3'>
          <Col lg='8'>
            <h1 className='display-4'> Projects </h1>{" "}
            <hr className='t_border my-4 ml-0 text-left' />
          </Col>
        </Row>
        <div className='po_items_ho'>
          <div className='row'>
            {projects.map((data, i) => {
              return (
                <div className='col-md-4 mb-5 ' key={i}>
                  <div className='po_item'>
                    <img src={data.img} alt='' className='img-fluid' />
                    <div className='content p-2'>
                      <p>{data.desctiption}</p>
                      <Link to={data.link}>view project</Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </HelmetProvider>
  );
};
