import React from "react";
import "./styl.css";
import "./script";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import { Toast, ToastBody, ToastHeader } from "reactstrap";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Pagination,
  PaginationItem,
  PaginationLink
} from "reactstrap";

import { Spinner } from "react-bootstrap";
export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.state = {
      dropdownOpen: false
    };

    this.toggle2 = this.toggle2.bind(this);
    this.toggle1 = this.toggle1.bind(this);
    this.state = { collapse: false };
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: true
    };
  }
  toggle2() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }
  toggle1() {
    this.setState(state => ({ collapse: !state.collapse }));
  }
  render() {
    return (
      <div id="div">
        <nav className="navbar navbar-expand-sm col-sm-12 fixed-top navbar-dark warning-color">
          <a className="navbar-brand" href="/Login">
            El Jamoussi <Spinner color="danger" />
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
        <div>
          <div className="container">
            <div className="row margin">
              <div className=" col-sm-6 p-3 my-2 rounded">
                <Toast>
                  <ToastHeader>
                    <img
                      src="https://www.livredepoche.com/sites/default/files/styles/manual_crop_269_435/public/images/livres/couv/9782253011798-001-T.jpeg?itok=HtH68G99"
                      alt="f"
                      width="300px"
                    />
                  </ToastHeader>
                  <ToastBody>
                    <div>
                      <Button color="danger" onClick={this.toggle2}>
                        Description
                      </Button>
                      <Modal
                        isOpen={this.state.modal}
                        toggle={this.toggle}
                        className={this.props.className}
                      >
                        <ModalHeader toggle={this.toggle2}>
                          Description
                        </ModalHeader>
                        <ModalBody>
                          Gustave Flaubert est un écrivain français né à Rouen
                          le 12 décembre 18211 et mort à Croisset, lieu-dit de
                          la commune de Canteleu, le 8 mai 1880. Prosateur de
                          premier plan de la seconde moitié du xixe siècle,
                          Gustave Flaubert a marqué la littérature universelle
                          par la profondeur de ses analyses psychologiques, son
                          souci de réalisme, son regard lucide sur les
                          comportements des individus et de la société, et par
                          la force de son style dans de grands romans comme
                          Madame Bovary (1857), Salammbô (1862), L'Éducation
                          sentimentale (1869), ou le recueil de nouvelles Trois
                          contes (1877).
                        </ModalBody>
                        <ModalFooter>
                          <Button color="success" onClick={this.toggle2}>
                            Réservation
                          </Button>
                          <Button color="secondary" onClick={this.toggle2}>
                            sortie
                          </Button>
                        </ModalFooter>
                      </Modal>
                    </div>
                  </ToastBody>
                </Toast>
              </div>

              <div className=" col-sm-6 p-3 my-2 rounded">
                <Toast>
                  <ToastHeader>
                    <img
                      src="data:image/jpeg;base64,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"
                      alt="f"
                      width="300px"
                    />
                  </ToastHeader>
                  <ToastBody>
                    <div>
                      <Button color="danger" onClick={this.toggle2}>
                        Description
                      </Button>
                      <Modal
                        isOpen={this.state.modal}
                        toggle={this.toggle}
                        className={this.props.className}
                      >
                        <ModalHeader toggle={this.toggle2}>
                          Description
                        </ModalHeader>
                        <ModalBody>
                          Henry-René-Albert-Guy de Maupassant [gi d(ə)
                          mo.pa.ˈsɑ̃] est un écrivain et journaliste littéraire
                          français né le 5 août 1850 au château de Miromesnil à
                          Tourville-sur-Arques1,2 (Seine-Inférieure) et mort le
                          6 juillet 1893 à Paris. Lié à Gustave Flaubert et à
                          Émile Zola, Maupassant a marqué la littérature
                          française par ses six romans, dont Une vie en 1883,
                          Bel-Ami en 1885, Pierre et Jean en 1887-1888, et
                          surtout par ses nouvelles (parfois intitulées contes)
                          comme Boule de suif en 1880, les Contes de la bécasse
                          (1883) ou Le Horla (1887).
                        </ModalBody>
                        <ModalFooter>
                          <Button color="success">Réservation</Button>
                          <Button color="secondary" onClick={this.toggle2}>
                            sortie
                          </Button>
                        </ModalFooter>
                      </Modal>
                    </div>
                  </ToastBody>
                </Toast>
              </div>

              <div className=" col-sm-6 p-3 my-2 rounded">
                <Toast>
                  <ToastHeader>
                    <img
                      src="https://www.babelio.com/couv/CVT_Le-Rouge-et-le-Noir_4565.jpeg"
                      alt="f1"
                      width="300px"
                    />
                  </ToastHeader>
                  <ToastBody>
                    <div>
                      <Button color="danger">Description</Button>
                      <Modal
                        isOpen={this.state.modal}
                        toggle={this.toggle}
                        className={this.props.className}
                      >
                        <ModalHeader toggle={this.toggle2}>
                          Description
                        </ModalHeader>
                        <ModalBody>
                          Henri Beyle, plus connu sous le pseudonyme de
                          Stendhal1 (prononcé , né le 23 janvier 1783 à Grenoble
                          et mort d'apoplexie le 23 mars 1842 dans le 2e
                          arrondissement de Paris2, est un écrivain français,
                          connu en particulier pour ses romans Le Rouge et le
                          Noir et La Chartreuse de Parme. Stendhal aurait voulu
                          consacrer sa vie à la rêverie, à la « chasse au
                          bonheur », aux arts et à l'amour ; bien malgré lui, il
                          a eu une vie mouvementéeN 2. Après la mort d'une mère
                          trop aimée, il souffre d'une enfance étouffante à
                          Grenoble auprès d'un père qu'il méprise et d'un
                          grand-père qu'il adore. Il trouve refuge dans la
                          littérature avant de partir de Grenoble, en 1799, pour
                          aller étudier à Paris. En réalité, il s'est découvert
                          une vocation, et abandonne ses études : il veut être
                          comic bard, il rêve d'écrire des comédies
                        </ModalBody>
                        <ModalFooter>
                          <Button color="success">Réservation</Button>
                          <Button color="secondary">sortie</Button>
                        </ModalFooter>
                      </Modal>
                    </div>
                  </ToastBody>
                </Toast>
              </div>

              <div className=" col-sm-6 p-3 my-2 rounded">
                <Toast>
                  <ToastHeader>
                    <img
                      src="https://www.babelio.com/couv/CVT_Sans-famille_9570.jpeg"
                      alt="f1"
                      width="300px"
                    />
                  </ToastHeader>
                  <ToastBody>
                    <div>
                      <Button color="danger">Description</Button>
                    </div>
                  </ToastBody>
                </Toast>
              </div>
              <div className=" col-sm-6 p-3 my-2 rounded">
                <Toast>
                  <ToastHeader>
                    <img
                      src="data:image/jpeg;base64,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"
                      alt="f"
                      width="300px"
                    />
                  </ToastHeader>
                  <ToastBody>
                    <div>
                      <Button color="danger">Description</Button>
                      <Modal
                        isOpen={this.state.modal}
                        toggle={this.toggle}
                        className={this.props.className}
                      >
                        <ModalHeader toggle={this.toggle2}>
                          Description
                        </ModalHeader>
                        <ModalBody>
                          Charles John Huffam Dickens , né à Landport (en), près
                          de Portsmouth, dans le Hampshire, comté de la côte sud
                          de l'Angleterre, le 7 février 1812 et mort à Gad's
                          Hill Place (en) à Higham dans le Kent, le 9 juin 1870
                          (à 58 ans), est considéré comme le plus grand
                          romancier de l'époque victorienne. Dès ses premiers
                          écrits, il est devenu immensément célèbre, sa
                          popularité ne cessant de croître au fil de ses
                          publications. L'expérience marquante de son enfance,
                          que certains considèrent comme la clef de son génie, a
                          été, peu avant l'incarcération de son père pour dettes
                          à la Marshalsea, son embauche à douze ans chez Warren
                          où il a collé des étiquettes sur des pots de cirage
                          pendant plus d'une année. Bien qu'il soit retourné
                          presque trois ans à l'école, son éducation est restée
                          sommaire et sa grande culture est essentiellement due
                          à ses efforts personnels.
                        </ModalBody>
                        <ModalFooter>
                          <Button color="success" onClick={this.toggle2}>
                            Réservation
                          </Button>
                          <Button color="secondary">sortie</Button>
                        </ModalFooter>
                      </Modal>
                    </div>
                  </ToastBody>
                </Toast>
              </div>

              <div className=" col-sm-6 p-3 my-2 rounded">
                <Toast>
                  <ToastHeader>
                    <img
                      src="https://images-na.ssl-images-amazon.com/images/I/41RXHoRfshL._SX307_BO1,204,203,200_.jpg"
                      alt="f"
                      width="300px"
                    />
                  </ToastHeader>
                  <ToastBody>
                    <div>
                      <Button color="danger">Description</Button>
                      <Modal
                        isOpen={this.state.modal}
                        toggle={this.toggle}
                        className={this.props.className}
                      >
                        <ModalHeader toggle={this.toggle2}>
                          Description
                        </ModalHeader>
                        <ModalBody>
                          Virginia Woolf, née Adeline Virginia Alexandra Stephen
                          le 25 janvier 1882 à Londres et morte le 28 mars 1941
                          à Rodmell (Royaume-Uni), est une femme de lettres
                          anglaise. Elle est l'un des principaux auteurs
                          modernistes du xxe siècle. Dans l'entre-deux-guerres,
                          elle est une figure marquante de la société littéraire
                          londonienne et un membre central du Bloomsbury Group,
                          qui réunit des écrivains, artistes et philosophes
                          anglais. Les romans Mrs Dalloway (1925), La Promenade
                          au phare (1927), Orlando (1928) et Les Vagues (1937),
                          ainsi que l'essai féministe Une chambre à soi (1929),
                          demeurent parmi ses écrits les plus célèbres. En 1941,
                          à l'âge de 59 ans, elle se suicide par noyade dans
                          l'Ouse1, près de Monk's House, dans le village de
                          Rodmell, où elle vivait avec son mari Leonard Woolf.
                        </ModalBody>
                        <ModalFooter>
                          <Button color="success" onClick={this.toggle2}>
                            Réservation
                          </Button>
                          <Button color="secondary" onClick={this.toggle2}>
                            sortie
                          </Button>
                        </ModalFooter>
                      </Modal>
                    </div>
                  </ToastBody>
                </Toast>
              </div>
              <div className=" col-sm-6 p-3 my-2 rounded">
                <Toast>
                  <ToastHeader>
                    <img
                      src="http://www.orient-lib.com/I-Grande-5905-3ala-hamech-al-sira-3-vols.net.jpg"
                      alt="f1"
                      width="300px"
                    />
                  </ToastHeader>
                  <ToastBody>
                    <div>
                      <Button color="danger" onClick={this.toggle2}>
                        Description
                      </Button>
                      <Modal
                        isOpen={this.state.modal}
                        toggle={this.toggle}
                        className={this.props.className}
                      >
                        <ModalHeader toggle={this.toggle2}>
                          Description
                        </ModalHeader>
                        <ModalBody>
                          Taha Hussein (arabe : طه حسين), est un universitaire,
                          romancier, essayiste et critique littéraire égyptien
                          né le 14 novembre 1889 et mort le 28 octobre 19731.
                          Aveugle tout au long de sa vie, il fut ministre de
                          l'éducation nationale sous Gamal Abdel Nasser2. Né au
                          sein d'une famille pauvre dans un village de la
                          Moyenne-Égypte en 1889, il est le septième d'une
                          fratrie de treize enfants. Il perd la vue à l'âge de
                          trois ans, des suites d'une conjonctivite mal soignée.
                          Cette rencontre précoce avec les méfaits de la
                          pauvreté et de l'ignorance le marquera pour la vie. Il
                          a étudié à l'université religieuse d'al-Azhar. Puis,
                          il suit les cours de la nouvellement créée Université
                          Fouad Ie. Il bénéficie ensuite d'une bourse d'État
                          pour poursuivre ses études à Paris, où il arrive en
                          1914, et y soutient une thèse d'État sur Ibn Khaldoun
                          à la Sorbonne en 19193.
                        </ModalBody>
                        <ModalFooter>
                          <Button color="success" onClick={this.toggle2}>
                            Réservation
                          </Button>
                          <Button color="secondary" onClick={this.toggle2}>
                            sortie
                          </Button>
                        </ModalFooter>
                      </Modal>
                    </div>
                  </ToastBody>
                </Toast>
              </div>
              <div className=" col-sm-6 p-3 my-2 rounded">
                <Toast>
                  <ToastHeader>
                    <img
                      src="http://www.orient-lib.com/I-Grande-9457-sada-al-nisyan-l-echo-de-l-oubli.net.jpg"
                      alt="f1"
                      width="300px"
                    />
                  </ToastHeader>
                  <ToastBody>
                    <div>
                      <Button color="danger">Description</Button>
                      <Modal
                        isOpen={this.state.modal}
                        toggle={this.toggle}
                        className={this.props.className}
                      >
                        <ModalHeader toggle={this.toggle2}>
                          Description
                        </ModalHeader>
                        <ModalBody>
                          Taha Hussein (arabe : طه حسين), est un universitaire,
                          romancier, essayiste et critique littéraire égyptien
                          né le 14 novembre 1889 et mort le 28 octobre 19731.
                          Aveugle tout au long de sa vie, il fut ministre de
                          l'éducation nationale sous Gamal Abdel Nasser2. Né au
                          sein d'une famille pauvre dans un village de la
                          Moyenne-Égypte en 1889, il est le septième d'une
                          fratrie de treize enfants. Il perd la vue à l'âge de
                          trois ans, des suites d'une conjonctivite mal soignée.
                          Cette rencontre précoce avec les méfaits de la
                          pauvreté et de l'ignorance le marquera pour la vie. Il
                          a étudié à l'université religieuse d'al-Azhar. Puis,
                          il suit les cours de la nouvellement créée Université
                          Fouad Ie. Il bénéficie ensuite d'une bourse d'État
                          pour poursuivre ses études à Paris, où il arrive en
                          1914, et y soutient une thèse d'État sur Ibn Khaldoun
                          à la Sorbonne en 19193.
                        </ModalBody>
                        <ModalFooter>
                          <Button color="success" onClick={this.toggle2}>
                            Réservation
                          </Button>
                          <Button color="secondary" onClick={this.toggle2}>
                            sortie
                          </Button>
                        </ModalFooter>
                      </Modal>
                    </div>
                  </ToastBody>
                </Toast>
              </div>
            </div>
            <Pagination
              className="col-sm-5 "
              style={{ backgroundColor: "orange" }}
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
        </div>
      </div>
    );
  }
}
