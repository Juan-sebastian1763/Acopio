import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MaterialesData } from "../../api/dataMateriales";
import { Button, CircularProgress, DateInput } from "@nextui-org/react";
import { CalendarDate, parseDate } from "@internationalized/date";
import { CalendarIcon } from "./CalendarIcon";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
} from "@nextui-org/react";

import "../../assets/css/materiales/adquisicionMaterial.css";

function AdquisicionMateriales() {
  const { id } = useParams();
  const [material, setMaterial] = useState();

  useEffect(() => {
    const materialEncontrado = MaterialesData.find(
      (material) => String(material.id) === String(id)
    );

    setMaterial(materialEncontrado);
  }, [id]);

  if (!material)
    return (
      <div className="progress-fall">
        <CircularProgress color="success" aria-label="Loading..." />
      </div>
    );

  return (
    <>
      <div className="flex justify-center items-center h-screen cards-container">
        <Card className="card">
          <CardHeader className="flex-col">
            <p className="uppercase font-bold name-material">
              {material.nombre}
            </p>
            <h4 className="text-large">Estado: {material.estado}</h4>
          </CardHeader>
          <CardBody className="overflow-visible ">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={material.img}
              height={490}
              width={450}
            />
            <p className="cantidad-disponible">
              <span className="properties">Cantidad Disponible:</span>{" "}
              {material.cantidad_disponible}
            </p>
            <p>
              <span className="properties"> Estado:</span> {material.estado}
            </p>
            <p>
              <span className="properties">Tipo de material: </span>
              {material.tipo}
            </p>
            <p>
              <span className="properties">Color:</span> {material.color}
            </p>
          </CardBody>
        </Card>
        <Card className=" card">
          <CardHeader className=" flex-col items-center">
            <p className="uppercase font-bold name-material">
              Formulario de peticiones
            </p>
            
            <div className="max-w-4xl mx-auto p-6">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre de usuario:
                    </label>
                    <input
                      type="text"
                      id="username1"
                      name="username1"
                      className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
                      placeholder="Ingrese su nombre de usuario"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Departamento :
                    </label>
                    <input
                      type="text"
                      id="username2"
                      name="username2"
                      className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
                      placeholder="Ingrese su nombre de usuario"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="username3"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Entrega aproximada del material
                    </label>
                    <DateInput
                      defaultValue={parseDate("2024-04-04")}
                      placeholderValue={new CalendarDate(1995, 11, 6)}
                      labelPlacement="outside"
                      startContent={
                        <CalendarIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                      }
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="username3"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Devulta aproximada del material
                    </label>
                    <DateInput
                      defaultValue={parseDate("2024-04-04")}
                      placeholderValue={new CalendarDate(1995, 11, 6)}
                      labelPlacement="outside"
                      startContent={
                        <CalendarIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                      }
                    />
                  </div>
                </div>
              </form>
            </div>
          </CardHeader>
          <CardBody className="overflow-visible "></CardBody>
          <CardFooter>
            <Link to={""} className="">
              <Button className="request-button" variant="shadow" size="lg">
                Realizar peticion
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default AdquisicionMateriales;
