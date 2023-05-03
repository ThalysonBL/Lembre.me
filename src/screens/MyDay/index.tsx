import React, { useState } from "react";
import Lampada from "../../../assets/ImgLamp.png";
import {
  Container,
  Name,
  ContentInput,
  InputCriar,
  Circulo,
  ModalNative,
  ContainerModal,
  ContentModal,
  GoBack,
  ImgLampada,
  DescriptionButton,
  InputAddTask,
  InputTextAdd,
} from "./styles";
import { Entypo } from "@expo/vector-icons";
export function MyDay() {
  const [task, setTask] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  function hora() {
    const data = new Date().toLocaleTimeString("pt-BR", {
      hour: "numeric",
      hour12: false,
    });

    if (data > 6 && data < 12) {
      return "Bom dia";
    } else if (data >= 12 && data < 18) {
      return "Boa tarde";
    } else {
      return "Boa noite";
    }
  }
  function handleOpenModal() {
    setModalVisible(true);
  }
  function handleCloseModal() {
    setModalVisible(!modalVisible);
  }

  function handleTaskCreated(event) {
    
    console.log(setTask(event.target.value));
  }

  return (
    <Container>
      <ModalNative
        animationType="slide "
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <ContainerModal>
          <GoBack>
            <Entypo
              name="chevron-left"
              size={30}
              color="black"
              onPress={handleCloseModal}
            />
          </GoBack>
          <ContentModal>
            <InputCriar placeholder="Procurar em tarefas" />

            <ImgLampada source={Lampada} />
            <DescriptionButton>
              Aqui, você pode revisar as sugestôes de hoje.
            </DescriptionButton>
            <InputAddTask>
              <InputTextAdd>Adicionar tarefa</InputTextAdd>
            </InputAddTask>
          </ContentModal>
        </ContainerModal>
      </ModalNative>
      <Name>{hora()}, Thalyson. Quais as tarefas para hoje?</Name>

      <ContentInput>
        <InputCriar
          placeholder="Eu quero.."
          value={task}
          onChange={handleTaskCreated}
        />
        <Circulo>
          <Entypo
            name="light-bulb"
            size={30}
            color="white"
            onPress={handleOpenModal}
          />
        </Circulo>
      </ContentInput>
    </Container>
  );
}
