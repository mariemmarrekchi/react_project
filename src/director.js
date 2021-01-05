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
      <div>
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
          <div className="row col-sm-12">
            <div className="col-sm-6">
              <MDBCard style={{ width: "22rem", marginTop: "40px" }}>
                <MDBCardImage
                  className="img-fluid"
                  src="https://www.indiewire.com/wp-content/uploads/2019/03/Screen-Shot-2019-03-05-at-12.56.31-PM.png?w=780"
                  waves
                />
                <MDBCardBody>
                  <MDBCardTitle>Christopher Nolan</MDBCardTitle>
                  <MDBCardText>
                    Christopher Edward Nolan est un réalisateur, scénariste,
                    monteur et producteur de cinéma britanno-américain, né le 30
                    juillet 1970 à Westminster (Londres). Il se fait connaître à
                    la fin des années 1990 par un premier long métrage,
                    Following (1998), tourné en noir et blanc. Son deuxième
                    film, Memento (2000), lui apporte une renommée, qui lui
                    permet d'obtenir pour le troisième, Insomnia (2002), la
                    collaboration d'Al Pacino et Robin Williams. Il est choisi
                    ensuite pour réaliser la trilogie des Batman : Batman Begins
                    (2005), The Dark Knight : Le Chevalier noir (2008) et The
                    Dark Knight Rises (2012).il met en scène Le Prestige (2006),
                    et deux films de science-fiction, Inception (2010) et
                    Interstellar (2014).
                  </MDBCardText>
                  <MDBBtn href="#">Plus de détails</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
            <div className="col-sm-6">
              <MDBCard
                style={{ width: "22rem", height: "48rem", marginTop: "40px" }}
              >
                <MDBCardImage
                  className="img-fluid"
                  style={{ height: "400px" }}
                  src="https://images.indianexpress.com/2019/01/rajkumar-hirani-759.jpg?w=759&h=422&imflag=true"
                  waves
                />
                <MDBCardBody>
                  <MDBCardTitle> Rajkumar Hirani</MDBCardTitle>
                  <MDBCardText>
                    Rajkumar Hirani (born 20 November 1962) is an Indian film
                    director and editor. Hirani is known for directing the Hindi
                    films Munna Bhai M.B.B.S (2003), Lage Raho Munnabhai (2006),
                    3 Idiots (2009), PK (2014) and Sanju (2018). All of his
                    films have been commercial and critical successes.[2] Most
                    have won several awards, including the national awards, and
                    have often been regarded by the media and audiences as some
                    of the most path-breaking films in the history of Hindi
                    cinema.[3][4] He has won 11 Filmfare Awards. He is the
                    founder of production house Rajkumar Hirani Films and suraj
                    production house. He is a writer and editor, known for PK
                    (2014), Munna Bhai M.B.B.S. (2003) and 3 Idiots (2009). See
                    full bio »
                  </MDBCardText>
                  <MDBBtn href="#">Plus de détails</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
            <div style={{ marginTop: "40px" }} className="col-sm-6">
              <MDBCard style={{ width: "22rem" }}>
                <MDBCardImage
                  className="img-fluid"
                  src="http://golem13.fr/wp-content/uploads/2019/01/https-hypebeast.com-image-2018-01-hiyao-miyazaki-00001.jpg"
                  waves
                />
                <MDBCardBody>
                  <MDBCardTitle>Hayao Miyazaki</MDBCardTitle>
                  <MDBCardText>
                    né le 5 janvier 1941 à Tokyo, est un dessinateur,
                    réalisateur et producteur de films d'animation japonais,
                    cofondateur du Studio Ghibli avec Isao Takahata. Presque
                    inconnu en Occident en dehors des cercles d’amateurs d’anime
                    et de manga jusqu’à la sortie internationale de Princesse
                    Mononoké en 1999, ses films rencontrent ensuite un grand
                    succès partout dans le monde et surtout au Japon où certains
                    ont battu des records d’affluence.
                  </MDBCardText>
                  <MDBBtn href="#">Plus de détails</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
            <div style={{ marginTop: "40px" }} className="col-sm-6">
              <MDBCard style={{ width: "22rem", height: "37rem" }}>
                <MDBCardImage
                  className="img-fluid"
                  style={{ height: "450px" }}
                  src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fewedit.files.wordpress.com%2F2016%2F04%2Flilly-wachowski.jpg&w=400&c=sc&poi=face&q=85"
                  waves
                />
                <MDBCardBody>
                  <MDBCardTitle> Lilly Wachowski</MDBCardTitle>
                  <MDBCardText>
                    Director, writer and producer Lilly Wachowski was born in
                    1967 in Chicago as Andrew Wachowski, the son of Lynne, a
                    nurse and painter and Ron, a businessman. Lilly was educated
                    at Kellogg Elementary School in Chicago, before moving on to
                    Whitney Young High School. After graduating from high
                    school, ...
                  </MDBCardText>
                  <MDBBtn href="#">Plus de détails</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
          </div>
          {/* ddd */}
          <div className="row  col-sm-12">
            <div style={{ marginTop: "40px" }} className="col-sm-6">
              <MDBCard style={{ width: "22rem" }}>
                <MDBCardImage
                  className="img-fluid"
                  style={{ height: "300px" }}
                  src="data:image/jpeg;base64,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"
                  waves
                />
                <MDBCardBody>
                  <MDBCardTitle>Asghar Farhadi</MDBCardTitle>
                  <MDBCardText>
                    Asghar Farhadi suit des études de théâtre. Il obtient un
                    diplôme de premier cycle en arts dramatiques et une maîtrise
                    de mise en scène théâtrale à l’université de Téhéran et
                    l’université Tarbiat Modarres. Il tourne ensuite des courts
                    métrages de 8 mm et 16 mm au Département de la société du
                    cinéma de jeunesse d’Ispahan avant d'écrire des pièces de
                    théâtre et des scénarios pour la télévision iranienne, IRIB.
                  </MDBCardText>
                  <MDBBtn href="#">Plus de détails</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
            <div style={{ marginTop: "40px" }} className="col-sm-6">
              <MDBCard style={{ width: "22rem", height: "34rem" }}>
                <MDBCardImage
                  className="img-fluid"
                  src="https://www.irishtimes.com/polopoly_fs/1.1948187.1412179909!/image/image.jpg_gen/derivatives/box_620_330/image.jpg"
                  waves
                />
                <MDBCardBody>
                  <MDBCardTitle>David Fincher</MDBCardTitle>
                  <MDBCardText>
                    David Andrew Leo Fincher[1][2] (born August 28, 1962) is an
                    American film director, film producer, television director,
                    television producer, and music video director. He was
                    nominated for the Academy Award for Best Director for The
                    Curious Case of Benjamin Button (2008) and The Social
                    Network (2010). For the latter, he won the Golden Globe
                    Award for Best Director and the BAFTA Award for Best
                    Direction. His films Zodiac and The Social Network are
                    ranked in BBC's 100 Greatest Films of the 21st Century.
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
