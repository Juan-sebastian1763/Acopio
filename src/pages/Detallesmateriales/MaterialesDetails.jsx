import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Button,
  CardFooter,
} from "@nextui-org/react";
import { Link, useParams } from "react-router-dom";
import { MaterialesData } from "../../api/dataMateriales";
import "../../assets/css/materiales/materialesDetails.css";

function MaterialesDetails() {
  const { id } = useParams();
  const [material, setMaterial] = useState(null);

  useEffect(() => {
    // Convertir los IDs a String para comparar
    const materialEncontrado = MaterialesData.find(
      (material) => String(material.id) === String(id)
    );

    setMaterial(materialEncontrado);
  }, [id]);

  if (!material) {
    return <div>Material no encontrado (ID: {id})</div>;
  }

  return (
    <>
      <div className="cards-container">
        <Card className="container-card">
          <CardHeader className="pb-0 x-4 flex-col items-start card-header">
            <h1 className="uppercase font-bold">{material.nombre}</h1>
          </CardHeader>
          <CardBody className="overflow-visible items-start">
            <Image
              isZoomed
              alt="Card background"
              className="object-cover rounded-xl "
              src={material.img}
              width={450}
              height={380}
            />
          </CardBody>
          <CardFooter>
            <Link to={`/materiales/${id}/adquirir`}>
              <Button variant="shadow" className=" text-color" size="lg">
                Adquirir
              </Button>
            </Link>
          </CardFooter>
        </Card>
        <Card className="card-description">
          <CardHeader className="pb-0 x-4 flex-col items-start card-description">
            <h2 className="uppercase font-bold">Acerca de este Material:</h2>
          </CardHeader>
          <CardBody className="overflow-visible py-5 items-start">
            <p className="descripcion-material">
              Descripción: {material.descripcion}
            </p>
            <p className="cantidad-disponible">
              Cantidad Disponible: {material.cantidad_disponible}
            </p>
            <p>
              Estado: <span className="estado"> {material.estado}</span>
            </p>
            <p className="">Tipo de material: {material.tipo}</p>
            <p className="">Color: {material.color}</p>
          </CardBody>
        </Card>
      </div>
    </>
  );
}

export default MaterialesDetails;
