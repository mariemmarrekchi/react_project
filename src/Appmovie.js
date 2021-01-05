import React from "react";
import "./style.css";
import "./script";
import $ from "jquery";
import Bib from "./bib.jpg";
import { Link } from "react-router-dom";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBInput,
  MDBBtn
} from "mdbreact";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Button
} from "reactstrap";

const items = [
  {
    src:
      "https://www.museeyslmarrakech.com/wp-content/uploads/2017/10/BIBLIOTHEQUE.jpg",
    altText: "Slide 1",
    caption: "La bibliothéque"
  },
  {
    src:
      "https://www.archimag.com/sites/archimag.com/files/styles/article/public/web_articles/image/bibpublique_stokholm.jpg?itok=E47gGaDp",
    altText: "le calme",
    caption: "le calme"
  },
  {
    src:
      "https://www.ensta-paristech.fr/sites/default/files/images/Bibliotheque/biblio1.jpg",
    altText: "Slide 3",
    caption: "le silence "
  },
  {
    src:
      "https://www.sciencesetavenir.fr/assets/img/2016/05/16/cover-r4x3w1000-57dfa8e274927-salle-de-cinema.jpg",
    altText: "Slide 3",
    caption: "regarder un film "
  }
];

class Example extends React.Component {
  componentDidMount() {
    const h1 = $("h1");
    console.log(h1);
    const h = $("img");
    console.log(h);
    const h2 = $("img1");
    console.log(h2);
    const h3 = $("img2");
    console.log(h3);
    const h4 = $("jamoussi");
    console.log(h4);
  }
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.Click = this.Click.bind(this);
  }
  Click() {
    document.getElementById("id01").style.display = "none";
  }
  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img
            className="col-sm-12"
            height={470}
            width={1110}
            src={item.src}
            alt={item.altText}
          />
          <CarouselCaption
            captionText={item.caption}
            captionHeader={item.caption}
          />
        </CarouselItem>
      );
    });

    return (
      <div id="div1">
        <div className="container">
          <div className="row">
            <h1 className="col-sm-6 text-center " id={"h1"}>
              Bienvenue chez El Jamoussi
              <img
                src="data:image/jpeg;base64,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"
                width="200px"
                alt="jamoussi"
                id={"jamoussi"}
                className="col-sm-4"
              />
            </h1>
            <span className="col-sm-6">
              <a href="#sing">
                <Button color="warning">Se Connecter</Button>
              </a>
              <a href="#sing">
                <Button color="info">Inscription</Button>
              </a>
            </span>

            <Carousel
              className="col-sm-12"
              activeIndex={activeIndex}
              next={this.next}
              previous={this.previous}
            >
              <CarouselIndicators
                items={items}
                activeIndex={activeIndex}
                onClickHandler={this.goToIndex}
              />
              {slides}
              <CarouselControl
                direction="prev"
                directionText="Previous"
                onClickHandler={this.previous}
              />
              <CarouselControl
                direction="next"
                directionText="Next"
                onClickHandler={this.next}
              />
            </Carousel>

            <div className="col-sm-12 text-uppercase">
              <center>
                <h2 id="services">Nos Services</h2>
              </center>
            </div>

            <div className="col-sm-6 image ">
              <img
                id={"img1"}
                src={Bib}
                width={250}
                className="rounded-circle"
                alt="bibliothéque"
              />
              <br />
              <p className={"  text-justify text-center "}>
                Vous pouvez accéder aux services de la bibliothéque
              </p>
            </div>
            <div className="col-sm-6 image">
              <img
                id={"img"}
                src="https://media-cdn.tripadvisor.com/media/photo-s/0e/69/76/c2/sanno-cafeteria.jpg"
                width={250}
                alt="café"
                className="rounded-circle"
              />
              <p className={" text-justify text-center "}>
                Vous pouvez accéder aux services <br />
                de la caféteria
              </p>
            </div>

            <div className=" col align-self-center image ">
              <img
                id={"img2"}
                src="https://media-cdn.tripadvisor.com/media/photo-s/07/d4/71/0c/level-up.jpg"
                width={250}
                alt="jeux"
                className="rounded-circle"
              />
              <p className={"text-justify text-center"}>
                Vous pouvez accéder à
                <br /> la salle des jeux
              </p>
            </div>
            <div className=" col align-self-end image ">
              <img
                id={"img3"}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN_tZja9EVuAhf1ddBwII2Tfks1pXTu2QLgMs7j-RhsbAAwFxlGQ"
                width={250}
                alt="film"
                className="rounded-circle"
              />
              <p className={"text-justify text-center"}>
                Vous pouvez accéder à
                <br /> la salle de cinéma
              </p>
            </div>
            <div className="col-sm-12 text-center text-blod">
              <p id="paraghraphe">
                Si Vous étes trés intéréssés par nos services vous pouvez nous
                rejoindre
              </p>
            </div>

            <div className="col-sm-12">
              <MDBContainer>
                <MDBRow>
                  <MDBCol calssName="col-sm-12">
                    <MDBCard
                      className="card-image "
                      style={{
                        backgroundImage:
                          "url(https://www.tunisie.co/uploads/images/content/jamousi-120517-v.jpg)",
                        backgroundAttachmebt: "fixed",
                        backgroundPosition: "center",
                        backgroundSize: "cover"
                      }}
                    >
                      <div className="text-white rgba-stylish-strong py-5 px-5 z-depth-4">
                        <div className="text-center">
                          <h3 className="white-text mb-5 mt-4 font-weight-bold">
                            <a
                              id="sing"
                              className="green-text font-weight-bold"
                            >
                              <strong> Inscription</strong>
                            </a>
                          </h3>
                        </div>
                        <MDBInput
                          label="votre email"
                          group
                          type="text"
                          validate
                          labelClass="white-text"
                          placeholder="email"
                        />
                        <MDBInput
                          label="votre mot de passe"
                          group
                          type="password"
                          validate
                          labelClass="white-text"
                          palceholder="mot de passe"
                        />
                        <div className="md-form pb-3">
                          <MDBInput
                            label={
                              <>
                                Accepter les&nbsp;
                                <a
                                  href="#!"
                                  className="green-text font-weight-bold"
                                >
                                  Termes et les Conditions
                                </a>
                              </>
                            }
                            type="checkbox"
                            id="checkbox1"
                            labelClass="white-text"
                          />
                        </div>
                        <MDBRow className="d-flex align-items-center mb-4">
                          <div className="text-center mb-3 col-sm-12">
                            <Link to="/Login">
                              {" "}
                              <MDBBtn
                                color="success"
                                rounded
                                type="button"
                                className="btn-block z-depth-1"
                              >
                                Se connecter
                              </MDBBtn>
                            </Link>
                          </div>
                        </MDBRow>
                        <MDBCol sm="6">
                          <p className="  font-small white-text d-flex justify-content-center">
                            vous avez un compte?
                            <a
                              href="#!"
                              className="green-text ml-1 font-weight-bold"
                            >
                              se connecter
                            </a>
                          </p>
                        </MDBCol>
                      </div>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Example;
