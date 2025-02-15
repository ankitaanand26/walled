import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter email and password.');
      return;
    }
    router.replace('/home'); // Redirect to home
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to WallEd</Text>

      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => Alert.alert('Sign Up', 'Redirecting to sign-up...')}>
        <Text style={styles.signUpText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#E8E2DA' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#455763', marginBottom: 20 },
  input: { width: '80%', padding: 15, borderRadius: 10, borderWidth: 1, marginBottom: 10, backgroundColor: 'white' },
  button: { backgroundColor: '#D6C9B4', padding: 15, borderRadius: 10, width: '80%', alignItems: 'center' },
  buttonText: { color: '#455763', fontWeight: 'bold' },
  signUpText: { marginTop: 10, color: '#455763' },
});
