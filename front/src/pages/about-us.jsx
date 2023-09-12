import React from "react";
import IA from "../../public/IA.jpg";

const corporateColors = {
  background: "bg-gray-200",
  button: "bg-gray-700 text-white hover:bg-gray-600",
};

const Aboutus = () => {
  return (
    <div
      className={`min-h-screen ${corporateColors.background} flex flex-col items-center justify-center px-14`}
    >
      <h1 className="text-4xl font-bold text-center mb-8 mt-10">
        Acerca de Nosotros
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center mb-8">
        <div className="w-64 md:w-96">
          <img src={IA} className="rounded-full w-full h-auto shadow-lg" />
        </div>
        <p className="text-gray-700 text-lg ml-0 md:ml-8">
          Nuestro objetivo principal es aprovechar el poder del aprendizaje
          automático para mejorar la precisión de las predicciones de ventas
          unitarias. Nos apasiona la ciencia de datos y estamos comprometidos a
          aplicar nuestras habilidades para abordar desafíos del mundo real.
        </p>
      </div>
      <p className="text-gray-700 text-lg mb-4">
        Nuestra misión es construir un modelo avanzado que sea capaz de predecir
        con gran precisión las ventas de miles de artículos vendidos en diversas
        tiendas. Utilizaremos un conjunto de datos rico y diverso para entrenar
        nuestro modelo y ajustarlo para obtener los mejores resultados posibles.
      </p>
      <p className="text-gray-700 text-lg mb-4">
        Creemos en la importancia de la colaboración y el aprendizaje continuo.
        Nuestro equipo está compuesto por expertos en ciencia de datos y
        aprendizaje automático, y estamos emocionados de embarcarnos en este
        viaje para mejorar las estrategias de ventas y ayudar a las empresas a
        tomar decisiones más informadas.
      </p>
      <p className="text-gray-700 text-lg mb-4">
        Gracias por unirte a nosotros en este emocionante viaje hacia la mejora
        de las predicciones de ventas unitarias. ¡Esperamos lograr resultados
        impactantes y compartir nuestros hallazgos con la comunidad!
      </p>
      <strong className="text-gray-700 text-lg mb-4">
        El equipo esta conformado por:
      </strong>

      <div className="flex">

        <div className="w-1/4 p-2 ">
          <div className="flex flex-col md:flex-row  mb-8">
            <strong className="text-gray-700 text-lg ml-0 md:ml-8">
              Flavio Ruvalcaba Leija
            </strong>
          </div>
        </div>

		<div className="w-1/4 p-2 ">
          <div className="flex flex-col md:flex-row  mb-8">
            <strong className="text-gray-700 text-lg ml-0 md:ml-8">
              Jaime Lopez Hernandez
            </strong>
          </div>
        </div>

		<div className="w-1/4 p-2 ">
          <div className="flex flex-col md:flex-row  mb-8">
            <strong className="text-gray-700 text-lg ml-0 md:ml-8">
              Cristian Espinoza Diaz
            </strong>
          </div>
        </div>

		<div className="w-1/4 p-2 ">
          <div className="flex flex-col md:flex-row  mb-8">
            <strong className="text-gray-700 text-lg ml-0 md:ml-8">
              Oscar Nieto Espitia
            </strong>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Aboutus;
