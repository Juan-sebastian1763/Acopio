import React from "react";

import {
  Tabs,
  Tab,
  Input,
  Link,
  Button,
  Card,
  CardBody,
} from "@nextui-org/react";
import "../assets/css/Login.css";

function Login() {
  const [selected, setSelected] = React.useState("login");
  return (
    <>
      <div className="flex flex-col w-full login">
        <h1 className="title-app"></h1>
        <Card className="max-w-full w-[380px] h-[420px] login-form">
          <CardBody className="overflow-hidden">
            <Tabs
              fullWidth
              size="lg"
              aria-label="Tabs form"
              selectedKey={selected}
              onSelectionChange={setSelected}
            >
              <Tab key="login" title="Inicio de sesion">
                <form className="flex flex-col gap-6">
                  <Input
                    isRequired
                    label="Correo electronico"
                    placeholder="Ingresa tu correo electronico"
                    type="email"
                    size="lg"
                  />
                  <Input
                    isRequired
                    label="Constraseña"
                    placeholder="Ingresa tu contraseña"
                    type="password"
                    size="lg"
                  />
                  <p className="text-center text-small">
                    Registrar Nuevo Instructor?{" "}
                    <Link size="lg" onPress={() => setSelected("sign-up")}>
                      Registrar
                    </Link>
                  </p>
                  <div className="flex gap-2 justify-end">
                    <Button fullWidth color="primary" size="lg">
                      Iniciar Sesion
                    </Button>
                  </div>
                </form>
              </Tab>
              <Tab key="sign-up" title="Registro de instructor">
                <form className="flex flex-col gap-4 h-[300px]">
                  <Input
                    isRequired
                    label="Nombre"
                    placeholder="Ingresa tu nombre completo"
                    type="text"
                    size="lg"
                  />
                  <Input
                    isRequired
                    label="Correo Electronico"
                    placeholder="Ingresa tu correo electronico"
                    type="email"
                    size="lg"
                  />
                  <Input
                    isRequired
                    label="Contraseña"
                    placeholder="Ingresa tu constraseña"
                    type="password"
                    size="lg"
                    isInvalid={false}
                    errorMessage="Ingresa un correo valido"
                  />
                  <p className="text-center text-small">
                    Ya tienes una cuenta?{" "}
                    <Link size="lg" onPress={() => setSelected("login")}>
                      Iniciar Sesion
                    </Link>
                  </p>
                  <div className="flex gap-2 justify-end">
                    <Button fullWidth color="primary" size="lg">
                      Registrarme
                    </Button>
                  </div>
                </form>
              </Tab>
            </Tabs>
          </CardBody>
        </Card>
      </div>
    </>
  );
}

export default Login;
