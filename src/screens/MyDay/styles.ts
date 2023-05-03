import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
export const Container = styled.View`
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;

export const Name = styled.Text`
  font-size: 25px;
  font-weight: bold;
  padding: 0 20px;
`;
export const ContentInput = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;

  justify-content: space-between;
  background-color: white;
  padding: 10px 20px;
`;
export const InputCriar = styled.TextInput`
  width: 83%;
  border: 1px solid gray;
  font-size: 20px;
  padding: 10px 12px 10px 30px;
  border-radius: 40px;
`;

export const Circulo = styled(RectButton)`
  border: 1px solid black;
  border-radius: 40px;
  padding: 9px
  background-color: ${({theme}) => theme.colors.background_primary};
`;

export const ModalNative = styled.Modal``;
export const ContainerModal = styled.View`
  padding: 20px;
  width: 100%;
`;

export const ContentModal = styled.View`
  align-items: center;
  justify-content: center;
`;
export const GoBack = styled(RectButton)`
  width: 30px;
  height: 30px;
  border-radius: 100px;
  align-items: center;
  justify-content: center;
`;

export const ImgLampada = styled.Image`
  margin-top: 30px;
`;

export const DescriptionButton = styled.Text`
  font-size: 16px;
  margin: 20px 0;
`;
export const InputAddTask = styled(RectButton)`
  background-color: ${({theme}) => theme.colors.background_secondary};
  border-radius: 40px;
  padding: 10px 20px;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;
export const InputTextAdd = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: 600;
`;
