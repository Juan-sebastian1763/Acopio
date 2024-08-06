
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
      <div className="flex flex-col w-full login ">
        <h1 className="title-app"></h1>
        <Card className="max-w-full w-[480px] h-[520px] login-form ">
          <CardBody className="overflow-hidden">
            <Tabs
              fullWidth
              size="lg"
              aria-label="Tabs form"
              selectedKey={selected}
              onSelectionChange={setSelected}
            >
              <Tab key="login" title="Inicio de sesión">
                <form className="flex flex-col gap-8 mt-6">
                  <Input
                    isRequired
                    label="Correo electrónico"
                    placeholder="Ingresa tu correo electronico"
                    type="email"
                    size="lg"
                    className="hover:border-[#109e49] focus:border-[#109e49] focus:ring-[#109e49]"
                  />
                  <Input
                    isRequired
                    label="Contraseña"
                    placeholder="Ingresa tu contraseña"
                    type="password"
                    size="lg"
                    className="hover:border-[#109e49] focus:border-[#109e49] focus:ring-[#109e49]"
                  />

                  <p className="text-center text-small mt-4" color="primary">
                    ¿Registrar Nuevo Instructor?{" "}
                    <Link size="lg" onPress={() => setSelected("sign-up")}>
                      Registrar
                    </Link>
                  </p>
                  <div className="flex gap-2 justify-end mt-4 ">
                    <Button
                      fullWidth
                      color="success"
                      size="lg"
                      className="boton-iniciar-sesion"
                    >
                      Iniciar Sesión
                    </Button>
                  </div>
                </form>
              </Tab>
              <Tab key="sign-up" title="Registro de instructor">
                <form className="flex flex-col gap-6 mt-6 ">
                  <Input
                    variant="light"
                    isRequired
                    label="Nombre"
                    placeholder="Ingresa tu nombre completo"
                    type="text"
                    size="lg"
                    className="input"
                  />
                  <Input
                    isRequired
                    label="Correo Electrónico"
                    placeholder="Ingresa tu correo electrónico"
                    type="email"
                    size="lg"
                    className="input"
                  />
                  <Input
                    isRequired
                    label="Contraseña"
                    placeholder="Ingresa tu contraseña"
                    type="password"
                    size="lg"
                    isInvalid={false}
                    errorMessage="Ingresa un correo válido"
                    className="input"
                  />
                  <p className="text-center text-small mt-4">
                    ¿Ya tienes una cuenta?{" "}
                    <Link size="lg" onPress={() => setSelected("login")}>
                      Iniciar Sesión
                    </Link>
                  </p>
                  <div className="flex gap-2 justify-end mt-4">
                    <Button
                      fullWidth
                      color="success"
                      size="lg"
                      className="boton-registrarse"
                    >
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
