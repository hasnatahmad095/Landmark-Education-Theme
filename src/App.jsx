import './App.css';
import React, { useState } from "react"
import Data from './Data';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { AiFillFacebook, AiFillTwitterSquare, AiFillYoutube } from 'react-icons/ai'
import { BsLinkedin } from "react-icons/bs"
function App() {


  const[info , Setinfo] = useState(Data)
  

    let content = info.map((item, i) => {
      return (
        <>
          <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand href="#home"><img src={item.navbar.logo} alt="" /></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse className='' id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link className='ms-4 text-black fw-semibold' href="#home">{item.navbar.li1}</Nav.Link>
                  <Nav.Link className='ms-4 text-black fw-semibold' href="#link">{item.navbar.li2}</Nav.Link>
                  <Nav.Link className='ms-4 text-black fw-semibold' href="#link">{item.navbar.li3}</Nav.Link>

                  <NavDropdown className='ms-4 text-black fw-semibold' title={item.navbar.li4} id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link className='ms-4 text-black fw-semibold' href="#link">{item.navbar.li5}</Nav.Link>

                </Nav>
                <Nav.Link href="#link" className='me-5 text-black fw-semibold'>{item.navbar.contact}</Nav.Link>

                <Nav.Link href="#link" className='d-flex align-items-center'>
                  <Nav.Link href="#link" className='me-2 text-primary fs-3'><AiFillFacebook /></Nav.Link>
                  <Nav.Link href="#link" className='me-2 text-primary fs-3'><AiFillTwitterSquare /></Nav.Link>
                  <Nav.Link href="#link" className='me-2 text-danger fs-3'><AiFillYoutube /></Nav.Link>
                  <Nav.Link href="#link" className='me-2 text-primary fs-5'><BsLinkedin /></Nav.Link>
                </Nav.Link>

              </Navbar.Collapse>
            </Container>
          </Navbar>


          <Container fluid className='w-100 sec1' style={{
            backgroundImage: `url(${item.section1.bgimg})`,
            height: "100vh",
            backgroundPosition: "right",
            backgroundSize: "cover",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            paddingLeft: "50px",
          }}>
            <p className='text-light fw-semibold'>{item.section1.s1t1}</p>
            <h1 className='text-light fw-bold'>{item.section1.s1t2}</h1>
            <p className='text-light fw-semibold'>{item.section1.s1t3}</p>
            <button className='bg-success border-0 text-light p-3'>{item.section1.s1btn1}</button>
          </Container>

          <Container fluid className="sec1 d-flex align-items-center pt-5 pb-5">
            <Row className="m-0 p-0">

              <Col lg={6} md={6} sm={12} xs={12}  >
                <img className='w-100' src={item.section2.s2img1} alt="" />
              </Col>

              <Col lg={6} md={6} sm={12} xs={12} className='pe-3 ps-3'>
                <h1 className='fw-bold'>{item.section2.s2t1}</h1>
                <p className='text-secondary mt-3 mb-5'>{item.section2.s2t2}</p>
                <a href="" className='text-success' >{item.section2.s2t3}</a>
              </Col>

            </Row>
          </Container>


          <Container className="sec1 pt-5 pb-5">
            <h1 className='fw-bold text-center'>{item.section3.s3t1}</h1>
            <p className='text-center'>{item.section3.s3t2}</p>
            <Row className="m-0 p-0">

              <Col lg={6} md={6} sm={12} xs={12} className=' pt-3 pb-3'>
                <img className='w-100' src={item.section3.s3img1} alt="" />
                <h1 className='mt-4' >{item.section3.s3t3}</h1>
                <p className='mt-3'>{item.section3.s3t4}</p>
                <a href="" className='text-success'>{item.section3.s3t5}</a>
              </Col>

              <Col lg={6} md={6} sm={12} xs={12} className=' pt-3 pb-3'>
                <img className='w-100' src={item.section3.s3img2} alt="" />
                <h1 className='mt-4'>{item.section3.s3t6}</h1>
                <p className='mt-3'>{item.section3.s3t7}</p>
                <a className='text-success' href="">{item.section3.s3t8}</a>
              </Col>

            </Row>
          </Container>



          <Container fluid className="sec1 d-flex align-items-center pt-5 pb-5">
            <Row className="m-0 p-0">

              <Col lg={6} md={6} sm={12} xs={12} className='pe-3 ps-3'>
                <h1 className='fw-bold'>{item.section4.s4t1}</h1>
                <p className='text-secondary mt-3 mb-5'>{item.section4.s4t2}</p>
                <h5 className='mt-5'>{item.section4.s4t3}</h5>
                <p>{item.section4.s4t4}</p>
                <h5 className='mt-5'>{item.section4.s4t5}</h5>
                <p>{item.section4.s4t6}</p>
                <h5 className='mt-5'>{item.section4.s4t7}</h5>
                <p>{item.section4.s4t8}</p>
              </Col>

              <Col lg={6} md={6} sm={12} xs={12}  >
                <img className='w-100' src={item.section4.s4img1} alt="" />
              </Col>

            </Row>
          </Container>



          <Container className="sec1 pt-5 pb-5">
            <div className='d-flex justify-content-between align-items-center w-100'>
              <h1 className='fw-bold'>{item.section5.s5t1}</h1>
              <a href="" className='text-success'>{item.section5.s5t2}</a>
            </div>
            <Row className="m-0 p-0">
              <Col lg={4} md={4} sm={12} xs={12} className='p-2'>
                <img className='w-100' src={item.section3.s3img1} alt="" />
                <p className='mt-3 text-center fw-semibold'>{item.section5.s5img1t}</p>
              </Col>

              <Col lg={4} md={4} sm={12} xs={12} className='p-2'>
                <img className='w-100' src={item.section3.s3img2} alt="" />
                <p className='mt-3 text-center fw-semibold'>{item.section5.s5img2t}</p>
              </Col>

              <Col lg={4} md={4} sm={12} xs={12} className='p-2'>
                <img className='w-100' src={item.section3.s3img2} alt="" />
                <p className='mt-3 text-center fw-semibold'>{item.section5.s5img3t}</p>
              </Col>

            </Row>
          </Container>


          <Container className="sec1 pt-5 pb-5">
            <Row className="m-0 p-2">
              <Col lg={12} md={12} sm={12} xs={12} className='d-flex flex-column align-items-center'>
                <h1 className='fw-bold'>{item.section6.s6t1}</h1>
                <p className='text-black'>{item.section6.s6t2}</p>
                <img className='w-100' src={item.section6.s6img1} alt="" />
              </Col>
            </Row>
          </Container>


          <Container fluid className="sec1 p-0 m-0">
            <Row className="m-0 p-0">

              <Col lg={6} md={6} sm={12} xs={12} className='p-0 m-0'>
                <img className='w-100' src={item.section7.s7img1} alt="" />
              </Col>

              <Col lg={6} md={6} sm={12} xs={12} className=' p-5 bg-success'>
                <h1 className='fw-bold text-light'>{item.section7.s7t1}</h1>
                <p className='text-light mt-3 mb-5'>{item.section7.s7t2}</p>
                <a href="" className='text-light' >{item.section7.s7t3}</a>
              </Col>


            </Row>
          </Container>



          <Container fluid className="sec1 p-0 m-0 bg-black">
            <Row className="m-0 p-0">

              <Col lg={3} md={3} sm={12} xs={12} className='p-0 m-0 d-flex justify-content-center align-items-center'>
                <img src={item.Footer.ftrlogo} alt="" />
              </Col>

              <Col lg={3} md={3} sm={12} xs={12} className=' p-5'>
                <ul className='list-unstyled'>
                  <li className='text-light fw-semibold'>{item.Footer.ftrli1}</li>
                  <li className='text-light mt-4'>{item.Footer.ftrli2}</li>
                  <li className='text-light mt-1'>{item.Footer.ftrli3}</li>
                  <li className='text-light mt-1'>{item.Footer.ftrli4}</li>
                  <li className='text-light mt-1'>{item.Footer.ftrli5}</li>
                </ul>
              </Col>

              <Col lg={3} md={3} sm={12} xs={12} className=' p-5 '>
                <ul className='list-unstyled'>
                  <li className='text-light fw-semibold'>{item.Footer.ftrli6}</li>
                  <li className='text-light mt-4'>{item.Footer.ftrli7}</li>
                  <li className='text-light mt-1'>{item.Footer.ftrli8}</li>
                  <li className='text-light mt-1'>{item.Footer.ftrli9}</li>
                  <li className='text-light mt-1'>{item.Footer.ftrli10}</li>
                </ul>
              </Col>

              <Col lg={3} md={3} sm={12} xs={12} className=' p-5'>
                <ul className='list-unstyled'>
                  <li className='text-light fw-semibold'>{item.Footer.ftrli11}</li>
                  <li className='text-light mt-4'>{item.Footer.ftrli12}</li>
                  <li className='text-light mt-1'>{item.Footer.ftrli13}</li>
                  <li className='text-light mt-1'>{item.Footer.ftrli14}</li>
                </ul>
              </Col>


            </Row>
          </Container>

        </>
      )
    })


    return (
      <>
        <div>{content}</div>
      </>
    )
  }


export default App; 
