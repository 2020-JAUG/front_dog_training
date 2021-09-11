import React from "react";
import home from "../../assets/Buenos_modales/mascotas.png";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

const Home = () => {
  const history = useHistory();

  const goTo = (path) => {
    history.push(path);
  };

  return (
    <>
      <div
        className="card text-center"
        id="homeContainer"
        Style="max-width: auto; min-width:auto; height: auto;"
      >
        <div className="row g-0">
          <div className="col-md-4">
            <img
              className="fondo img-fluid rounded-start position-relative mt-lg-5"
              src={home}
              alt="home"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body position-relative mt-lg-5">
              <h1 className="card-title" id="h1Home">
                D O G &nbsp; T R A I N I N G
              </h1>
              <p className="card-text" id="parrHome">
                Somos una comunidad dedicada al cuidado de nuestras mascotas,
                tenemos más de 10 años de experiencia en el adiestramiento
                canino, apoyando a la comunidad durante el crecimiento de sus
                cachorros. Actualmente somos alrededor de mil usuarios
                registrados en nuestra aplicación, en la cual puedes encontrar
                apoyo por parte de los usuarios o entrenadores especilizados en
                adiestramiento canino.
              </p>
              <div
                id="buttonHome"
                className="d-sm-inline-flex"
                onClick={() => goTo("/contact")}
              >
                Escríbenos
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-transparent" id="homeContainer" Style="max-width: auto; min-width:auto; height: auto;">
        <div className="row row-cols-md-6 justify-content-evenly">
          <div className="card text-center" Style="width: 16.8em; height:27.5em;">
            <div className="card-body">
              <h5 className="card-title text-center" id="home-parr">
                ADIESTRADORES
              </h5>
              <p className="card-text text-center" id="parrHome">
                Contacta libremente con cualquiera de nuestros trainers sobre cualquier consulta.
              </p>
              <div
                className="offset-1 mt-5 position-relative"
                id="buttonOption"
                onClick={() => goTo("/trainers")}
              ></div>
            </div>
          </div>
          <div className="option text-center">
            <div className="card-body" id="carta">
              <div className="card" Style="width: 16.8em; height:26.5em;">
                <div className="card-body">
                  <h5 className="card-title text-center" id="home-parr">
                    CONTÁCTANOS
                  </h5>
                  <p className="card-text text-center" id="parrHome">
                    Estaremos encantados de aclararte las dudas respecto a
                    nuestra comunidad.
                  </p>
                  <div
                    className="offset-1 mt-5 position-relative"
                    id="buttonOption"
                    onClick={() => goTo("/contact")}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="option text-center">
            <div className="card-body" id="carta">
              <div className="card" Style="width: 16.8em; height:26.5em;">
                <div className="card-body">
                  <h5 className="card-title text-center" id="home-parr">
                    SOBRE NOSOTROS
                  </h5>
                  <p className="card-text text-center" id="parrHome">
                    Conócenos más a fondo y descubre como nace la idea de crear esta comunidad.
                  </p>
                  <div
                    className="offset-1 mt-5 position-relative"
                    id="buttonOption"
                    onClick={() => goTo("/aboutus")}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default connect((state) => ({
  credentials: state.credentials,
}))(Home);
