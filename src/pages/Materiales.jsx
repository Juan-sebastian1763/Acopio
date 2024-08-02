import React from "react";
import { Button,  Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import "../assets/css/Materiales.css";
import { MaterialesData } from "../api/dataMateriales";
import { NavLink } from "react-router-dom";

function Materiales() {
  return (
    <>
      <h4> </h4>
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-2">
        {MaterialesData.map((item) => (
          <Card
            shadow="lg"
            key={item.id}
            isPressable
            onPress={() => console.log("item pressed")}
          >
            <CardBody className="overflow-visible p-0">
              <Image
                isZoomed
                shadow="sm"
                radius="lg"
                width="100%"
                alt={item.nombre}
                className="w-full object-cover h-[240px]"
                src={item.img}
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b>
                <span className="nombre-material">Nombre del material</span>{" "}
                {item.nombre}
              </b>
              <b>Cantidad: {item.cantidad_disponible}</b>
              <b>Color: {item.color}</b>
              <p className="text-default-500">{item.price}</p>
              <NavLink to={`/Materiales/${item.id}`}>
                <Button color="primary" variant="bordered">
                  Ver Información...
                </Button>
              </NavLink>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}

export default Materiales;
