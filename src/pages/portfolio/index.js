import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import { FaSmile } from "react-icons/fa";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className='About-header'>
        <Helmet>
          <meta charSet='utf-8' />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name='description' content={meta.description} />
        </Helmet>
        <div className='wait'>
          <h1 className=''>
            Working on some project when it finished will display here please be
            pecient.it will take some days ...
            <p>
              <span className='mx-2'>
                <FaSmile />
              </span>
            </p>
          </h1>
        </div>
        {/* <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {dataportfolio.map((data, i) => {
            return (
              <div key={i} className="po_item">
                <img src={data.img} alt="" />
                <div className="content">
                  <p>{data.desctiption}</p>
                  <a href={data.link}>view project</a>
                </div>
              </div>
            );
          })}
        </div> */}
      </Container>
    </HelmetProvider>
  );
};
