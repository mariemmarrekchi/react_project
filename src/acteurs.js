import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Pagination,
  PaginationItem,
  PaginationLink
} from "reactstrap";

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
            "url('https://i1.wp.com/brightestyoungthings.com/wp-content/uploads/2014/09/countdown.gif?quality=100&ssl=1')"
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
            <h1>The top actors in the world</h1>
          </center>

          <div className="row col-sm-12">
            <div className="col-sm-6">
              <MDBCard style={{ width: "22rem", height: "24rem" }}>
                <MDBCardImage
                  className="img-fluid"
                  style={{ height: "160px" }}
                  src="https://gal.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fgal.2Fvar.2Fgal.2Fstorage.2Fimages.2Fmedia.2Fmultiupload_du_02_avril_2015.2Fcharlie-chaplin.2F3261636-1-fre-FR.2Fcharlie-chaplin.2Ejpg/480x480/quality/80/charlie-chaplin-n-etait-pas-si-drole-que-ca.jpg"
                  waves
                />
                <MDBCardBody>
                  <MDBCardTitle>Charles Chaplin</MDBCardTitle>
                  <MDBCardText>
                    Considered to be one of the most pivotal stars of the early
                    days of Hollywood, Charlie Chaplin lived an interesting life
                    both in his films and behind the camera. He is most
                    recognized as an icon of the silent film era, often
                    associated with his popular character, the Little Tramp; the
                    man with the ...
                  </MDBCardText>
                  <MDBBtn href="#">Plus de détails</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
            <div className="col-sm-6">
              <MDBCard style={{ width: "22rem", height: "24rem" }}>
                <MDBCardImage
                  className="img-fluid"
                  style={{ width: "8rem" }}
                  src="https://m.media-amazon.com/images/M/MV5BMTg3MDYyMDE5OF5BMl5BanBnXkFtZTcwNjgyNTEzNA@@._V1_.jpg"
                  waves
                />
                <MDBCardBody>
                  <MDBCardTitle>Marlon Brando</MDBCardTitle>
                  <MDBCardText>
                    Marlon Brando is widely considered the greatest movie actor
                    of all time, rivaled only by the more theatrically oriented
                    Laurence Olivier in terms of esteem. Unlike Olivier, who
                    preferred the stage to the screen, Brando concentrated his
                    talents on movies after bidding the Broadway stage adieu in
                    ...
                  </MDBCardText>
                  <MDBBtn href="#">Plus de détails</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
            <div style={{ marginTop: "40px" }} className="col-sm-6">
              <MDBCard style={{ width: "22rem" }}>
                <MDBCardImage
                  className="img-fluid"
                  src="https://resize-parismatch.lanmedia.fr/img/var/news/storage/images/paris-match/people/en-1974-jack-nicholson-decouvre-que-sa-soeur-june-est-en-realite-sa-mere-1638313/26745069-1-fre-FR/En-1974-Jack-Nicholson-decouvre-que-sa-soeur-June-est-en-realite-sa-mere.jpg"
                  waves
                />
                <MDBCardBody>
                  <MDBCardTitle>Jack Nicholson</MDBCardTitle>
                  <MDBCardText>
                    Jack Nicholson, an American actor, producer, director and
                    screenwriter, is a three-time Academy Award winner and
                    twelve-time nominee. Nicholson is also notable for being one
                    of two actors - the other being Michael Caine - who have
                    received Oscar nomination in every decade from the 1960s
                    through the...
                  </MDBCardText>
                  <MDBBtn href="#">Plus de détails</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
            <div style={{ marginTop: "40px" }} className="col-sm-6">
              <MDBCard style={{ width: "22rem", height: "34rem" }}>
                <MDBCardImage
                  className="img-fluid"
                  src="https://imagevars.gulfnews.com/2019/03/26/190326_Mohanlal_16a30b3d589._resources1_16a30b3d589_large.jpg"
                  waves
                />
                <MDBCardBody>
                  <MDBCardTitle>Mohanlal</MDBCardTitle>
                  <MDBCardText>
                    Mohanlal was born to Viswanathan Nair (father) and
                    Santhakumari (mother) in Pathanamthitta district of Kerala,
                    in the southern part of India on 21st May 1960. Starting his
                    career with a classic villain role, he has now become an
                    outstanding actor of Malayalam Cinema in Kerala. Without no
                    doubt
                  </MDBCardText>
                  <MDBBtn href="#">Plus de détails</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
          </div>
          {/* ddd */}
          <div className="row col-sm-12">
            <div style={{ marginTop: "40px" }} className="col-sm-6">
              <MDBCard style={{ width: "22rem", height: "26rem" }}>
                <MDBCardImage
                  className="img-fluid"
                  src="https://ds1.static.rtbf.be/article/image/370x208/0/b/4/6f7b453bc1fd6de97a0153b5513c106b-1518796053.jpg"
                  waves
                />
                <MDBCardBody>
                  <MDBCardTitle>Daniel Day-Lewis</MDBCardTitle>
                  <MDBCardText>
                    Born in London, England, Daniel Michael Blake Day-Lewis is
                    the second child of Cecil Day-Lewis (pseudonym Nicholas
                    Blake), Poet Laureate of the U.K., and his second wife,
                    actress Jill Balcon. His maternal grandfather was Sir
                    Michael Balcon, an important figure in the history of
                    British cinema and ...
                  </MDBCardText>
                  <MDBBtn href="#">Plus de détails</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
            <div style={{ marginTop: "40px" }} className="col-sm-6">
              <MDBCard style={{ width: "22rem", height: "26rem" }}>
                <MDBCardImage
                  className="img-fluid"
                  style={{ width: "5rem" }}
                  src="https://upload.wikimedia.org/wikipedia/commons/4/46/Meryl_Streep_December_2018.jpg"
                  waves
                />
                <MDBCardBody>
                  <MDBCardTitle>Meryl Streep</MDBCardTitle>
                  <MDBCardText>
                    Considered by many critics to be the greatest living
                    actress, Meryl Streep has been nominated for the Academy
                    Award an astonishing 21 times, and has won it three times.
                    Meryl was born Mary Louise Streep in 1949 in Summit, New
                    Jersey, to Mary Wolf (Wilkinson), a commercial artist, and
                    Harry William ...
                  </MDBCardText>
                  <MDBBtn href="#">Plus de détails</MDBBtn>
                </MDBCardBody>
              </MDBCard>
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
