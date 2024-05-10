import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

export function ReservationReportScreen() {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearchReservations = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://10.72.2.149:3000/reservada');
      
      if (!response.ok) {
        throw new Error('Erro ao buscar reservas');
      }
      
      const data = await response.json();
      setReservations(data);
    } catch (error) {
      console.error('Erro ao buscar reservas:', error);
      setReservations([]);
    } finally {
      setLoading(false);
    }
  };

  const renderReservations = () => {
    // Ordenar as reservas pelo horário, considerando que 'dateTime' contém a data e hora da reserva
    const sortedReservations = [...reservations].sort((a, b) => {
      return new Date(a.dateTime) - new Date(b.dateTime);
    });
  
    if (!sortedReservations.length) {
      return <Text style={styles.noReservationsText}>Nenhuma reserva encontrada</Text>;
    }
  
    return (
      <View>
        {sortedReservations.map((reservation, index) => (
          <View key={index} style={styles.reservationContainer}>
            <Text style={styles.reservationText}>Sala: {reservation.id}</Text>
            <Text style={styles.reservationText}>Usuário: {reservation.name}</Text>
            <Text style={styles.reservationText}>Data e Hora: {new Date(reservation.dateTime).toLocaleString()}</Text>
          </View>
        ))}
      </View>
    );
  };
  

  return (
    <SafeAreaView>
    <ScrollView contentContainerStyle={styles.scrollContent}>
    <View style={styles.container}>
      <Button
        title="Buscar Reservas"
        onPress={handleSearchReservations}
      />
      {loading ? (
        <Text style={styles.loadingText}>Carregando...</Text>
      ) : (
        <View style={styles.reservationsContainer}>
          {renderReservations()}
        </View>
      )}
    </View>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  reservationsContainer: {
    marginTop: 20,
  },
  reservationContainer: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  reservationText: {
    fontSize: 16,
  },
  noReservationsText: {
    fontSize: 16,
    fontStyle: 'italic',
  },
  loadingText: {
    fontSize: 16,
    marginTop: 20,
    textAlign: 'center',
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
