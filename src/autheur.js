import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import { Spinner } from "react-bootstrap";

import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol
} from "mdbreact";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Pagination,
  PaginationItem,
  PaginationLink
} from "reactstrap";
export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.toggle1 = this.toggle1.bind(this);
    this.state = { collapse: false };
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  toggle1() {
    this.setState(state => ({ collapse: !state.collapse }));
  }
  render() {
    return (
      <div
        style={{
          backgroundImage:
            "url('http://chantouvivelavie.c.h.pic.centerblog.net/86f18f9f.gif')",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center"
        }}
      >
        <nav className="navbar navbar-expand-sm col-sm-12 fixed-top navbar-dark warning-color">
          <a className="navbar-brand" href="/Login">
            El Jamoussi
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a href="/Login" className="nav-link waves-effect waves-light">
                  Nos Services <span class="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link waves-effect waves-light" href="/Home">
                  la Biblothéque
                </a>
              </li>
              <li className="nav-item  dropdown">
                <UncontrolledDropdown setActiveFromChild>
                  <DropdownToggle tag="a" className="nav-link" caret>
                    Les magzines
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem tag="a" href="/Directors" active>
                      Les directeurs
                    </DropdownItem>
                    <DropdownItem tag="a" href="/journalistes" active>
                      Les Journalistes
                    </DropdownItem>

                    <DropdownItem tag="a" href="/acteurs" active>
                      Les acteurs
                    </DropdownItem>

                    <DropdownItem tag="a" href="/autheurs" active>
                      Les écrivains
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </li>
              <li className="nav-item">
                <a className="nav-link waves-effect waves-light" href="/Film">
                  Les Films
                </a>
              </li>
            </ul>
            <form className="form-inline">
              <div className="md-form my-0">
                <input
                  className="form-control mr-sm-2"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                />
              </div>
            </form>
          </div>
        </nav>
        <MDBCol>
          <center>
            <h1>The top authors in the world</h1>
          </center>
          <div className="countainer">
            <div className="row col-sm-12 ">
              <div className="col-sm-6">
                <MDBCard style={{ width: "22rem", height: "37rem" }}>
                  <MDBCardImage
                    className="img-fluid"
                    src="https://cdn1.thr.com/sites/default/files/imagecache/scale_crop_768_433/2019/01/stephen_king_-the_stand-getty-publicity-h_2019.jpg"
                    waves
                  />
                  <MDBCardBody>
                    <MDBCardTitle>Stephen King</MDBCardTitle>
                    <MDBCardText>
                      Stephen King was born on September 21, 1947, in Portland,
                      Maine. Stephen King is popularly known as King of horror
                      stories. After his graduation from the University of
                      Maine, he worked as a teacher. He was successful as a
                      writer and made a good beginning with the horror novel,
                      Carrie. The other popular publications are Shining and IT.
                      Stephen King has a unique writing style and its attributes
                      to best selling horizon in horror series. Most of his
                      writings are adapted into film and television series.
                    </MDBCardText>
                    <MDBBtn href="#">Plus de détails</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </div>
              <div className="col-sm-6">
                <MDBCard style={{ width: "22rem", height: "37rem" }}>
                  <MDBCardImage
                    className="img-fluid"
                    src="https://www.hachettebookgroup.com/wp-content/uploads/2019/02/james-writing.jpg"
                    waves
                  />
                  <MDBCardBody>
                    <MDBCardTitle>James Patterson</MDBCardTitle>
                    <MDBCardText>
                      James Patterson was born on March 22, 1947. He is a famous
                      American writer and philanthropist and sold more than 300
                      million books, and he gets credit for selling more than 1
                      million e-books for the first time. James tops the Forbes
                      highest paid authors for three consecutive years. Some of
                      the best works of James Patterson include Alex Cross,
                      Women’s murder club, Daniel X, Witch and Wizard. He has
                      contributed stand-alone thrillers and romance novels.
                      Patterson received the Literarian Award from National Book
                      Foundation
                    </MDBCardText>
                    <MDBBtn href="#">Plus de détails</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </div>
              <div style={{ marginTop: "40px" }} className="col-sm-6">
                <MDBCard style={{ width: "22rem", height: "37rem" }}>
                  <MDBCardImage
                    className="img-fluid"
                    src="https://www.hachette.fr/sites/default/files/styles/manual_crop_831x554/public/content_types/interview/field_image_principal/paysage-itw-grisham-compressor.jpg?itok=gtMB5UUR"
                    waves
                  />
                  <MDBCardBody>
                    <MDBCardTitle>John Grisham</MDBCardTitle>
                    <MDBCardText>
                      John Ray Grisham is popularly called as John Grisham. He
                      was born on February 8, 1955, in Arkansas, United States.
                      The American best selling writer is an activist,
                      politician and attorney. He has many popular legal
                      thrillers in his kitty. His books are popular all over the
                      world, and they are translated into 42 languages.
                    </MDBCardText>
                    <MDBBtn href="#">Plus de détails</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </div>
              <div style={{ marginTop: "40px" }} className="col-sm-6">
                <MDBCard style={{ width: "22rem", height: "37rem" }}>
                  <MDBCardImage
                    className="img-fluid"
                    src="https://i1.wp.com/www.paperbackparis.com/wp-content/uploads/2017/05/come-sundown-nora-roberts-book-review.png?fit=850%2C565&ssl=1"
                    waves
                  />
                  <MDBCardBody>
                    <MDBCardTitle>Nora Roberts</MDBCardTitle>
                    <MDBCardText>
                      Nora Roberts was born on October 10, 1950, in Maryland,
                      United States. She has authored more than 213 romance
                      novels, and she is the bestselling American author. Her
                      pen names are J.D. Robb, Jill March and Sarah Hardesty.
                      Her books come under romance, fantasy and suspense
                      category.
                    </MDBCardText>
                    <MDBBtn href="#">Plus de détails</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </div>
            </div>
            {/* ddd */}
            <div className="row  col-sm-12">
              <div style={{ marginTop: "40px" }} className="col-sm-6">
                <MDBCard style={{ width: "22rem", height: "35rem" }}>
                  <MDBCardImage
                    className="img-fluid"
                    src="https://www.barnesandnoble.com/review/ennobled/wp-content/nas-uploads/2019/03/Danielle-Steel-Silent-Night-Crop.jpg"
                    waves
                  />
                  <MDBCardBody>
                    <MDBCardTitle>Danielle Steel</MDBCardTitle>
                    <MDBCardText>
                      Danielle is a popular American novelist. She was born on
                      August 14, 1947. More than 800 million copies of her books
                      were sold successfully. She is the bestselling author
                      alive, and she stands in the fourth place in all-time
                      fiction categories. Most of her books focus on prison,
                      blackmail, fraud and suicide. She wrote books on poetry
                      and fiction meant for children. She raises funds for the
                      treatment of medical disorders
                    </MDBCardText>
                    <MDBBtn href="#">Plus de détails</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </div>
              <div style={{ marginTop: "40px" }} className="col-sm-6">
                <MDBCard style={{ width: "22rem", height: "35rem" }}>
                  <MDBCardImage
                    className="img-fluid"
                    style={{ width: "400px" }}
                    src="http://nd01.jxs.cz/597/494/39e24a536e_44064961_o2.jpg"
                    waves
                  />
                  <MDBCardBody>
                    <MDBCardTitle>Stephenie Meyer</MDBCardTitle>
                    <MDBCardText>
                      Stephenie Meyer was born on December 24, 1973, and she is
                      in the 7th position of top authors list, in Connecticut,
                      United States. She married Christian Meyer in 1994. They
                      have three sons. She was influenced by the writings of
                      William Shakespeare and Jane Austen. They have three
                      children. Stephenie is popular for adult fiction content,
                      and she is a successful film producer.
                    </MDBCardText>
                    <MDBBtn href="#">Plus de détails</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </div>
            </div>
          </div>
        </MDBCol>
        <Pagination
          className="col-sm-5 "
          style={{ backgroundColor: "orange", marginTop: "20px" }}
          aria-label="Page navigation example"
        >
          <PaginationItem>
            <PaginationLink first href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink previous href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="/Login">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="/Home">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="/Directors">3</PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationLink href="/Film">4</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink next href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink last href="#" />
          </PaginationItem>
        </Pagination>
      </div>
    );
  }
}
