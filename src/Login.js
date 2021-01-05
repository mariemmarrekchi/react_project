import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { Card, CardDeck } from "react-bootstrap";
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
      <div id="div">
        <body>
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a
                    href="/Login"
                    className="nav-link waves-effect waves-light"
                  >
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
          <div>
            <div className="row">
              <CardDeck>
                <Card className="col-sm-4">
                  <a href="/Home">
                    <Card.Img
                      variant="top"
                      height={400}
                      style={{ marginTop: "150px" }}
                      src="https://media1.tenor.com/images/469d2de45fa0fb266b5fd8d7a7ef5988/tenor.gif?itemid=11226049"
                    />
                  </a>
                  <Card.Body>
                    <Card.Title style={{ fontSize: "55px", color: "orange" }}>
                      Biblothéques
                    </Card.Title>
                    <Card.Text>
                      Tu aimes dans un livre T’installer pour un long moment Tu
                      as la passion page après page De découvrir les
                      personnages, Tu les imagines, tu les vois, Pour un peu,
                      ils vivent en toi.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card className="col-sm-4">
                  <a href="/Films">
                    {" "}
                    <Card.Img
                      variant="top"
                      height={400}
                      style={{ marginTop: "150px" }}
                      src="https://www.gifmania.fr/Gif-Animes-Films/Animations-Elements-De-Cinema/Images-Movie-Theaters/Movie-Theaters-82069.gif"
                    />
                  </a>
                  <Card.Body>
                    <Card.Title style={{ fontSize: "55px", color: "orange" }}>
                      Films
                    </Card.Title>
                    <Card.Text>
                      Oh, toi, ton cinéma Et tes mains baladeuses, Et ton regard
                      éclair Qui me voit toute nue. Et ces baisers ardents A
                      petits coups de dents Que ma nuque reçoit En averse
                      orageuse
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card className="col-sm-4">
                  <a href="/Directors">
                    {" "}
                    <Card.Img
                      variant="top"
                      height={400}
                      style={{ marginTop: "150px" }}
                      src="https://www.ultra-book.com/users_2/e/m/emiliesaunier/img_/mises_en_pages_grazia__644100.gif"
                    />
                  </a>
                  <Card.Body>
                    <Card.Title style={{ fontSize: "55px", color: "orange" }}>
                      Magazines
                    </Card.Title>
                    <Card.Text>
                      Soignez vos magazines Acceptons l’autre tel qu’il est En
                      partageant nos connaissances Cultivons la diversité La
                      lecture est un trésor Il faut la protéger.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </CardDeck>
            </div>
          </div>
          <div>
            <Pagination
              className="col-sm-5 "
              style={{ backgroundColor: "orange", marginTop: "10px" }}
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
        </body>
      </div>
    );
  }
}
