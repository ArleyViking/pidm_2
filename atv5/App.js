import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainStackScreen from './src/components/CRUD/Routes';

export default function App() {

    return (
      <SafeAreaProvider>
      <MainStackScreen></MainStackScreen>
      </SafeAreaProvider>
  );
}

