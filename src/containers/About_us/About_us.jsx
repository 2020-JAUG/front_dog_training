import React from "react";
import AOS from "aos";
import { useHistory } from "react-router-dom";
import pataText from "../../assets/Buenos_modales/pataText.png";
import adiestramiento from "../../assets/Buenos_modales/adiestramiento.png";
import instructor from "../../assets/Buenos_modales/instructor.jpeg";
import adies from "../../assets/Buenos_modales/adies.png";

AOS.init();

const About_us = () => {
  const history = useHistory();

  const goTo = (path) => {
    history.push(path);
  };
  return (
    <>
      <header className="mainAbout">
        <h1 className="aboutTitle">
          <span className="spanTitle">Nuestra Misión</span>
        </h1>
        <h2 className="vinculo">
          Crear un vinculo más fuerte entre tú y tu mejor amigo
        </h2>
        <span className="spanTitle">Sobre Nosotros</span>
      </header>
      <main className="containerAbout">
        <section className="card cardAbout" data-aos="flip-right">
          <img
            className="fondo"
            Style="height:100%; width:80%;"
            src={pataText}
            alt="institutoPatitas"
          />
          <div>
            <h3 className="tlf text-center">Adiestramiento Canino</h3>
            <p id="parrAbout">
              Somos un equipo de jóvenes entusiasmados y apasionados por el
              mundo de la programación y nuestros perros, de ahí nace la fusión
              para crear esta pequeña comunidad y conseguir unir a más personas
              con el interés de saber educar a tu perro.
            </p>
          </div>
        </section>

        <section className="card cardAbout" data-aos="fade-left">
          <img
            className="imgAbout"
            Style="height:100%;"
            src={adies}
            alt="trainers"
          />
          <div>
            <h3 className="tlf text-center">Objetivos</h3>
            <p id="parrAbout">
              Dog training es una plataforma creada con el cariño que le tenemos
              a nuestros pulgosos, en la cual puedes compartir y aprender
              conceptos básicos sobre la educación de tu mascota.
            </p>
            <div className="sendButton" onClick={() => goTo("/contact")}>
              Contact
            </div>
          </div>
        </section>

        <section className="card cardAbout" data-aos="fade-right">
          <img className="imgAbout" src={instructor} alt="trainers" />
          <div>
            <h3 className="tlf text-center">Parte del equipo</h3>
            <p id="parrAbout">
              Conoce a una parte de nuestro equipo e interactua con ellos sobre
              cualquier duda que te pueda surguir, conóceles y comparte tu
              experencia con el equipo.
            </p>
            <div className="sendButton" onClick={() => goTo("/trainers")}>
              Contact
            </div>
          </div>
        </section>

        <section className="card cardAbout" data-aos="fade-left">
          <img
            className="imgAbout"
            Style="height:100%;"
            src={adiestramiento}
            alt="adiestramiento"
          />
          <div>
            <h3 className="tlf text-center">Entrenamiento</h3>
            <p id="parrAbout">
              Nuestros programas para el entrenamiento y educación de tu
              mascota, son desarrollados por profesionales y amantes del mundo
              canino. Los cuales cuentan con más de 10 años de experiencia con
              el adiestramiento canino.
            </p>
            <div className="sendButton" onClick={() => goTo("/contact")}>
              Contact
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About_us;
