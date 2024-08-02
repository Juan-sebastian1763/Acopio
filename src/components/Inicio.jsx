import React from "react";
import { Card, CardBody, Image, Button } from "@nextui-org/react";
export default function Inicio() {
  return (
    <>
      <Card isFooterBlurred radius="lg" className="border-none">
        <Image
          alt="Woman listing to music"
          className="object-cover imagen-inicio"
          height={650}
          src="../../src/assets/img/imagen.inicio.png"
          width={650}
        />
        <CardBody>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            excepturi laborum ipsam hic similique pariatur sint, voluptas
            repellendus assumenda ab nesciunt? Dignissimos illum assumenda
            maiores molestias atque. Nemo itaque, velit rerum ipsum voluptatibus
            veritatis aspernatur, a adipisci ut debitis non error vero. Non ipsa
            temporibus numquam. Id officiis deserunt dolores.
          </p>
        </CardBody>
        
      </Card>
    </>
  );
}
