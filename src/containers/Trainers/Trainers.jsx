import React from "react";
import sit from "../../assets/Buenos_modales/sit3.png";
import quieto from "../../assets/Buenos_modales/adiestrador.png";
import bySide from "../../assets/Buenos_modales/bySide.png";

const Trainers = () => {
  return (
    <>
      <header className="mainAbout">
        <h1 className="aboutTitle">
          <span className="spanTitle">Nuestro equipo</span>
        </h1>
        <h2 className="vinculo">
          Inspirados por lo que nos apasiona y llena, siempre damos el 200%
        </h2>
        <span className="spanTitle">Dog &nbsp; Training</span>
      </header>
      <main className="containerAbout">
        <section className="card cardAbout" data-aos="zoom-in">
          <img
            className="fondo"
            Style="height:100%; width:100%;"
            src={sit}
            alt="institutoPatitas"
          />
          <div>
            <h3 className="tlf text-center">Alejandro Urbina</h3>
            <p id="parrAbout">
              Programador y director de Dog training. Alex es un joven
              apasionado por los perros, por el mundo tecnológico y el
              desarrollo de aplicaciones web. Sus dos pasiones le inspiraron
              para desarrollar esta plataforma web sobre adiestramiendo canino y
              brindar a los amantes caninos un lugar donde compartir ideas,
              dudas, y por que no, hacer quedadas con los usuarios más cercanos
              de su zona.
            </p>
          </div>
        </section>

        <section className="card cardAbout" data-aos="zoom-out">
          <img
            className="imgAbout"
            Style="height:100%;"
            src={quieto}
            alt="trainers"
          />
          <div>
            <h3 className="tlf text-center">Juan Carlos</h3>
            <p id="parrAbout">
              Juan es un joven emprendedor amante de los perros, lo que le llevo
              a ser un experto en adiestramiento canino. Cuenta con más de 10
              años de experiencia, formación profesional y una larga lista de
              resultados positivos en la mejora de conducta de los perros. Desde
              los principios básicos de cómo educar al perro, adiestramiento
              para funciones especiales, adiestramiento deportivo, hasta
              asistencia y terapia. Puedes contactar con él para consultarle
              cualquier duda que te pueda surgir.
            </p>
          </div>
        </section>

        <section className="card cardAbout" data-aos="flip-up">
          <img
            className="imgAbout"
            Style="height:100%;"
            src={bySide}
            alt="trainers"
          />
          <div>
            <h3 className="tlf text-center">Alika Masha</h3>
            <p id="parrAbout">
              Alika es también una joven emprendedora y amante de los animales,
              cuenta con una extensa y experimentada carrera en adiestramiento
              canino. Esta especializada en adiestramiento condicionante,
              adiestramiento mixto, y técnicas de adiestramiento basadas en la
              etología. Si quieres contactar con ella no dudes en escribirle.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Trainers;
