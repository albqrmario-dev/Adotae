import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#2F80ED' },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: { fontWeight: 'bold' },
      }}>
      <Stack.Screen
        name="index"
        options={{ title: 'Adotaê - Início' }}
      />
      <Stack.Screen
        name="animais/index"
        options={{ title: 'Animais para Adoção' }}
      />
      <Stack.Screen
        name="animais/[id]"
        options={{ title: 'Detalhes do Animal' }}
      />
    </Stack>
  );
}

