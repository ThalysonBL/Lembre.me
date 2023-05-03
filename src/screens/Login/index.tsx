import React from "react";

import AntDesign from "@expo/vector-icons/AntDesign";
import {
  Container,
  ContainerLogo,
  NameLogo,
  Title,
  LoginLoja,
  IconLoja,
  TextoLoja,
} from "./styles";

export function Login() {
  return (
    <Container>
      <ContainerLogo>
        <AntDesign name="calendar" size={30} color="blue"/>
        <NameLogo>
          Lembre.me
        </NameLogo>
      </ContainerLogo>

      <Title>Conecte-se com o Lembre.me</Title>

      <LoginLoja>
        <AntDesign name="google" size={20} />
        <TextoLoja>Login Google</TextoLoja>
      </LoginLoja>
      <LoginLoja>
        <AntDesign name="apple1" size={20} />
        <TextoLoja>Login Apple Store</TextoLoja>
      </LoginLoja>
    </Container>
  );
}
