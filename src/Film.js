import React from "react";
import "./styl.css";
import "./script";
import { Card, Button } from "react-bootstrap";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";

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
const items = [
  {
    src:
      "data:image/jpeg;base64,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",
    name: "Fast and furious",
    desc:
      "Fast and Furious ou Rapides et dangereux au Québec est une série de films américains d'action dont le premier est sorti en 2001. Elle comprend neuf longs métrages (sortis) ainsi que deux courts métrages. Le premier film est basé sur un article intitulé Racer X, écrit par le journaliste Ken Li et publié dans Vibe, parlant de courses-poursuites et de différents vols dans les rues de New-York (le film se déroule cependant à Los Angeles)"
  },

  {
    src:
      "https://m.media-amazon.com/images/M/MV5BZjU5OWVlN2EtODNlYy00MjhhLWI0MDUtMTA3MmQ5MGMwYTZmXkEyXkFqcGdeQXVyNjE5MTM4MzY@._V1_.jpg",
    name: "The conjuring",
    desc:
      "Conjuring : Les Dossiers Warren ou La Conjuration au Québec (The Conjuring) est un film d'horreur américain réalisé par James Wan, sorti en 2013. Il s'agit du premier film de l'univers cinématographique Conjuring et de la série principale"
  },
  {
    src:
      "https://www.ecranlarge.com/uploads/image/001/021/gladiator-affiche-1021155.jpg",
    name: "Gladiator",
    desc:
      "Gladiator revisite le genre du péplum, dont les derniers films majeurs avaient été réalisés dans les années 1960. Le film ne se fonde pas sur des événements réels mais reprend les noms et certains traits de personnalité de l'empereur Marc Aurèle et de ses enfants Commode et Lucilla. L'intrigue raconte la chute du général romain Maximus Decimus (Russell Crowe)"
  },
  {
    src:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTExMVFRUXGRgXFhUYGBUYFxcYGBUYFxUYGhcYHSggGxooGxcWIjEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQGy0lICUtLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAQYAwAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAECAwUGBwj/xAA/EAABAwIEAwYFAgUCBAcAAAABAAIRAyEEEjFBBVFhEyJxgZHwBjKhscFC0RQjUuHxB2IVM5KyFlNyc4Kiwv/EABoBAAMBAQEBAAAAAAAAAAAAAAABAgMEBQb/xAAsEQACAgEDAwIEBwEAAAAAAAAAAQIRIQMSMQRBURNhBUJxwSJDgZGx0fAU/9oADAMBAAIRAxEAPwDz7D1Fu/D/AA11cvyuDcgBM7yYsuapFbPCMY5mbI4tmJjeNFwSS7n1Kba/Dyd9wqg/DODMzHSSZgjV9OnpP+4FCU+GkMLw8ENbmuCLZWH/APX0WC3i9cn/AJr552P6s24539EZQx1UDKXuIOoJMRAH2aPRc+ptqqFHS1E7tZ5NCjWP+PyF1fD6z8g+S7WmTmJ7rZ/C4qm+dLeseq1qGMqD9byNIvA8Oi54S2vI9fR3pUbeNoHI58gwRPnDZiOgWXUqAfX6R+6Z2MqOBBLi02I21n7qAggg208b7LPUabwGlBxVSN3DYR7LgiSIvIG/9lPHYV5LnOLRlF407oZ98wWNS4q9099wA3lWsxb3TLzB2JMEeG4sB5LVakNtUzB6Oopbm0RqkAeseK1eGNc1puIMTY62GniVi4kTEftbfRVV8ZWY6z3Rpr76I05pO2XqaTmqRT8TYE03Z5BDy4xyIN/+5ZWDpg1G/wC2XDlLWl0HpLVqYyu+q27pjSdp/wAfRYz2Oa60g335yPOxPqtE1do3gpbNreQr4uw7z2b3ZRByd2bzTY+TPjHquaw2CNWo2nYZiGk8p36wtfGVX1W997nAEG5mCBG+hiyz6tU03ZmnK5twRqCHSCPMfddKlbIjFxhtN7jmc0X0iWju5zAJIy06daAbT/T5nwXEPHP03my1P+IVnSO0cZBGsyHAAi/QD0HJZeUzMGNR756Le7MYRcFTOqwmALaeHqhtNpy5hAOZ/wDKqA5jFjIHMdLIf41bUFFjHFkBzAQJnusqMaToI7h5XWOeI4kANFR4a3S9hAcBH/U71QmNxdWpZ9R1S8mZJnvc/wD1H1WiZhse62wBjw0hxAdlIJB0IBkjz0816DRbUwgLW9m7LLzsO9UeYAGnyx/lefvI5W0A96q9/H8TtWebReDYHMNev3VpE6qcuBviIZaopEgmkxtIuBJDsrRcA/LqbLJKsr1XOJc4kk3JOpPVUkooE6QdRctjAARr9FjtZMAC61qBgRb8fRcmodumGNrHaffmjMK95sfHX2QgsJTL3aLTpOa3ui3ORY+7rnn4OhM0WvAGk/n1V/8AEARoOs+4QrLCAPtf192UyLybeHP8Lm2lYNKnjGHT5gouqW1B9xv5+qyshM5QPyouLmgiSNOviPVHphSQbnh0bHfqD4ePqtDO4aDwPn9/78li1MTl0ALtTHPWw8j6oujjyQA7cCTrIDYMegnxScBTyaFCqZuZ68jrH2snrusZnU35G5/KBLIIINrR4A+/RWVg0wM5562JJ39EqyRRZFgdPHePshsRTD76Ea9D4qjHw0wHHaN9Lb+VuivpkRDiZImPIBaxXcHjJh1WGbneD4TAPqEG+nINrj1Pp4LU4lMSwae/wsYzIkfv0XXBGcpFTWgbxt53Tve1v99hP7pn0DMAekfj3dUNYZv4T059V0xic8pD1qgJtMczaD+UNWOk+V7fTzV1YtO0D777Ies8c7+A/daKJi5AlcncoR1RFufeNtv3QtamQVojOUiuVAlImEznIozczXo/dF033iJ6IKiSjME6XeG64pHpJmxRdkHU6q2nV8ieqz+0NyTr6ndFMIJGvnv0WDiaqRpYanI+bwF77iFOm+/e205ct1TQxAEaW228/YWjhQ17p+XcxtGkT6ys2it4Qabr5TJtI/wfqo1Q8tDsthqN9dhz1/utHCPAENABie8YkR3jbxktiLKXEQ1mVzjmLgS4aQJiQ7156JJGL1cmJiAx+YCMw1NxroT9d9wh3PjKReBEwdAL/gR1W0MKDkIj5b5tSCYcJjl46jkp4nh7csjLldMAgSLc9Yt9kNUUtZPBk1ahdrAm4N/E/eVPAuAETcX289fNKixry4OteRziIt6E+SoFOCTHMDpe30MI2lqS4LcYWuMx5e9/7Kmk45k9UDpYCYUqYBaPX373VxQnLBdlEX09ysrEMDHH6FaArbKjFNDh9lvBUc8mZVV/K09JQWJ+60xg3EED9IklxhovGpPM6dEBiatCw7TOQNGXHmd11RaMGzGqvP1tzUSbCXeVk+MxGbutbAQTj5Baoyk0iT6g2UXOlQISw1Jz3BrRLnENa3cuJhoHmVRk5FdSyhKlUf8AT0KpJSMnLJt0ufoiMEY8SQPrdDxbTT6/nRX4e0HxPv0XGz1EzRqVL2sB7KvY8c/P+yxalW++6Jo4gayQNf2UbC95usrAagdOiIwWLLSYMDWx1HgNAsWlWJtJI0kzHly3stOlBEA7QI3jTT081DgG8KfjSW5s3ymDe8GL6aeesLZrVW1aXcIJgW3BLgDNpiSByssLhtIXBvMtIv8AqBsD4hEYOuaYI5CGgESb899beOiW3wRKZfg+JvnK50CJixvlN7bwT6dQSfQxQLSJOUTAmRqT6GY+yw69PMSWkSZtPK9vQrMqYsibwRYi83gm2upiE9lkppnQYR8ZmVLkZi136oN4Ma/NMoarXsIA+msm2kG5WLisU4gEuBI70jXWTJ5yjTjWlotcR9wff3T2F7qNKnUBIzWH356DVWPcImIH40WNXxpERaTaB+VUXud8z4HUlUtMTmFY/GspyS+/IXKjS4kHjuUTr89R5tbUNaAI3gk6xaDNFDh73g9mzMZyk25TJc7ujffZGs4aKDDUxVZlKmCJLQ6s69hamC3W13LRKKMJ6i7szeJsFYNe9xcWgNDbBrAJ7oa3rPVZzmiDFvd/uuhxnxDwgMf2FGsRaXht2E2Dg1z2tJJ5tOqn8LcToYmqWUQ6i8BmUvbg/wCZAyPDoo2mRPevNoWiltV0c3rJ4Rx1QkGd/eqDfpC77jnwvTJNZ+Ip0W5+zLW0hAcGzZoqBtwJ1aLyNYWLiH8Jo718U4Wgu7Nlv9rMrh5PK0WrFkuZyjzGq1uEU3UWVcS5rgQwsw8hwzVKoLc4OhDWdoZ/qLEbhvjXs3g4fD0MO0TLm02vfEGO865PiTdc1j+I1azs1ao+o4mZc4n6aDQeiq3LFUYuZSXQoO6JSmKszcrNwmdBA+0K4utPSPW5UGumOv2B0+6rrPnT8rjo9XfRS+pt1n0/xKi7FRz/AAqK1ihXP5rRRMJ61G1guKAaidovp6I/DcQbIgkAG+otuDzXLdpF4VuGr7H5T7uhwRK6jszt6fEwHnIQQOuoOuosiK9WcpYGjKLC4jbQCBHQ7rAo4Jr2NdTb/MHzDMbmImfI3HNEYx5Y1ud4h2wkkAWInnbpadCsqVmrtK+3kPOLcImZN5uBOka+PohsbSOrZuJOwmST+fTyVOL483LkgZYidjAG29yeh36Cfx7mhpd3pgxbxuYnQ+sKlBhHVRc5vck2kDkPDxlWdplyhxuSdNNoA5rJx3Fy51xrB20sbkbq7F4wZ2uga2E266++SvaT66fc3P4mYiIkRa03U8LhnVqzKNMEue4NGUExe7o5ASfAFYL+JQRe3v0Wo34hfQoVf4fu1quVvagw9lOCXtbyJdkmD+kI2ilq4bR2fxXjMPRNPC0ixracZsha5zqhd33GCYLQ1ze9E5t7xx1fi9C9NzzUY8iWOeX960ST+mWtNzIuuOe2oefeuREXk69f3Sbg3Zc0tETae96cpsn6S7nGptLg2MXR71WAGU3ghrSIiHAtMmB+nmhuHkU+8x57QagEQRMDKRqZIPkhsLgw6XOd6x9S4hbeHwrWNzODAIsYJPlpB1utHSwxwhKTszMZj8RVzCpVeWkgkOcYJAgHLuQABJQUNG09SdPSyOxT2loDZnc9LWsFnZVSSIlggH81AlTe0qACZAgpKZYmcU6EblOpcAe5/wAqr+IHvcbIbPH9/fuFVN4P+VzKJ6EtQPpuDiB3Y6k2v4dfoq8Rw/u5mOabwQP3KtwFfsyHBodsQbaxadv7Lo8JjK2YBpAzDM0XOkd0EGNA3bdDtE4lycWcM4SC3xnZRZSIG4XX4hmcuqlznkwSAA0gQQfmN9B+byqDwgvb2gaTvt6BsWJ2Oh8iqUjJw8HNsruabSNzBcB5gR91Ku0kTNthJd99PXZaWK4eySRmAEGzH9dSAQgMVSLNWPJ5ua5og6a9OiZDwChxAO4FvAyCYHiPolXxJIA0tHKxM/clREuPX7dArRgqhsGETaSI1VURbBnVJnqnZLrCT0Wzgvhx5yF0QTpmAPWM0A2BtKvo8PZ2pAaemhDuRBOk21QCTMIuIMOm3NW9v1Wl/wANHauL2lrR/UacxzMOsLG8FCY3hrmyQDG4OvpFuiZSbQjiGFoGQ5hMuDrGbjuxaOiHdUkKvIRqCmHRNIHIKodJnmFN1TY/coSm4jYohrZ5+hVUTvIucoPG6Jbhydr8oMnyV7MLqOUX2lOgZm0qRcUSKQaI/ARlJ4boAdNvso1KgiSPYHrr7smkSZr7e7qlxVlZ8lVEptEhWWwHkemkKE39PtdNSN9Y/wAf5UXiNP8AGi5kbtllKqNCSt3A4wtB0tECBeeRmZC5wNJuPe6LpVWixkj3+U6JU2dthywiC1t51tc/qDg0yL6QdAoOrPJysc6kJy2cJJtLIyidTaI0IsYWBhuKhu5jlsLW+vTZE/x7pDjGVwMOvEtEEEa2ka7KdpT1LNoVaopulgy2dnLiASDq5u2g03jxWTxHFVMQ/NXeakXDSMrRGpImSNB94Ua1R5uSTI3sPGJ0VmBwRg1HNN5Aa6RmIPePRg0nUmQNCU1EW7FEqmDkZ2NAB0cQLidmiYbbXe6DqUHQS5rnAGXGGkxzMyf8LoRUpAw+5IOpygaWbEQBFhoAeq0sK6jUbVYxrW5NQcxLhJzEEmCQADDQRDmmZkCqI3I5FldhblaSzNYObIBOrczDr9+SWDrF1oAc352zE3sW5RMRteL6IriPBmMpu7N3ykMeMxPeF46G2h+ixMG9uc53ZMoN5s4G4F9LxEyL7QqoW4I4g/vggdmIkutmMWBEa+Ki7ENJBLHQZ7zzUMnYyJPO4G+myI4fhu0qgRINi8y61rAEeA03XV4b4ZplzcuUB+xs6AJIGxkR7hOhORw8Zgf1AGOZGvg4aKkUGugEaxBGs+O+sekjVdT8U8DFKp/LIgzGk2j1suer4eRaQRcA2Gadvr4ppDsEDQ0anfnpuQNbcvBWUMY8aMBkRIHrH91B1bWdYkzN7aTsdkO43t5+l1RITSru1IudLiB/dFEDLM7yBaL6CYvugX1p1Kj25FgYVbQci0u6aefgha1bqUqlXZDuMqhCcouSBTFSMTzdIFM9RXOU2XUzAOvLp5/RO339VQraSBF1KnLhtePOy3MFRYIzkkC8TAnYR45b9ViCo4a+ngr6buqpCZ0OHrirUaP03zOAuAAS+58DdahxwdmIENDQ0NFsjWmwBO4E6/NJ8sXAQ1h3Dm5dpBLTbw73ve3AOa5+VwLSZmC7loRN/RVtJczH43iTIh+Zti3ulvSTJtpbXdHfDfxKaJLT3mEfKbltoJBNtNo0PRaXxH8OtLRUFRpEfNsDs1xgHTouIrUXMcWuEEe9VPA1TR3v8VRe91QVWw8/8skhxAa3MCBOjh3ZnTzXMcUAzNLCcrhYixg2ymPTl9ULw3FNa8F7c0QNtJk6rdxmDb2LezgsLwWmLgET+PqrWUS3TNn4bdTbSa4xaCTobaho3cY+qv4j8QvY/tarCCcppAd7Llv3iLXOvSPPnqlZjHZnVoDJ7NgE8wS4aEkgHXbVY2P4q+pckyRl6RMmBtqUPAkrYXxLjlSrUNRx7x5aX6Geavpd5oiSdTY+s+RXP0qRcQBddlhGMp0wCQ4jWcpbt/TrppOyE2y3gxsZSzXbrYHryP49FnmRO5Op6omrW7xvrM+/eirqGRPkrSFYO+yqlTqBVFUwJpiVElInkixjSlCQCdCQDvG6rVpIj36qohcpbJtpyJ2CspVANvM7KEiLeZVjS0EHXm0yALcwUxBTKVr6+9ffNPg2kkcvD66dU2HxIJIi1zOnn0HRHYRhmRbb6X9fyriiJOjQqOmkGtGl5ubyYOsTc/RZWIq373zaSN43H7eKM7SCLkEaRe8k6ac/VW0KPayDDuTbXMkwDyuT5x1Wm0y3eQjhfEy4Bk2NoOh6EaH+6WM4CxzgQ2JN5gN5nSAD06goZvCmZC+TI07zhGkR0n91rYNzmtDXBxbPzS2LiTY3udgfTZ15Jcq4OL4jw51J5bIPIi+8DTdS4djqrO6x2uoNx4rq8fSbUEB38x0ARmLpmRtLTMW6FUcC4G5gNTR0xFxa14M2kjroo2ZwWtROOTlqz3PflcSSTB8dLaXV1LhzjJaC4A6xMcuVuq0sdwgteX6Nu4nlMiB67rVNXsmAMBLiJLdBe9ydLcvHxah5H6mMGVRoNpNIqamCLyNCZtblzQlfiFoHUQPoVLF1HVib23sSLaRzQdTC3tMHnron9Cl7kJzHorqpv5289PumcyIERzje6Y/t9lSQWVVFWVKooIGJKEk6dAMkkUgmAw8feygVJwiyiuQssp32/CWX0UAVKUxBFEQfRaNB+h5XMaDl+VnsbzRAqWjRaRM5ZC+073j02HLpI+iJwddxIDnbmY6mTEaSZWeapNzG9/HT/CIwteJjWxa4EywtMkwNZHW0LVMycbN1teKjS1s5hmDS7vZRqDBBvl+q0qWJpBkMkk2uNQOR8wPBc1VrCGunvMMxbTkOny+psizxNrmggAG2eN5BMxEA3A8Y5qjKUWw3EMGduV3eD7aENBEgGevrPmtR9c5Q12VpbMG+uYkQYmJ2nQi9lzLMVmLr3FrAEwLyGk6iZ15IzEYwgh2YOLgCDaXd3QgggwRr/u2lDFTK6j2uB3i4aZOb5iJ6TJg9OSbGUJghwykRl5EG5N7nz2CCqmIgn+nnvJgWidZ69QiHYo5Rl1IAbbQ6i/uwSNM9iDKVncgcvQ3Iv669fNZWLZBga3P41RuKcWNLWvJizbGZtPjvdZWIryfDQfa+6DSKI5tb9FWpEz4pmlBZW4KGVXQoEJ0FlSdIpkihFOEk4TEQc3RRKfMmXK0WMptEqEKymUkAaGxA6BSBGs9YSrVBmP3UahA8Peq1MiWa3kDz19hLtrHx9+U7KDZseV59Lfb1UmMBH5Gg8vGE1Y8D0jeJsfGZjp6oqi7KQdCLT+fHWyFY0TEmLAnrqfT8K6m4nQ7+M9DzPVUmTJBVV8mbB36vuNdPJRzc55u1gHewImdPOUO0zcajbWfXXfbaFWKrpnQxFiQSOvNNkpB5qzEQOkEf5mAT4BNnyixBcZuP0DQDXeboR2JvtbYzpv8AYapmyZny28/uiwojWfudLwLidpPjdBOPgrqgJJ9wqaszKlmqHCmD6qDFIG6tAxOKaFJxUJWiEQcE0KZUSpaGMnCZOEgKU6ZJclljgqVM3TAJgmgLw66TX6fZVt5qVJhJ/P7KxF1arEgdNOiWHD3fI0ny93V1LCNEbnrt+FoU8YWi1ovprysdBfYK1HyZufhA2H4PiXkgMIIsZ2Gt/oraXC64MtLQW3DhmB2vmDfd1YOJuuRedZOp++kp6HGHNHzEc7wdecKqiQ5T8AtTCVWzIBjkRHl75KpweP0HTYEjx3utWnxybOFrGQADa1jF7azqQrmcZZM5L7G0+JLRr+ypJeSd0l8pz7qjhqCPEfukMQD5/wB/fkuhdxUGdBPQTz5IR+NYbFod1MT9ktvuUp32MrtBFrqomTrErXxBoW/ljqRE6ckNUw1GLZgfFFFKSAXCEpClVw4GjjHUKksITplpoeUgq5TymmFEnJkySbYUIpJk6kCpJJJctFiTtsmUmlJAO1EU3xdDFSDrLRCaD21Nzp7KTqoiZ9+aFc/T3tZG4jgWLa0vfhsQ1gEl7qVUNA5lxbAHVNySJ2gr6m8yfcXVNR/L35q/A8Mr1p7GjVq5Yzdmx78szE5QY0PolX4ZXZUFJ9Gq2o6C2m5jw8zMQ0iTofRS5LgpIHFRJtRegYDEYqnQZSPCsQ5waMzuwf3qjGvFJ3yaAswsjfI/+pDYvjLaOKqVq+FxFPO9lSm19MtIDadam4d90wO1aRlIuwfLaJWpY6OLFbf3okKi77huNr0qIa7h2KLQ41e17F92mo+obuBEOYWsJ/pc65gLi8UXYnEvNGk4mo9zmUmNLnQZdAa0XgA6clUdSxbQcv5qWe6njeH16OUVqNSlM5e0Y5kxrGYCdfqjKHAMY4BzcJiHAwQRRqkEbQQ24Vqa5sTQCX81B7kTjuF4ikAatCtSBOtSm9gJ5S4C6DIWsXfAqIuCYKQCUJ0AwCeE6cBaKKFZAhMrITZVLh4CyhJJJcqRoJJJJS0BIaJgknKaAm/T1X0x8V13VuG1qNMZnvohjWjckAAL5swtcMe15a14aQcjhLXReCNwvdcXx8U6LqrgYaA4gcrTHkuLrU3KFHd0XTrVU2+wXwuthuB8OMw5wu86OrViLNHTYcmgnmue/wBIsY7EYnGcRxBD6zi1jT/QCCXBvIQGNHQdVR8c4H+OwzXUzmczv04NntcBIjQkgAg9OpWd/pNi8tGs3ftGmPFkD/tK59qejKXzPk6H0ldRHTaw1j3Ot+Kf9Xxg8U/DjCmqGZZf2uSczGvMN7M6Zo12R/8AqqyniuGVpAzUwKtN27S0jNHiwuHmvG/jvB1n46u4U3uDi0ghriD/AC2ixA8vJel/FeOjAVwf/JLfMtyj6lKWlCHpyhyZ6fTuT1E/lv7noHCeJAUKX/ts/wCwLy+nwAYP4hw9akIoVjWe0DRjzQqZ2eEmR0dGyJ+IOK1KfDy9hyuYyi5pnQtdTI8rIvhPHmYujSrwJBmN6dTKWuA8nOHUOWcIuCclw7TOj/ijKah3pP8AQM+MKLMVxThoqNDmUxXqOadDkDC0EbjPlsjfjf8A1H/gHUWtodu6rmMdpkjKWgfodJJP0XNY/iMcQwpJ1p12jx7h+zSsz4v4s+li8LiBSFXI2o2IJiS24P6Xcj4q9PSU3GMlap4/cjW6RQhOXhpfx/Z2Vf42weNwD21x2Rq03tdReHOLD3gO8GjcBwNttF8/QYXt2B+IjWodo5rqch3ddqACRPnErxFhsvR+HxUd6SrPmzi67R9NQad2iKaFY8KC9Q4BQpBRUsyYMlCYhNmSlAqBoSUoTELjNRkydMkxiU2qCdpUoCx7YHqPTX8L0jiWMxNXCvYMG4B1PXtKcgRrlmfLVecZvfVejf8AFcMe++tRP8qM4JbX0+W2vhz2WHULh1Z6Xw5qppyq17e/myn4axuLw7XYephzU7MB4IqUxlY4mBJMG4MDXVU4HEYinjq76GGjutNegalOxd3g5rtJ331dzsbxDjOGqfyxWa3IaVUOBGWpldJYTz7unUck9PH4WnWxNf8Aiqbu2axoYDcQ0Nv7suZ3l7efr7HdKKW2K1MRfNrHP6+F7hrfiyp/Efw38G7tv6O1p/05/m+X5b6rmPiT4lq42MJTo9nLw1wLgS5wMBs2aBP2C1O0wzeIjGfxdEtdbKHXH8gtknSJb9QufYylQx9Gp29Ko11TO5zScrAXH5jzEz5J6cIJ2lmr78mHUauq1tc8OVPjjFHVcTqYqvhX4duDcDAp5jWpRLCM0Cb3aVzPCMVieG96rSmlVkZc7ZzMMSIJg7dV1VTi+GeWzWwzmtqPd3z32S8kGm4HXefqsj4mdh8VSphmKpNyOqHvOJJzOtrf1U6b+VrD55NNWP5kZ/iSxlf7uyrjeNxNY4bF0qBptYe6XPYc3aOa1siQQDp/8ltf+IK4eabsGQ8MzkCqyMswSDob7aoMccwmd1APhrabGtcS3sf5d2ZTrmk//Xom/wDEdB76wc5oygik/ZzHsaXNnmHD7J7bVOPH1OiEoxbktXL545Sz2xwqJ8e4jizRe1uGyAtIc7tGOIbHehrTMxK89Ll2uIx9EYipiO2Y4Gl2YYDLiZB0HhHmuIheh0qpUkeT8SkpzT3Xyu32S5JEplJRhdtM8wjKmownTSaAcJwVFO1MTIkKBVqgQuQqyCYhSKSVFEFIBPCQQkFiVtJmYtExJAnlJAVaUptCNatwkNIBqiJcJiwytLp1vy93sfwEf+czxi0S7rybPryWISoqGx0bdPgYJA7YC5BlsRBAv3uqqq8IgPPaDuiYjXuF8C/SPUq2hwigcMKzsQwP/l/y81MvGatUZU7mbMcrGU3bT2msBa7PhbBZi08QpwGFwd/LguzkBs57W9wQhZADPCaGQutP8OKg7/68jiSR/wCoNEaX5psdwqi0ktEt7Ol+skhz6xbOumRpN9yOaM4l8M4KnTe5nEKdRzWPeGg0+8QRkb805iJsAfK08eCnaeBUzeqcJpknKCRkrZe9q9lVwaP+gNMb6qriOaiKIpVXAOpNc4NeYDzOcQDbayymKQWi00+Q3NcBTMbWiO1qRyzO9NVQWqTUoutYxS4Icm+WRUSnITLQBoTEKzKmLUDsgnaEoTgpAJRcmSXKBFMnSQUIK/8AiXQBIgCBYfsnSTQC/iX8x/0t/ZRbi3tEAiB/tadddQnSQ+ARU+u5wgkQL6NHTYI+lxisGtbmbDQA3uMsIjWOSSSmMU1kGy6nx2voSx1yYNNliSTsBzPqmp8aqiQBTgtDPl/S2YGv+431TpLRQj4FbFS+IMQycjmtkhxGRjrgAA98GIDRpayZnxFiWyWvaJDW/wDLpRDZygDLG6SSThHwNNmbTdFregP3Us/h6D9kklrEkspVI2HmAVfRxTmuDm5QRoYCZJUSU1Xlzi43JJJKrSSTKJhPCSSBESFEtSSSGf/Z",
    name: "Kong skull island",
    desc:
      "Kong: Skull Island est un film fantastique américain réalisé par Jordan Vogt-Roberts, sorti en 2017. Il s'agit d'une nouvelle apparition du personnage de King Kong, créé pour le film du même nom sorti en 1933. Celui-ci s'inscrit dans un univers commun (MonsterVerse) développé par Legendary Pictures et débuté avec Godzilla sorti en 2014."
  },
  {
    src:
      "https://images-na.ssl-images-amazon.com/images/I/91Eq-wPJt-L._SY445_.jpg",
    name: "The perge",
    desc:
      "En France, en Belgique et au Canada la série est diffusée sur Prime Video depuis le 5 septembre 2018 en version originale et depuis le 23 novembre 2018 en version française2. Elle reste inédite dans tous les autres pays francophones."
  }
];
export default class Example extends React.Component {
  state = {
    imgmovie:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT050lxeW-fgwehevmyqF_F_5oZ9PFyu1Vo9WQ1Cl4Ns1ZBKUo-Vg",
    name: "le calme",
    description: "le calme",
    activeIndex: 0
  };
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
    this.state = {
      imgmovie:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT050lxeW-fgwehevmyqF_F_5oZ9PFyu1Vo9WQ1Cl4Ns1ZBKUo-Vg",
      name: "le calme",
      description: "le calme",
      activeIndex: 0
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  // this.state = ;

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

  ChangeState(item) {}
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
    const { activeIndex } = this.state;

    const slides = items.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img
            height={400}
            width={400}
            src={item.src}
            alt={item.altText}
            onClick={() => {
              this.setState({
                imgmovie: item.src,
                name: item.name,
                description: item.desc
              });
              console.log(this.state);
            }}
          />
          <CarouselCaption
            captionText={item.caption}
            captionHeader={item.caption}
          />
        </CarouselItem>
      );
    });
    console.log(this.state);

    return (
      <div
        style={{
          backgroundImage:
            'url("https://img1.picmix.com/output/stamp/normal/3/1/7/1/371713_b5094.gif")'
        }}
      >
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

        <div style={{ marginTop: "150px" }}>
          <Carousel
            className="col-auto-12"
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

          {slides}
        </div>
        <Card>
          <Card.Body>
            <Card.Title className="text-center bg-info">
              <h1> Les Films disponibles </h1>
            </Card.Title>
            <Card.Text>
              <div className="col-sm-12">
                <h3 className="text-center">name:</h3>{" "}
                <p className="text-center" style={{ fontSize: "50px" }}>
                  {" "}
                  "Fast and furious"
                </p>
                ,<h3 className="text-center">desc</h3>: "Fast and Furious ou
                Rapides et dangereux au Québec est une série de films américains
                d'action dont le premier est sorti en 2001. Elle comprend neuf
                longs métrages (sortis) ainsi que deux courts métrages. Le
                premier film est basé sur un article intitulé Racer X, écrit par
                le journaliste Ken Li et publié dans Vibe, parlant de
                courses-poursuites et de différents vols dans les rues de
                New-York (le film se déroule cependant à Los Angeles)"
              </div>

              <div className="col-sm-12">
                <h3 className="text-center">name:</h3>{" "}
                <p className="text-center" style={{ fontSize: "50px" }}>
                  "The conjuring"
                </p>
                ,<h3 className="text-center">desc</h3>
                "Conjuring : Les Dossiers Warren ou La Conjuration au Québec
                (The Conjuring) est un film d'horreur américain réalisé par
                James Wan, sorti en 2013. Il s'agit du premier film de l'univers
                cinématographique Conjuring et de la série principale"
              </div>

              <div className="col-sm-12">
                <h3 className="text-center">name:</h3>
                <p className="text-center" style={{ fontSize: "50px" }}>
                  "Gladiator"
                </p>
                <h3 className="text-center">desc</h3>
                "Gladiator revisite le genre du péplum, dont les derniers films
                majeurs avaient été réalisés dans les années 1960. Le film ne se
                fonde pas sur des événements réels mais reprend les noms et
                certains traits de personnalité de l'empereur Marc Aurèle et de
                ses enfants Commode et Lucilla. L'intrigue raconte la chute du
                général romain Maximus Decimus (Russell Crowe)"
              </div>

              <div className="col-sm-12">
                <h3 className="text-center">name:</h3>{" "}
                <p className="text-center" style={{ fontSize: "50px" }}>
                  "The perge"
                </p>
                ,<h3 className="text-center">desc</h3>"En France, en Belgique et
                au Canada la série est diffusée sur Prime Video depuis le 5
                septembre 2018 en version originale et depuis le 23 novembre
                2018 en version française2. Elle reste inédite dans tous les
                autres pays francophones."
              </div>

              <div className="col-sm-12">
                <h3 className="text-center">name:</h3>{" "}
                <p className="text-center" style={{ fontSize: "50px" }}>
                  "The King"
                </p>
                ,<h3 className="text-center">desc</h3>The King est un film
                américano-australien de David Michôd annoncé pour l'automne 2019
                exclusivement sur Netflix. Timothée Chalamet y incarne Henri V
                aux côtés de Joel Edgerton, Sean Harris, Lily-Rose Depp, et
                Robert Pattinson.
              </div>
            </Card.Text>
            <Button variant="info">Réservation</Button>
          </Card.Body>
        </Card>
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
    );
  }
}
