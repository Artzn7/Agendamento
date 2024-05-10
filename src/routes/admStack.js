import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';


import { AdminScreen } from '../screens/AdminScreen';
import { AddRoomScreen } from '../screens/AddRoomScreen';
import { DelRoomScreen } from '../screens/DelRoomScreen';
import { AddEquiScreen } from '../screens/AddEquiScreen';
import { DelEquiScreen } from '../screens/DelEquiScreen';
import { DelReservationScreen } from '../screens/DelReservationScreen';
import { ReservationReportScreen } from '../screens/ReservationReportScreen';



const Stack = createNativeStackNavigator();

export function AdmStack() {
    return (
        <Stack.Navigator>
          <Stack.Screen name="Admin" component={AdminScreen} />
          <Stack.Screen name="Add Sala" component={AddRoomScreen} />
          <Stack.Screen name="Del Sala" component={DelRoomScreen} />
          <Stack.Screen name="Add Equipamento" component={AddEquiScreen} />
          <Stack.Screen name="Del Equipamento" component={DelEquiScreen} />
          <Stack.Screen name="Del Reserva" component={DelReservationScreen} />
          <Stack.Screen name="Relatorio Reserva" component={ReservationReportScreen} />
        </Stack.Navigator>
      );
}
