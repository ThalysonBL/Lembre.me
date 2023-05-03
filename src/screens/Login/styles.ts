import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  font-family: ${({theme}) => theme.fonts.primary_600}
`;

export const ContainerLogo = styled.View`
  margin: 50px 0 50px 0;
  flex-direction: row;
  align-items: center;

`;

export const NameLogo = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: blue;
  margin-left: 10px;
`;
export const Title = styled.Text`
  font-size: 30px;
  margin-bottom: 90px;
`;
export const LoginLoja = styled.View`
  flex-direction: row;
  align-items: center;
  border: 1px solid #000000;
  border-radius: 6px;
  height: 50px;
  width: 80%;
  justify-content: center;
  margin: 10px auto; ;
`;
export const TextoLoja = styled.Text`
  font-size: 16px;
  margin-left: 10px;
`;
