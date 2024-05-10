import React from "react";
import { View } from "react-native";
import { MyButton } from "../components/MyButton";
import { styles } from './styles';
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../contexts/Auth";

export function AdminScreen(){
  const { signOut } = useAuth();
  const navigation = useNavigation();

  const handleAddRoom = () => {
    // Implemente a lógica para adicionar uma nova sala
    navigation.navigate('Add Sala');
  };

  const handleDeleteRoom = () => {
    // Implemente a lógica para excluir uma sala existente
    navigation.navigate('Del Sala');
  };

  const handleAddEquipment = () => {
    // Implemente a lógica para adicionar um novo equipamento
    navigation.navigate('Add Equipamento');
  };

  const handleDeleteEquipment = () => {
    // Implemente a lógica para excluir um equipamento existente
    navigation.navigate('Del Equipamento');
  };
  
  const handleDeleteReservation = () => {
    // Implemente a lógica para excluir uma Reserva existente
    navigation.navigate('Del Reserva');
  };

  const handleRelatorioReservation = () => {
    // Implemente a lógica para relatorio
    navigation.navigate('Relatorio Reserva');
  };

  return (
    <View style={styles.container}>
      <MyButton onPress={handleAddRoom} title="Adicionar Sala" />
      <MyButton onPress={handleDeleteRoom} title="Excluir Sala" />
      <MyButton onPress={handleAddEquipment} title="Adicionar Equipamento" />
      <MyButton onPress={handleDeleteEquipment} title="Excluir Equipamento" />
      <MyButton onPress={handleDeleteReservation} title="Excluir Reserva" />
      <MyButton onPress={handleRelatorioReservation} title="Relatorio Reserva" />
      <MyButton onPress={signOut} style={{backgroundColor: 'red'}} title="Sair do App" />
    </View>
  );
};
