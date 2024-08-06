import React from "react";
import { Button, Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { MaterialesData } from "../api/dataMateriales";
import { NavLink } from "react-router-dom";
import "../assets/css/Materiales.css";

function Materiales() {
  return (
    <>
      <div className="gap-5 grid grid-cols-2 sm:grid-cols-5 container-materiales">
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
            <CardFooter className="text-lg justify-between">
              <b className="uppercase">
                <span className="nombre-material "></span> {item.nombre}
              </b>
              <NavLink to={`/materiales/${item.id}`}>
                <Button variant="shadow" className="button-ver">
                  Ver Material
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
