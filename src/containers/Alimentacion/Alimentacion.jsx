import React from "react";
import meet from "../../assets/Buenos_modales/meet.png";
import nutricion from "../../assets/Buenos_modales/nutricion.png";
import braco from "../../assets/Buenos_modales/braco.png";
import food from "../../assets/Buenos_modales/food.jpeg";

const Alimentacion = () => {
  return (
    <>
      <header className="mainAbout">
        <h1 className="aboutTitle">
          <span className="span-title-salud">Nutrición clave</span>
        </h1>
        <h2 className="vinculo">
          La alimentación tiene un papel clave en la salud de tu perro
        </h2>
        <span className="span-title-salud-R">Alimentación a medida</span>
      </header>
      <main className="containerAbout">
        <section
          className="card cardAbout"
          data-aos="fade-down"
          data-aos-duration="500"
          data-aos-easing="linear"
        >
          <img
            className="fondo"
            Style="height:100%; width:100%;"
            src={meet}
            alt="institutoPatitas"
          />
          <div>
            <h3 className="tlf text-center">Apóyate en profesionales</h3>
            <p id="parrAbout">
              Para favorecer su salud a través de una nutrición pensada
              específicamente para él, visita a tu veterinario regularmente,
              para prevenir problemas de salud durante los primeros meses de
              vida. La salud de tu perro depende en gran medida a un desarrollo
              de crecimiento sin problemas.
            </p>
          </div>
        </section>

        <section
          className="card cardAbout"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="800"
        >
          <img
            className="imgAbout"
            Style="height:100%;"
            src={nutricion}
            alt="trainers"
          />
          <div>
            <h3 className="tlf text-center">Nutrición a medida</h3>
            <p id="parrAbout">
              Proporciona a tu perro los nutrientes indispensables elegidos
              rigurosamente y en cantidades específicas. Esto le ayudara a una
              digestión y salud óptima. No le des comida de personas, si
              comparamos la fisiología canina con la nuestra podemos observar
              que sus mandíbulas han sido creadas para cortar y no para
              masticar.
            </p>
          </div>
        </section>

        <section
          className="card cardAbout"
          data-aos="fade-right"
          data-aos-offset="400"
          data-aos-easing="ease-in-sine"
        >
          <img
            className="imgAbout"
            Style="height:100%;"
            src={braco}
            alt="trainers"
          />
          <div>
            <h3 className="tlf text-center">Conoce a tu perro</h3>
            <p id="parrAbout">
              Tu pulgoso posee: 42 dientes, 12 colmillos y 26 muelas carniceras.
              Pocas papilas gustativas, pocas enzimas digestivas en la saliva
              canina: los alimentos no son predigeridos. El estómago tiene una
              gran capacidad de hasta 8 litros en el caso de perros grandes. La
              acidez es mucho más elevada que la de un humano, esto le facilita
              la digestión y le ayuda a combatir contra las bacterias. El intestino grueso
              es corto, tienen menos flora intestinal y es menos diversa que la
              de los humanos. Por eso, una dieta variada no es adecuada para
              ellos. La digestión es rápida entre 20 y 30 minutos y en la
              materia fecal expulsan grandes cantidades de alimentos no
              digeridos.
            </p>
          </div>
        </section>

        <section
          className="card cardAbout"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <img
            className="imgAbout"
            Style="height:100%;"
            src={food}
            alt="adiestramiento"
          />
          <div>
            <h3 className="tlf text-center">¿Qué alimentos debo escoger?</h3>
            <p id="parrAbout">
              Adquiere productos de máxima calidad en tiendas especializadas o
              en tu clínica veterinaria, ya que te pueden garantizar una
              alimentación equilibrada con todos los nutrientes necesarios. Si
              tu perro recibe un alimento casero es complicado valorar si recibe
              todos los nutrientes que necesita. La alta variedad de productos
              adaptados a las características de cada perro desde: edad, tamaño,
              raza o sensibilidades, se conoce como una nutrición a medida.
              Escoge un alimento seco o húmedo, en función de las preferencias de
              tu perro.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Alimentacion;
