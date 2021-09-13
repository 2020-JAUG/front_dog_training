import React from "react";
import sit from "../../assets/Buenos_modales/sit3.png";
import quieto from "../../assets/Buenos_modales/quieto.png";
import bySide from "../../assets/Buenos_modales/bySide.png";
import repeat from "../../assets/Buenos_modales/repeat.png";

const ObedienciaBasica = () => {
  return (
    <>
      <header className="mainAbout">
        <h1 className="aboutTitle">
          <span className="spanTitle">Primeros pasos</span>
        </h1>
        <h2 className="vinculo">Órdenes básicas de obediencia</h2>
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
            <h3 className="tlf text-center">Sentarse</h3>
            <p id="parrAbout">
              Para enseñar a tu perro a sentarse cuando se lo pidas, puedes usar
              como señuelo un premio y sostenerlo encima del perro. Cuando
              consigas que se siente dando la orden de "Sit", acarícialo y dale
              su premio. La repetición es básica para que tu perro lo memorice.
              Una costumbre que puedes usar, es pedirle a tu perro que se siente
              antes de cada comida, o antes de salir a pasear.
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
            <h3 className="tlf text-center">Quedarse quieto</h3>
            <p id="parrAbout">
              Para enseñar a tu perro a quedarse quieto, tanto en casa como
              cuando estas paseando con él posicionate delante de tu perro con
              la palma extendida dando la orden de "Quieto", una vez consigas
              que se quede quieto, aléjate de él y cuando le llames para que
              acuda a ti, dale su recompensa y una caricia. Asi lo memoriza
              como truco y lo volverá a repetir.
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
            <h3 className="tlf text-center">Caminar a tu lado</h3>
            <p id="parrAbout">
              Cuando nuestros perros son grandes o pequeños pero juguetones,
              suelen tirar de la correa e ir más rápido que nosotros. Para
              enseñarles que deben ir tranquilos, con calma y centrados durante
              el camino debes de estar atento a si el perro se adelanta o
              atrasa para darle un tirón de la correa, asi volverá a caminar a
              tu lado. Mantén la corre holgada, esto le trasmitirá serenidad a
              tu perro. No olvides premiarlo por seguir caminando a tu lado.
            </p>
          </div>
        </section>

        <section className="card cardAbout" data-aos="flip-right">
          <img
            className="imgAbout"
            Style="height:100%;"
            src={repeat}
            alt="adiestramiento"
          />
          <div>
            <h3 className="tlf text-center">Consejos</h3>
            <p id="parrAbout">
              Recuerda que este es un entrenamiento positivo, ¡basado en las
              recompensas! De esta manera tu perro estará motivado para hacer
              las cosas que le pides. A cada perro le gusta un tipo de
              recompensa diferente, puede ser un glotón o, un mimoso. Intenta
              identificar lo que capte su atención. ¡así consegueriás un mejor
              resultado!
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default ObedienciaBasica;
