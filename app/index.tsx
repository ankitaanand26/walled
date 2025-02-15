import { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { useRouter } from 'expo-router';

export default function IndexScreen() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const userLoggedIn = await SecureStore.getItemAsync('userLoggedIn');
        
        if (userLoggedIn === 'true') {
          router.replace('/home'); // Navigate to home if logged in
        } else {
          router.replace('/login'); // Navigate to login if not logged in
        }
      } catch (error) {
        console.error('Error checking login status:', error);
        router.replace('/login'); // Default to login if there's an error
      } finally {
        setLoading(false); // Ensure loading stops AFTER navigation
      }
    };

    checkLoginStatus();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#D3DADC' }}>
        <ActivityIndicator size="large" color="#455763" />
      </View>
    );
  }

  return null;
}
