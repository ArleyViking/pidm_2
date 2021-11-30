import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import StackRaizTela from './src/Routes';

export default function App() {

    return (
      <SafeAreaProvider>
       <StackRaizTela></StackRaizTela>
      </SafeAreaProvider>
  );
}

