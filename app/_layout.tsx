import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="login" options={{ title: "Login", headerShown: false }} />
      <Stack.Screen name="home" options={{ title: "WallEd", headerShown: false }} />
      <Stack.Screen name="settings" options={{ title: "Settings" }} />
      <Stack.Screen name="recharge" options={{ title: "Recharge Wallet" }} />
      <Stack.Screen name="report" options={{ title: "Report Issue" }} />
    </Stack>
  );
}
